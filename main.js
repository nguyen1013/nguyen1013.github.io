function funFact() {
  const timeContainer = document.getElementById("time-container");
  const startingDay = "08/31/2023";
  const startingDay_Date = new Date(startingDay);
  const intlNumberFormatter = new Intl.NumberFormat("en-US");

  setInterval(() => {
    const now = new Date();
    const difference = Math.floor(
      (now.getTime() - startingDay_Date.getTime()) / 1000
    );

    timeContainer.innerHTML = intlNumberFormatter.format(difference);
  }, 1000);
}

funFact();