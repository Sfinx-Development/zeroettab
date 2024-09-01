// netlify-functions/server.js

export async function handler(event) {
  if (event.httpMethod === "POST") {
    // Hämta JSON-data från begäran
    const body = JSON.parse(event.body);
    console.log("Callback data:", body);

    if (body.transactionStatus === "COMPLETED") {
      console.log("Betalning slutförd");
    } else {
      console.log("Anropet indikerade ett problem:", body);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Success" }),
    };
  }

  // Hantera metod inte tillåten (endast POST är tillåtet)
  return {
    statusCode: 405,
    body: JSON.stringify({ message: "Method Not Allowed" }),
  };
}
