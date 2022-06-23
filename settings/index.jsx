  function mySettings(props) {
  return (
    <Page>
      <Section>
        {<Text bold align="center">Creato da Giulio Sorrentino</Text>}
        {<Text bold align="center">Dedicato a Francesca Milano</Text>}}
        {<Text bold align="center">Questo programma è sotto licenza GPL v3 o, secondo il tuo parere, qualsiasi versione successiva</Text>}
        {<Text bold align="center">https://www.github.com/numerunix/HelloFit</Text>}
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);
