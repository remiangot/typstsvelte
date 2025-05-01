export const defaultTypstPreamble = `
#set text(lang: "fr", font: "New Computer Modern")
#set page(footer: align("CC-BY-SA Coopmaths", right)) // Pied de page

#set enum(numbering: n => text(weight: "bold")[#n.], // Numéros en gras
spacing: 2em, // Espace entre les questions
)

#show math.equation.where(block: false): box // Pas de saut de ligne dans les équations

#show heading.where(
  level: 1
  ): it => block(width: 100%, below: 2em)[
    #set align(center)
    #set text(13pt, weight: "bold")
    #smallcaps(it.body)
    ]
    
    // #set page(footer: align(image("logoCoopmaths.png", height: 0.6cm), right)) // Pied de page
    `
