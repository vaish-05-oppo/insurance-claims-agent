export function validateFields(data) {

    let missingFields = [];

    for (let key in data) {

        if (data[key] === "" || data[key] === null || data[key] === undefined) {

            missingFields.push(key);

        }

    }

    return missingFields;

}

export function checkInconsistency(data) {

    let inconsistencies = [];

    if (
        data.estimatedDamage &&
        data.initialEstimate &&
        Number(data.estimatedDamage) !== Number(data.initialEstimate)
    ) {
        inconsistencies.push(
            "Estimated Damage and Initial Estimate do not match."
        );
    }

    if (
        data.claimType &&
        data.claimType.toLowerCase() === "injury" &&
        data.assetType === ""
    ) {
        inconsistencies.push(
            "Asset Type is missing for injury claim."
        );
    }

    return inconsistencies;

}