export function decideRoute(data, missingFields) {

    let description = "";

    if (data.description) {

        description = data.description.toLowerCase();

    }

    if (
        description.includes("fraud") ||
        description.includes("staged") ||
        description.includes("inconsistent")
    ) {

        return {

            recommendedRoute: "Investigation Flag",

            reasoning:
                "Description contains fraud-related keywords."

        };

    }

    if (missingFields.length > 0) {

        return {

            recommendedRoute: "Manual Review",

            reasoning:
                "Mandatory fields are missing."

        };

    }

    if (
        data.claimType &&
        data.claimType.toLowerCase() === "injury"
    ) {

        return {

            recommendedRoute: "Specialist Queue",

            reasoning:
                "Claim type is Injury."

        };

    }

    if (
        Number(data.estimatedDamage) < 25000
    ) {

        return {

            recommendedRoute: "Fast Track",

            reasoning:
                "Estimated damage is below ₹25,000."

        };

    }

    return {

        recommendedRoute: "Standard Processing",

        reasoning:
            "All validations passed."

    };

}