// October 28 Examination — Topic 8: Charts in a Spreadsheet.
// 10 questions · CBSE Class IX · Information Technology (402), Unit 4: Electronic Spreadsheet; Computer Applications (165), Unit 3: Office Tools.
window.OCT28_TOPICS = window.OCT28_TOPICS || [];
window.OCT28_TOPICS.push({
  key: "charts",
  name: "Charts in a Spreadsheet",
  questions: [
    {
      q: "Why are charts useful in a spreadsheet?",
      options: ["They make the file size smaller", "They check the spelling of labels", "They show data visually, so comparisons and trends are easier to see", "They protect cells from being changed"],
      answer: 2,
      explain: "A <b>chart</b> turns rows of numbers into a picture, making it much easier to compare values, spot trends and present the data to others.",
      diff: "E"
    },
    {
      q: "In LibreOffice Calc, after selecting the data, which menu command starts the Chart Wizard?",
      options: ["Insert ▸ Chart", "Format ▸ Cells", "Data ▸ Sort", "View ▸ Zoom"],
      answer: 0,
      explain: "<b>Insert ▸ Chart</b>, or the Insert Chart button on the Standard toolbar, opens the Chart Wizard together with a preview of the chart.",
      diff: "E"
    },
    {
      q: "Which chart type is best for showing how a family's monthly budget is divided among food, rent, travel and savings, as <b>parts of a whole</b>?",
      options: ["Line chart", "Pie chart", "XY (Scatter) chart", "Area chart"],
      answer: 1,
      explain: "A <b>pie chart</b> shows each value as a slice of one circle, so the share of each item in the total is easy to see.",
      diff: "E"
    },
    {
      q: "The average temperature of a city was recorded for each of the 12 months of a year. Which chart type best shows how the temperature rose and fell over time?",
      options: ["Pie chart", "XY (Scatter) chart", "Bar chart", "Line chart"],
      answer: 3,
      explain: "A <b>line chart</b> joins the values in order, so rises and falls over time (a trend) are easy to follow. A pie chart only shows parts of a whole.",
      diff: "E"
    },
    {
      q: "A teacher wants to see whether students who study for more hours also score higher marks. She has two numeric columns: hours studied and marks. Which chart type suits this best?",
      options: ["Pie chart", "Area chart", "XY (Scatter) chart", "Line chart"],
      answer: 2,
      explain: "An <b>XY (Scatter) chart</b> plots each pair of numbers (hours, marks) as a point, showing whether the two numeric variables are related.",
      diff: "M"
    },
    {
      q: "In LibreOffice Calc's Chart Wizard, how does a <b>Bar</b> chart differ from a <b>Column</b> chart?",
      options: ["A Bar chart has horizontal bars; a Column chart has vertical bars", "A Bar chart has vertical bars; a Column chart has horizontal bars", "A Bar chart shows one value; a Column chart shows many values", "A Bar chart is always 3D; a Column chart is always flat"],
      answer: 0,
      explain: "In LibreOffice, a <b>Column</b> chart draws <b>vertical</b> bars and a <b>Bar</b> chart draws <b>horizontal</b> bars. Both compare values across categories.",
      diff: "M"
    },
    {
      diagram: "flowchart LR\n  A[\"Step 1: Chart Type\"] --> B[\"Step 2: Data Range\"]\n  B --> C[\"Step 3: X\"]\n  C --> D[\"Step 4: Chart Elements\"]",
      diagramCaption: "Figure: The steps of the LibreOffice Calc Chart Wizard",
      q: "The figure shows the four steps of the Chart Wizard in LibreOffice Calc. What is step <b>X</b>?",
      options: ["Print Preview", "Sort Data", "Format Cells", "Data Series"],
      answer: 3,
      explain: "The Chart Wizard's steps are Chart Type, Data Range, <b>Data Series</b> and Chart Elements. In the last step you add titles, the legend and grid lines.",
      diff: "M"
    },
    {
      q: "In a column chart comparing the marks of five students in three subjects, what is the job of the <b>legend</b>?",
      options: ["It shows the exact value on top of each column", "It tells which colour stands for which subject (data series)", "It gives the chart its main heading", "It lists the students along the X-axis"],
      answer: 1,
      explain: "The <b>legend</b> is the key to the chart: it matches each colour to its <b>data series</b>, here each subject. Values shown on the columns are data labels, and the heading is the chart title.",
      diff: "M"
    },
    {
      q: "Which chart type looks like a line chart with the space between the line and the X-axis filled with colour, emphasising how the amount changes from one category to the next?",
      options: ["Pie chart", "XY (Scatter) chart", "Area chart", "Bar chart"],
      answer: 2,
      explain: "An <b>area chart</b> plots values like a line chart but fills the area below the line, emphasising the size of the change from one category to the next.",
      diff: "M"
    },
    {
      q: "A shop's sales of <b>three</b> products are recorded for six months. Which chart type is <b>NOT</b> suitable for showing all three products together in a single chart?",
      options: ["Pie chart", "Column chart", "Line chart", "Area chart"],
      answer: 0,
      explain: "A basic <b>pie chart</b> shows only <b>one</b> data series, as slices of a single circle, so it cannot compare three products month by month. Column, line and area charts can each plot several data series together.",
      diff: "H"
    },
  ],
});
