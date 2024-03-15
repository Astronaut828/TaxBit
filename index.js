import TaxBit from '@taxbit/browser';

async function loadTaxDocumentationForm() {
    const taxBit = new TaxBit({
        bearerToken:
            "// Enter Token //",
            environment: "sandbox" // Change to "production" in your production environment
    });

    try {
        const result = await taxBit.ui.taxDocumentation.collect({
            hostElement: document.querySelector("#tax-info-container"),
            // Optional: Include any pre-collected data or configuration here
        });

        console.log("Form loaded successfully.");
        await result.formCompletion;
        console.log("Form completed successfully.");
    } catch (error) {
        console.error("Error loading or completing the form:", error);
        // Handle errors, such as by showing a user-friendly message
    }
}

loadTaxDocumentationForm();