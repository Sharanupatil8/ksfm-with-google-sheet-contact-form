"use server";

export async function submitFormToGoogleSheets(formData) {
  console.log(formData);
  const googleScriptURL =
    "https://script.google.com/macros/s/AKfycbzSphdy14uJYTYLpYBvktdqawzPEEidf5m5ft10K5bRP4Wy4-VcyIfVLJfw5eWa9fMO/exec";

  try {
    const response = await fetch(googleScriptURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to submit form");
    }

    return { success: true, message: "Form submitted successfully!" };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
