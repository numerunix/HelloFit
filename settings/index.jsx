  function mySettings(props) {
  return (
    <Page>
      <Section>
        {<Text bold align="center">Creato da Giulio Sorrentino</Text>}
        {<Text bold align="center">Dedicato a Francesca Milano</Text>}      
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);
