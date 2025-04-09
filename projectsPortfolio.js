document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("project-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalJobTitle = document.getElementById("modal-job-title");
    const modalDescription = document.getElementById("modal-description");
    const modalContent = document.getElementById("modal-content");
    const closeModal = document.querySelector(".modal .close");
  
    // Handle card clicks
    document.querySelectorAll(".project-card").forEach((card) => {
      card.addEventListener("click", () => {
        const title = card.dataset.title;
        const jobTitleElement = card.querySelector(".job-title");
  
        modalTitle.textContent = title;
        modalJobTitle.textContent = jobTitleElement
          ? jobTitleElement.textContent
          : "";
  
        // Set background image for modal content
        const bgImage = card.dataset.bgimage;
        modalContent.style.backgroundImage = bgImage
          ? `url('${bgImage}')`
          : "";
  
        // Look for matching content in templates
        const templates = [
          document.getElementById("project-details"),
          document.getElementById("project-details-xsolla"),
        ];
  
        let matchedSection = null;
  
        for (const template of templates) {
          if (template) {
            const section = template.content.querySelector(
              `[data-project="${title}"]`
            );
            if (section) {
              matchedSection = section.innerHTML;
              break;
            }
          }
        }
  
        modalDescription.innerHTML =
          matchedSection || card.dataset.description || "";
  
        // Animate modal pop-in
        modalContent.classList.remove("expand");
        setTimeout(() => {
          modalContent.classList.add("expand");
        }, 10);
  
        modal.style.display = "block";
      });
    });
  
    // Close modal on click of close button
    if (closeModal) {
      closeModal.addEventListener("click", () => {
        modalContent.classList.remove("expand");
        modal.style.display = "none";
      });
    }
  
    // Close modal on background click
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modalContent.classList.remove("expand");
        modal.style.display = "none";
      }
    });
  });
  