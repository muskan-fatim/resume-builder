function createResume(): void {
    (document.querySelector(".form-container") as HTMLDivElement).style.display = "none";
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const father = (document.getElementById("father") as HTMLInputElement).value;
    const contact = (document.getElementById("contact") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLInputElement).value;
    const college = (document.getElementById("college") as HTMLInputElement).value;
    const describe1 = (document.getElementById("describe1") as HTMLInputElement).value;
    const college2 = (document.getElementById("college2") as HTMLInputElement).value;
    const describe2 = (document.getElementById("describe2") as HTMLInputElement).value;
    const fieldOfStudy = (document.getElementById("field_of_study") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value
        .split(",")
        .map(skill => skill.trim())
        .join(", ");
    const experience = (document.getElementById("experience") as HTMLInputElement).value;

    const resumeContainer = document.getElementById("resume") as HTMLElement;
    resumeContainer.innerHTML = `
        <div class="container">
            <aside class="sidebar">
                <div class="profile-info">
                    <h2>${name}</h2>
                    <p><strong>Father's Name:</strong> ${father}</p>
                    <section class="profile-details">
                        <h3>Profile</h3>
                        <p>${fieldOfStudy}</p>
                    </section>
                    <section class="contact-info">
                        <h3>Contact Me</h3>
                        <p><strong>📞</strong> ${contact}</p>
                        <p><strong>📧</strong> ${email}</p>
                        <p><strong>📍</strong> ${address}</p>
                    </section>
                </div>
            </aside>
            <main class="main-content">
                <section>
                    <h3>Education</h3>
                    <p><strong>${college}:</strong><br> ${describe1}</p>
                    <p><strong>${college2}:</strong><br> ${describe2}</p>
                </section>
                <section>
                    <h3>Skills</h3>
                    <p>${skills}</p>
                </section>
                <section>
                    <h3>Experience</h3>
                    <p>${experience}</p>
                </section>
            </main>
        </div>`;
}
