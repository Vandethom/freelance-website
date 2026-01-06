import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Valider les données
  if (!body.nom || !body.prenom || !body.email || !body.description) {
    throw createError({
      statusCode: 400,
      message: 'Données manquantes'
    })
  }

  // Construire le contenu de l'email
  const emailContent = `
<h2>Nouvelle demande de devis</h2>

<h3>INFORMATIONS CLIENT</h3>
<ul>
  <li><strong>Nom:</strong> ${body.nom} ${body.prenom}</li>
  <li><strong>Email:</strong> ${body.email}</li>
  <li><strong>Téléphone:</strong> ${body.telephone || 'Non renseigné'}</li>
  <li><strong>Entreprise:</strong> ${body.entreprise || 'Non renseigné'}</li>
</ul>

<h3>PROJET</h3>
<ul>
  <li><strong>Type de projet:</strong> ${body.typeProjet || 'Non renseigné'}</li>
  <li><strong>Budget estimé:</strong> ${body.budget || 'Non renseigné'}</li>
  <li><strong>Délai souhaité:</strong> ${body.delai || 'Non renseigné'}</li>
</ul>

<h3>DESCRIPTION</h3>
<p>${body.description.replace(/\n/g, '<br>')}</p>
  `.trim()

  // Vérifier si les variables d'environnement sont configurées
  const emailUser = process.env.EMAIL_USER
  const emailPassword = process.env.EMAIL_PASSWORD

  if (!emailUser || !emailPassword || emailPassword === 'votre_mot_de_passe_ici') {
    // Mode développement : afficher dans la console
    console.log('\n=== DEMANDE DE DEVIS ===')
    console.log('De:', body.email)
    console.log('Nom:', body.nom, body.prenom)
    console.log('Type:', body.typeProjet)
    console.log('Description:', body.description)
    console.log('========================\n')
    
    return {
      success: true,
      message: 'Demande enregistrée (mode développement - email non configuré)'
    }
  }

  try {
    // Configuration du transporteur email
    const transporter = nodemailer.createTransport({
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false,
      auth: {
        user: emailUser,
        pass: emailPassword
      }
    })

    // Envoyer l'email
    await transporter.sendMail({
      from: emailUser,
      to: 'thomas.vandenbussche@outlook.com',
      replyTo: body.email,
      subject: `Demande de devis - ${body.nom} ${body.prenom}`,
      html: emailContent
    })

    return {
      success: true,
      message: 'Demande envoyée avec succès'
    }
  } catch (error: any) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    
    // Retourner une erreur plus détaillée
    throw createError({
      statusCode: 500,
      message: `Erreur lors de l'envoi: ${error.message || 'Erreur inconnue'}`
    })
  }
})
