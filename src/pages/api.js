const BASE_URL = "http://localhost:3000";

export async function submitAPI(formData) {
  try {
    const response = await fetch(`${BASE_URL}/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (data.success) {
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function fetchAPI(date) {
  try {
    const response = await fetch(`/api/reservations?date=${date}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.availableTimes;
  } catch (error) {
    console.log(error);
    return null;
  }
}