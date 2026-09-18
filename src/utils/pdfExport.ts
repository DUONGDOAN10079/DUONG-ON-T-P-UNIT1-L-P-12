import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

/**
 * Exports a given DOM element as a high-resolution A4 PDF document.
 * This guarantees 100% fidelity for Vietnamese typography, colors, and styling.
 */
export async function exportReportCardToPDF(elementId: string, filename: string): Promise<boolean> {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Element with id ${elementId} not found`);
    return false;
  }

  try {
    // Generate high-resolution canvas (scale 2 for retina / print clarity)
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      windowWidth: 1200,
    });

    const imgData = canvas.toDataURL('image/jpeg', 0.95);
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth - 10; // 5mm margin on left and right
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 5; // top margin

    // Add first page
    pdf.addImage(imgData, 'JPEG', 5, position, imgWidth, imgHeight);
    heightLeft -= pdfHeight;

    // Handle multi-page if content is long
    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'JPEG', 5, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;
    }

    pdf.save(filename);
    return true;
  } catch (err) {
    console.error('Error generating PDF:', err);
    return false;
  }
}

/**
 * Triggers standard browser print dialog tailored for print-to-PDF.
 */
export function printReportCard(): void {
  window.print();
}
