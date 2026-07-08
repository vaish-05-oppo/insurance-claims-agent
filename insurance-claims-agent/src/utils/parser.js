// Returns the value for a given keyword
export function getValue(text, keyword) {

    const lines = text.split("\n");

    for (let i = 0; i < lines.length; i++) {

        const line = lines[i].trim();

        // Case-insensitive comparison
        if (line.toLowerCase().startsWith(keyword.toLowerCase())) {

            const index = line.indexOf(":");

            // Value is on the same line
            if (index !== -1) {

                const value = line.substring(index + 1).trim();

                if (value !== "") {
                    return value;
                }

            }

            // Value is on the next non-empty line
            for (let j = i + 1; j < lines.length; j++) {

                if (lines[j].trim() !== "") {
                    return lines[j].trim();
                }

            }

        }

    }

    return "";
}


// Try multiple possible labels
export function getFirstValue(text, keywords) {

    for (let i = 0; i < keywords.length; i++) {

        const value = getValue(text, keywords[i]);

        if (value !== "") {
            return value;
        }

    }

    return "";

}


// Extract all required fields
export function extractFields(text) {

    return {

        policyNumber: getFirstValue(text, [
            "Policy Number",
            "POLICY NUMBER"
        ]),

        policyholder: getFirstValue(text, [
            "Policyholder Name",
            "Policy Holder",
            "Customer Name",
            "CUSTOMER NAME",
            "Insured Name"
        ]),

        effectiveDates: getFirstValue(text, [
            "Effective Dates",
            "Policy Effective Dates",
            "Coverage Period"
        ]),

        incidentDate: getFirstValue(text, [
            "Incident Date",
            "INCIDENT DATE",
            "Date"
        ]),

        incidentTime: getFirstValue(text, [
            "Incident Time",
            "Time"
        ]),

        location: getFirstValue(text, [
            "Location",
            "LOCATION"
        ]),

        description: getFirstValue(text, [
            "Description",
            "DESCRIPTION"
        ]),

        claimant: getFirstValue(text, [
            "Claimant",
            "Claimant Name"
        ]),

        thirdParty: getFirstValue(text, [
            "Third Parties",
            "Third Party",
            "Other Party"
        ]),

        contact: getFirstValue(text, [
            "Contact Number",
            "CONTACT NUMBER",
            "Contact",
            "Phone",
            "Mobile"
        ]),

        assetType: getFirstValue(text, [
            "Asset Type",
            "Vehicle Type"
        ]),

        assetID: getFirstValue(text, [
            "Asset ID",
            "Vehicle Number",
            "VEHICLE NUMBER",
            "Registration Number"
        ]),

        estimatedDamage: getFirstValue(text, [
            "Estimated Damage",
            "ESTIMATED DAMAGE",
            "Damage Estimate"
        ]),

        claimType: getFirstValue(text, [
            "Claim Type",
            "CLAIM TYPE"
        ]),

        attachments: getFirstValue(text, [
            "Attachments",
            "Documents Attached"
        ]),

        initialEstimate: getFirstValue(text, [
            "Initial Estimate",
            "Repair Estimate"
        ])

    };

}