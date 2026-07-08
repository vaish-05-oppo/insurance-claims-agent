function DashboardCards({ fields, missing, route }) {
    const total = 16;
    const filled = Object.values(fields).filter(value => value !== "").length;

    return (
        <div className="cards">
            <div className="stat">
                <h3>Fields</h3>
                <p>{filled}/{total}</p>
            </div>
            <div className="stat">
                <h3>Missing</h3>
                <p>{missing.length}</p>
            </div>
            <div className="stat">
                <h3>Route</h3>
                <p>{route}</p>
            </div>
            <div className="stat">
                <h3>Damage</h3>

                <p>₹ {fields.estimatedDamage}</p>
            </div>
        </div>

    )

}

export default DashboardCards;