function calculateBMI(height: number, weight: number): string {
    if (height <= 0 || weight <= 0) {
        throw new Error("Height and weight must be greater than 0.");
    }

    const bmi = weight / (height * height);

    if (bmi < 18.5) {
        return "Underweight";
    }

    if (bmi < 25) {
        return "Normal weight";
    }

    if (bmi < 30) {
        return "Overweight";
    }

    return "Obesity";
}