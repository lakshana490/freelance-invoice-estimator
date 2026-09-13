document.addEventListener("DOMContentLoaded", function () {

```
const form = document.getElementById("estimatorForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();


    // Get values

    const service =
        document.getElementById("service").value;


    const hours =
        Number(document.getElementById("hours").value);


    const experience =
        document.querySelector(
            'input[name="experience"]:checked'
        ).value;


    const complexity =
        document.querySelector(
            'input[name="complexity"]:checked'
        ).value;


    const urgency =
        document.getElementById("urgency").value;


    // Service rates

    const serviceRates = {

        web: 500,

        uiux: 450,

        graphic: 350,

        data: 550,

        content: 300,

        marketing: 400,

        automation: 600

    };


    // Experience multipliers

    const experienceMultipliers = {

        beginner: 1,

        intermediate: 1.2,

        expert: 1.5

    };


    // Complexity multipliers

    const complexityMultipliers = {

        basic: 1,

        medium: 1.25,

        advanced: 1.5

    };


    // Urgency percentages

    const urgencyCharges = {

        normal: 0,

        urgent: 0.20,

        veryUrgent: 0.40

    };


    // Base price

    const hourlyRate =
        serviceRates[service];


    const baseCost =
        hourlyRate * hours;


    // Experience adjustment

    const experienceCost =
        baseCost *
        experienceMultipliers[experience];


    const experienceAdjustment =
        experienceCost -
        baseCost;


    // Complexity adjustment

    const complexityCost =
        experienceCost *
        complexityMultipliers[complexity];


    const complexityAdjustment =
        complexityCost -
        experienceCost;


    // Urgency adjustment

    const urgencyAdjustment =
        complexityCost *
        urgencyCharges[urgency];


    // Final price

    const finalPrice =
        complexityCost +
        urgencyAdjustment;


    // Currency formatting

    const formatCurrency = function (amount) {

        return "₹" +
            Math.round(amount)
            .toLocaleString("en-IN");

    };


    // Update final price

    document.getElementById("finalPrice").textContent =
        formatCurrency(finalPrice);


    // Update breakdown

    document.getElementById("baseCost").textContent =
        formatCurrency(baseCost);


    document.getElementById("experienceCost").textContent =
        "+ " +
        formatCurrency(experienceAdjustment);


    document.getElementById("complexityCost").textContent =
        "+ " +
        formatCurrency(complexityAdjustment);


    document.getElementById("urgencyCost").textContent =
        "+ " +
        formatCurrency(urgencyAdjustment);


    document.getElementById("totalBreakdown").textContent =
        formatCurrency(finalPrice);


    // Market range

    const minimumMarketPrice =
        finalPrice * 0.90;


    const maximumMarketPrice =
        finalPrice * 1.15;


    document.getElementById("marketRange").textContent =
        formatCurrency(minimumMarketPrice) +
        " - " +
        formatCurrency(maximumMarketPrice);


    // Smart suggestion

    const suggestion =
        document.getElementById("suggestion");


    if (experience === "beginner") {

        suggestion.textContent =
            "This is a good starting price. Make sure you do not undervalue your work.";

    }

    else if (experience === "intermediate") {

        suggestion.textContent =
            "This price is competitive and suitable for your experience level.";

    }

    else {

        suggestion.textContent =
            "Your expertise allows you to charge a premium price for high-quality work.";

    }


    // Price status

    const priceStatus =
        document.getElementById("priceStatus");


    if (urgency === "urgent") {

        priceStatus.textContent =
            "Urgency charges have been added.";

    }

    else if (urgency === "veryUrgent") {

        priceStatus.textContent =
            "Premium charges have been added for a very urgent project.";

    }

    else {

        priceStatus.textContent =
            "This estimate is based on a normal project deadline.";

    }


    // Show save button

    const saveButton =
        document.getElementById("saveEstimate");


    saveButton.classList.remove("hidden");

});
```

});
