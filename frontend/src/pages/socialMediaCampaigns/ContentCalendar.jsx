export default function ContentCalendar() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">EcoClimate Content Calendar</h1>

      {/* Download Button */}
      <a
        href="/ecoclimate/content-calendar.xlsx"
        download
        className="px-5 py-3 bg-blue-600 text-white rounded-lg"
      >
        Download Excel
      </a>

      {/* Local Excel preview (NO DOMAIN NEEDED) */}
      <iframe
        src={`https://view.officeapps.live.com/op/embed.aspx?src=${window.location.origin}/ecoclimate/content-calendar.xlsx`}
        className="w-full h-[600px] mt-6 border rounded"
      ></iframe>
    </div>
  );
}
