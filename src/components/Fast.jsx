import React from 'react';

const MatkaBookingPage = () => {
    return (
        <div className="min-h-screen bg-orange-200">
            {/* Header Section */}
            <div className="bg-pink-600 text-white text-center py-3 rounded-xl shadow-md">
                <h1 className="text-lg font-bold uppercase">WORLD ME SABSE FAST SATTA MATKA RESULT</h1>
            </div>

            {/* Results Section */}
            <div className="container mx-auto p-4">
                {results.map((result, index) => (
                    <div
                        key={index}
                        className={`border rounded-lg p-4 my-2 text-center shadow-md relative overflow-hidden ${
                            result.highlight ? "bg-yellow-300 text-black" : "bg-orange-300"
                        }`}
                    >
                        <button className="absolute top-2 left-2 bg-purple-600 text-white px-2 py-1 text-xs rounded-full">Jodi</button>
                        <h2 className="text-xl font-bold uppercase mb-1">{result.name}</h2>
                        <p className="text-2xl font-semibold">{result.numbers}</p>
                        <p className="text-sm mt-1">{result.time}</p>
                        <button className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 text-xs rounded-full">Panel</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const results = [
    { name: "Shubh Morning", numbers: "XYZ-XYZ-XYZ", time: "10:00 AM - 11:00 AM" },
    { name: "Shubh Day Open", numbers: "ABC-ABC-ABC", time: "2:50 PM - 4:50 PM" },
    { name: "Shubh Night", numbers: "XXX-XX-XXX", time: "10:10 PM - 11:10 PM" },
    { name: "SUNDAY  DAY ", numbers: "XYZ-XYZ-XYZ", time: "10:45 AM - 11:50 AM" },
    { name: "SUNDAY NIGHT", numbers: "XYZ-XYZ-XYZ", time: "8:25 PM - 9:15 PM" },
    { name: "MILAN MORNING", numbers: "389-06-114", time: "10:15 AM - 11:15 AM" },
  
    { name: "SRIDEVI", numbers: "289-91-579", time: "11:35 AM - 12:35 PM" },
    { name: "KALYAN MORNING", numbers: "250-75-168", time: "11:00 AM - 12:02 PM" },
    { name: "PADMAVATHI", numbers: "377-78-459", time: "11:40 AM - 12:40 PM" },
    { name: "MADHURI", numbers: "457-62-390", time: "11:45 AM - 12:45 PM", highlight: true },
    { name: "RAJDHANI MORNING [main]", numbers: "170-89-559", time: "11:25 AM - 12:55 PM" },
    { name: "SRIDEVI MORNING", numbers: "179-75-780", time: "09:30 AM - 10:30 AM" },
    { name: "MAHARANI", numbers: "380-13-157", time: "12:15 PM - 02:15 PM" },
    { name: "KARNATAKA DAY", numbers: "259-60-578", time: "10:00 AM - 11:00 AM", highlight: true },
    { name: "TIME BAZAR MORNING", numbers: "440-85-230", time: "11:10 AM - 12:10 PM" },
    { name: "TIME BAZAR", numbers: "240-66-880", time: "01:10 PM - 02:10 PM" },
    { name: "TARA MUMBAI DAY", numbers: "470-14-149", time: "01:35 PM - 03:00 PM" },
    { name: "PRABHAT", numbers: "160-72-246", time: "01:30 PM - 03:00 PM" },
    { name: "DIAMOND", numbers: "140-56-358", time: "01:30 PM - 03:00 PM" },
    { name: "TIME BAZAR DAY", numbers: "345-24-266", time: "02:00 PM - 04:00 PM" },
    { name: "BK BAZAR", numbers: "589-26-123", time: "02:00 PM - 04:00 PM" },
    { name: "MILAN DAY", numbers: "880-66-277", time: "03:20 PM - 05:20 PM" },
    { name: "MAIN BAZAR DAY", numbers: "348-59-180", time: "03:35 PM - 05:35 PM" },
    { name: "PUNA BAZAR", numbers: "135-98-189", time: "01:15 PM - 03:15 PM" },
    { name: "KALYAN", numbers: "588-13-670", time: "04:18 PM - 06:18 PM", highlight: true },
    { name: "SRIDEVI NIGHT", numbers: "259-64-257", time: "07:15 PM - 08:15 PM" },
    { name: "DIAMOND NIGHT", numbers: "126-97-179", time: "08:00 PM - 09:00 PM" },
    { name: "MADHURI NIGHT", numbers: "267-53-247", time: "06:45 PM - 07:45 PM" },
    { name: "NIGHT TIME BAZAR", numbers: "160-74-220", time: "08:35 PM - 10:35 PM" },
    { name: "TARA MUMBAI NIGHT", numbers: "468-87-250", time: "08:30 PM - 10:30 PM" },
    { name: "MILAN NIGHT", numbers: "125-85-168", time: "09:15 PM - 11:15 PM" },
    { name: "RAJDHANI NIGHT", numbers: "450-94-239", time: "09:35 PM - 11:45 PM" },
    { name: "MAIN BAZAR", numbers: "124-76-367", time: "10:00 PM - 12:10 AM", highlight: true },
    { name: "MAHARANI DAY", numbers: "550-07-160", time: "05:15 PM - 07:15 PM" },
    { name: "BOMBAY DAY", numbers: "589-22-589", time: "02:05 PM - 03:05 PM" },
    { name: "SRIDEVI DAY", numbers: "459-85-168", time: "01:30 PM - 02:30 PM" },
    { name: "MUMBAI MORNING", numbers: "120-31-100", time: "01:40 PM - 02:40 PM" },
    { name: "KALYAN NIGHT", numbers: "156-29-234", time: "09:50 PM - 11:50 PM" },
    { name: "PRABHAT NIGHT", numbers: "379-96-790", time: "08:30 PM - 10:30 PM" },
    { name: "NAMASTHE", numbers: "268-68-459", time: "01:45 PM - 03:45 PM" },
    { name: "NAMASTHE NIGHT", numbers: "157-39-270", time: "07:00 PM - 09:00 PM" },
    { name: "CHENNAI BAZAR", numbers: "600-63-490", time: "01:25 PM - 03:25 PM" },
    { name: "OLD MAIN MUMBAI", numbers: "115-71-560", time: "09:30 PM - 11:30 PM" },
    { name: "TARA MORNING", numbers: "490-3", time: "10:10 AM - 11:10 AM" },
    { name: "MADHUR MORNING", numbers: "458-71-236", time: "11:30 AM - 12:30 PM" },
    { name: "MADHUR DAY", numbers: "137-19-469", time: "01:30 PM - 02:30 PM" },
    { name: "MADHUR NIGHT", numbers: "490-30-550", time: "08:30 PM - 10:30 PM" },
    { name: "RATAN KHATRI", numbers: "170-87-467", time: "10:00 PM - 12:00 AM" },
    { name: "MAHARANI NIGHT", numbers: "670-38-378", time: "10:15 PM - 12:15 AM" },
    { name: "PADMAVATHI NIGHT", numbers: "139-34-789", time: "07:45 PM - 08:45 PM" },
    { name: "JAY SHREE DAY", numbers: "990-83-779", time: "11:21 AM - 12:21 PM" },
    { name: "SRI DHANALAXMI", numbers: "160-74-789", time: "12:00 PM - 01:00 PM" },
    { name: "INDORI DAY", numbers: "145-00-299", time: "11:20 AM - 12:20 PM" },
    { name: "BOMBAY NIGHT", numbers: "127-03-490", time: "09:35 PM - 12:05 AM", highlight: true },
    { name: "SUNDAY BAZAR", numbers: "247-37-458", time: "01:00 PM - 03:00 PM" },
    { name: "SUNDAY BAZAR NIGHT", numbers: "690-50-389", time: "05:00 PM - 07:00 PM" },
    { name: "PAISA BAZAR DAY", numbers: "246-26-457", time: "03:30 PM - 05:30 PM" },
    { name: "PAISA BAZAR NIGHT", numbers: "560-15-140", time: "09:20 PM - 11:20 PM" },
    { name: "KALYAN SRIDEVI", numbers: "780-56-600", time: "11:30 AM - 12:30 PM" },
    { name: "KALYAN SRIDEVI NIGHT", numbers: "267-53-689", time: "07:30 PM - 08:30 PM" },
    { name: "MAIN DAY", numbers: "239-47-557", time: "02:35 PM - 04:35 PM" },
    { name: "CENTRAL MUMBAI", numbers: "130-48-288", time: "02:00 PM - 03:00 PM" },
    { name: "PUNA NIGHT", numbers: "157-30-389", time: "11:00 PM - 01:01 AM" },
    { name: "MUMBAI STAR", numbers: "678-16-259", time: "08:00 PM - 09:00 PM" },
    { name: "CENTRAL BAZAR", numbers: "678-17-278", time: "03:00 PM - 04:00 PM" },
    { name: "STAR TARA MORNING", numbers: "700-7", time: "10:10 AM - 11:10 AM" },
    { name: "STAR TARA DAY", numbers: "400-47-377", time: "02:20 PM - 03:20 PM" },
    { name: "STAR TARA NIGHT", numbers: "458-72-147", time: "07:20 PM - 08:20 PM" },
    { name: "PUNA NIGHT [main]", numbers: "146-15-159", time: "10:45 PM - 12:45 AM" },
    { name: "MUMBAI STAR [main]", numbers: "580-37-124", time: "07:35 PM - 08:35 PM" },
    { name: "SUPREME DAY", numbers: "790-65-159", time: "03:35 PM - 05:35 PM" },
    { name: "SUPREME NIGHT", numbers: "160-75-168", time: "08:45 PM - 10:45 PM" },
    { name: "MAIN SRIDEVI", numbers: "380-12-345", time: "11:25 AM - 12:25 PM" },
    { name: "MAHARAJ TIME", numbers: "480-25-780", time: "01:00 PM - 02:00 PM" },
    { name: "MAHARAJ DAY", numbers: "670-32-138", time: "03:00 PM - 05:00 PM" },
    { name: "MAHARAJ NIGHT", numbers: "123-67-700", time: "09:00 PM - 11:00 PM" },
    { name: "SITA MORNING", numbers: "148-31-344", time: "09:45 AM - 10:45 AM" },
    { name: "KALYAN GOLD NIGHT", numbers: "169-63-238", time: "10:35 PM - 01:50 AM" },
    { name: "SRILAKSHMI", numbers: "146-13-689", time: "11:20 AM - 12:20 PM" },
    { name: "MAHARASHTRA", numbers: "259-64-590", time: "02:45 PM - 05:10 PM" },
    { name: "WORLI", numbers: "344-19-450", time: "08:30 PM - 10:30 PM" },
    { name: "WORLI MUMBAI DAY", numbers: "367-65-258", time: "01:30 PM - 02:30 PM" },
    { name: "MAIN MUMBAI RK", numbers: "340-79-450", time: "09:35 PM - 12:02 AM" }
];

export default MatkaBookingPage;
