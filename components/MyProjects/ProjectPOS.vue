<template>
    <section class="project-section">
      <div class="pos-cover">
        <img class="scrolling-image" src="/assets/Images/project/salesystem/pos_main.png" alt="Easy Sale System POS" title="Easy Sale System POS">
      </div>
      <div class="pos-title">
          <p class="main-heading" style="display: flex; align-items: center; justify-content: center;">
            <img class="pos-logo" src="/assets/Images/icon/live-svgrepo-com.svg" alt="POS Logo" title="logo" style="width: 40px; margin-right: 15px;">
            Easy Sale System POS
          </p>
          <div class="project-description">
                <p>Developed a high-performance desktop POS system using Python and PyQt5, featuring a robust SQLite backend with WAL optimization and automated Google Drive cloud backup synchronization.</p>
                <p>
                  This project was engineered to empower local businesses with enterprise-grade tools. It features a sophisticated UI built with QtWebEngine for dynamic HTML/CSS thermal receipts and utilizes ReportLab and PyQtChart for comprehensive business analytics.
                </p>
          </div>
      </div>
      
      <ProjectPoints style="margin-bottom: 50px;"/>
      
      <div class="project-screens">
        <div class="screen-content">
          <p class="main-heading">Modern Dashboard</p>
          <p>
            The dashboard provides a seamless experience for retail transactions, featuring a real-time product grid, inventory management, and a streamlined checkout process.
          </p>
        </div>
        <img class="laptop" src="/assets/Images/project/salesystem/salesystem.png" alt="POS Dashboard Screen" title="Easy Sale System">
      </div>

      <div class="implementation">
        <p class="main-heading" style="font-size: 20px; margin-bottom: 15px;">Technical Implementation:</p>
        <p>
          Built with Python and PyQt5, the system ensures high performance and stability. The backend utilizes SQLite with WAL (Write-Ahead Logging) for optimized concurrent access and data integrity. 
          Automated cloud backups via Google Drive API provide data security for business owners.
        </p>
        <p>
          For reporting, I integrated ReportLab to generate PDF invoices and PyQtChart to provide visual insights into sales trends and inventory levels. 
          The receipt system uses QtWebEngine to render dynamic HTML templates, allowing for highly customizable and professional thermal receipts.
        </p>
      </div>

      <div class="implementation">
        <p class="main-heading" style="font-size: 20px; margin-bottom: 15px">Key Features:</p>
        <ul>
          <li><p><strong>Cloud Synchronization:</strong> Automated backups to Google Drive to prevent data loss.</p></li>
          <li><p><strong>Advanced Analytics:</strong> Visual sales reports and inventory tracking using PyQtChart.</p></li>
          <li><p><strong>Dynamic Receipts:</strong> Professional HTML/CSS based thermal receipt generation.</p></li>
          <li><p><strong>Performance Optimized:</strong> SQLite WAL mode for fast and reliable database operations.</p></li>
        </ul>
      </div>
      
      <ShortDetail />
    </section>
</template>
  
<script setup>
import ProjectPoints from '../feature/ProjectPoints.vue';
import ShortDetail from '../feature/ShortDetail.vue'
</script>

<style lang="scss" scoped>
.pos-cover {
  height: 450px;
  overflow: hidden;
  position: relative;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background: #121212;
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    background: linear-gradient(0deg, rgba(14,14,14,1) 5%, rgba(14,14,14,0.4) 42%, rgba(14, 14, 14, 0) 100%);
  }

  .scrolling-image {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    animation: scrollImage 25s linear infinite alternate;
  }
}

.pos-title {
  margin-top: -100px;
  position: relative;
  z-index: 2;
  text-align: center;
}

@keyframes scrollImage {
  0% { transform: translateY(0); }
  100% { transform: translateY(-200px); }
}

.project-screens {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #181818;
  border-radius: 15px;
  padding: 30px;
  margin-bottom: 30px;
  gap: 40px;

  .screen-content {
    flex: 1;
  }

  .laptop {
    width: 60%;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  }
}

.implementation {
  margin-top: 40px;
  background: #181818;
  padding: 30px;
  border-radius: 15px;

  ul {
    list-style: none;
    padding: 0;
    li {
      margin-bottom: 10px;
      display: flex;
      align-items: flex-start;
      &:before {
        content: "•";
        color: #0ead69;
        font-weight: bold;
        margin-right: 10px;
      }
    }
  }
}

@media screen and (max-width: 991px) {
  .project-screens {
    flex-direction: column;
    .laptop {
      width: 100%;
    }
  }
}

@media screen and (max-width: 575px) {
  .pos-cover {
    height: 300px;
  }
  .pos-title {
    margin-top: -50px;
  }
}
</style>
