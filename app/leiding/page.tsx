import {Navbar} from "@/app/components/navbar";
import {Footer} from "@/app/components/footer";

function Kalender() {
    const groups = [
        // Ribbels
        {
            name: "Ribbels",
            color: "purple",
            ageRange: "3de kleuter tot 2de leerjaar",
            members: [
                {name: "Rune Vanslembrouck", phone: "0487 20 49 42", imageUrl: "/path/to/placeholder-image.jpg"},
                {name: "Kenzo Masson", phone: "0493 03 68 70", imageUrl: "/path/to/placeholder-image.jpg"},
                {name: "Amélie Boussemaere", phone: "0493 97 38 99", imageUrl: "/path/to/placeholder-image.jpg"},
                {name: "Fleur Saelen", phone: "0497 49 59 39", imageUrl: "/path/to/placeholder-image.jpg"}
            ]
        },
        // Speelclub
        {
            name: "Speelclub",
            color: "yellow",
            ageRange: "3de leerjaar tem 4de leerjaar",
            members: [
                {name: "Zoë Thuillier", phone: "0468 35 89 42", imageUrl: "/path/to/placeholder-image.jpg"},
                {name: "Amber Vanhoorelbeke", phone: "0468 58 35 89", imageUrl: "/path/to/placeholder-image.jpg"},
                {name: "Yorben Vandamme", phone: "0497 42 52 93", imageUrl: "/path/to/placeholder-image.jpg"},
                {name: "Luca Lameire", phone: "0468 58 59 68", imageUrl: "/path/to/placeholder-image.jpg"},
                {name: "Tjorven Degraeve", phone: "0499 81 39 64", imageUrl: "/path/to/placeholder-image.jpg"}
            ]
        },
        // Rakkers
        {
            name: "Rakkers",
            color: "green",
            ageRange: "5de tem 6de leerjaar, jongens",
            members: [
                {name: "Maaike Spruytte", phone: "0468 48 29 59", imageUrl: "/path/to/placeholder-image.jpg"},
                {name: "Jorn Ghysdael", phone: "0494 78 21 01", imageUrl: "/path/to/placeholder-image.jpg"},
                {name: "Xienna Dewulf", phone: "0468 56 11 96", imageUrl: "/path/to/placeholder-image.jpg"}
            ]
        },
        // Kwiks
        {
            name: "Kwiks",
            color: "green",
            ageRange: "5de tem 6de leerjaar, meisjes",
            members: [
                {name: "Aaron Verfaillie", phone: "0493 56 01 69", imageUrl: "/path/to/placeholder-image.jpg"},
                {name: "Amber Van den Berghe", phone: "0492 39 54 48", imageUrl: "/path/to/placeholder-image.jpg"},
                {name: "Hailey Vercruysse", phone: "0473 66 50 68", imageUrl: "/path/to/placeholder-image.jpg"},
            ]
        },
        // Tito's
        {
            name: "Tito's",
            color: "red",
            ageRange: "1ste tem 2de middelbaar",
            members: [
                {name: "Femke Spruytte", phone: "0470 79 60 40", imageUrl: "/path/to/placeholder-image.jpg"},
                {name: "Lennert Declerck", phone: "0476 69 24 15", imageUrl: "/path/to/placeholder-image.jpg"},
                {name: "Stan Vandepoele", phone: "0473 67 42 12", imageUrl: "/path/to/placeholder-image.jpg"}
            ]
        },
        // Kerels
        {
            name: "Kerels",
            color: "blue",
            ageRange: "3de tem 4de middelbaar jongens",
            members: [
                {name: "Wout Sabbe", phone: "0472 12 20 57", imageUrl: "/path/to/placeholder-image.jpg"},
                {name: "Yben Vandamme", phone: "0471 69 25 53", imageUrl: "/path/to/placeholder-image.jpg"},
                {name: "Gilles Cornette", phone: "0497 34 10 30", imageUrl: "/path/to/placeholder-image.jpg"},
                {name: "Milan Es", phone: "0472 91 01 09", imageUrl: "/path/to/placeholder-image.jpg"}
            ]
        },
        // Tip-10’s
        {
            name: "Tip-10's",
            color: "blue",
            ageRange: "3de tem 4de middelbaar meisjes",
            members: [
                {name: "Warre Sabbe", phone: "0468 30 06 64", imageUrl: "/path/to/placeholder-image.jpg"},
                {name: "Elisa Demey", phone: "0478 74 76 81", imageUrl: "/path/to/placeholder-image.jpg"},
                {name: "Simon Saelen", phone: "0471 46 35 23", imageUrl: "/path/to/placeholder-image.jpg"},
                {name: "Amelie Geldhof", phone: "0470 61 15 61", imageUrl: "/path/to/placeholder-image.jpg"}
            ]
        },
        // Aspi's
        {
            name: "Aspi's",
            color: "orange",
            ageRange: "5de middelbaar",
            members: [
                {name: "Mathias Bonduel", phone: "0471 32 09 64", imageUrl: "/path/to/placeholder-image.jpg"},
                {name: "Lars Salembier", phone: "0495 26 77 04", imageUrl: "/path/to/placeholder-image.jpg"},
                {name: "Alicia Demey", phone: "0478 74 76 83", imageUrl: "/path/to/placeholder-image.jpg"},
                {name: "Milan Huyghe", phone: "0495 79 39 28", imageUrl: "/path/to/placeholder-image.jpg"}
            ]
        },
        // Hoofdleiding
        {
            name: "Hoofdleiding",
            color: "gray",
            ageRange: null,
            members: [
                {name: "Yben Vandamme", phone: "0471 69 25 53", imageUrl: "/path/to/placeholder-image.jpg"},
                {name: "Yorben Vandamme", phone: "0497 42 52 93", imageUrl: "/path/to/placeholder-image.jpg"},
                {name: "Warre Sabbe", phone: "0468 30 06 64", imageUrl: "/path/to/placeholder-image.jpg"}
            ]
        },
        // Volwassen Begeleider
        {
            name: "Volwassen Begeleiders",
            color: "gray",
            ageRange: null,
            members: [
                {name: "Edwin Gouwy", phone: "0476 34 16 37", imageUrl: "/path/to/placeholder-image.jpg"},
                {name: "Jeroen Lamote", phone: "0478 81 55 06", imageUrl: "/path/to/placeholder-image.jpg"}
            ]
        }
    ];

    const getBackgroundColor = (color: string) => {
        switch (color) {
            case 'purple':
                return 'bg-purple-800';
            case 'yellow':
                return 'bg-yellow-600';
            case 'green':
                return 'bg-green-800';
            case 'red':
                return 'bg-red-800';
            case 'blue':
                return 'bg-blue-800';
            case 'orange':
                return 'bg-orange-700';
            case 'gray':
                return 'bg-gray-800';
            default:
                return 'bg-gray-200'; // default background color
        }
    };

    return (
        <div className="flex flex-col min-h-screen items-center">
            <Navbar imageUrl="/openingsformatie.jpg" imageAlt="Groepsfoto Kamp" title="Leidingsploeg"/>
            <main className="flex-grow w-full max-w-7xl p-16 gap-8 flex flex-col items-center">
                {groups.map(group => (
                    <section key={group.name}
                             className={`${getBackgroundColor(group.color)} text-white p-4 rounded-lg shadow-md mb-6`}>
                        <h2 className="text-2xl font-bold">{group.name}</h2>
                        <p>{group.ageRange ? "Leeftijd: " + group.ageRange : ""}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                            {group.members.map(member => (
                                <div key={member.name} className="border p-4 rounded-lg shadow-md bg-white text-black w-48">
                                    <div className="w-full h-32 bg-gray-200 mb-2"></div>
                                    <h3>{member.name}</h3>
                                    <p>{member.phone}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </main>
            <Footer/>
        </div>
    )
}

export default Kalender;