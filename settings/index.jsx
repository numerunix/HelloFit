  function mySettings(props) {
  return (
    <Page>
      <Section>
        {<Text bold align="center">Creato da Giulio Sorrentino</Text>}
        {<Text bold align="center">Dedicato a Francesca Milano</Text>}}
        {<Text bold align="center">Questo programma è sotto licenza GPL v3 o, secondo la tua opinione, qualsiasi versione successiva</text>}
        {<Text bold align="center">https://www.github.com/numerunix/FitFortune</Text>}
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);
