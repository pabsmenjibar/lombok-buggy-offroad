import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const resources = {
    en: {
        translation: {
            nav: { expeditions: "Expeditions", pricing: "Pricing", reviews: "Reviews", faq: "FAQ", bookNow: "Book Now" },
            hero: {
                premium: "Premium Buggy Expeditions",
                conquer: "Conquer the",
                inaccessible: "Inaccessible.",
                reserve: "Reserve Your Spot",
                certified: "800cc+ Certified Buggies",
                location: "Lombok, Indonesia",
                firstExperience: "The first buggy experience in Lombok"
            },
            shuffler: {
                item1: { title: "800cc+ Certified", desc: "Roll-cage equipped high-performance." },
                item2: { title: "UV Sterilization", desc: "DOT/ECE helmets sanitized per ride." },
                item3: { title: "Full Insurance", desc: "Complete coverage, professional guides." }
            },
            telemetry: {
                liveFeed: "Live Feed",
                msg1: "Establishing off-road route...",
                msg2: "Accessing Secret Beach territory...",
                msg3: "Unlocking Prabu Hills viewpoint...",
                msg4: "Exclusive village agreement secured."
            },
            scheduler: {
                save: "Save Expedition Call",
                days: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
            },
            features: {
                title1: "Engineered for adrenaline.",
                title2: "Designed for absolute security.",
                card1Title: "Safety You Can Trust",
                card1Desc: "International standard safety in a market where it doesn't exist. 800cc+ certified buggies and sterilized gear.",
                card2Title: "Exclusive Access",
                card2Desc: "Routes only reachable by 4x4. Village agreements grant access to the secret beach and Prabu Hills.",
                card3Title: "The Complete Arc",
                card3Desc: "Curated 3-hour journey, professional guides, and a traditional Sasak meal included."
            },
            philosophy: {
                p1: "Most competitors focus on: cheap rentals and unguided dirt tracks.",
                p2: "We focus on: curated ",
                p3: "expeditions."
            },
            protocol: {
                title: "The Arc.",
                subtitle: "A curated narrative from adrenaline to culture.",
                stepLabel: "Step //",
                s1Title: "Briefing & Hardware",
                s1Desc: "Professional safety training and UV-sterilized gear selection. Briefing on the 800cc machine mechanics.",
                s2Title: "The Expedition",
                s2Desc: "Navigate exclusive trails, untouched beaches, and raw Lombok terrain. Access the inaccessible.",
                s3Title: "Cultural Decompression",
                s3Desc: "Traditional Sasak meal and sunset reflections after the adrenaline apex."
            },
            reviews: {
                title: "Unrivaled Experience.",
                verified: "Verified Booking",
                ready: "Ready to join them?",
                checkAvail: "Check Availability"
            },
            pricing: {
                title: "Expedition Tiers.",
                subtitle: "No hidden costs. Everything is included.",
                classicBadge: "Core Experience",
                classicTitle: "Classic Adventure",
                classicPrice: "$130",
                classicSuffix: "/ buggy (2 passengers) - $65 pp",
                classicTime1: "2.5h ride (3h total)",
                classicTime2: "9AM | 12PM | 3PM",
                cList1: "Secret beach access",
                cList2: "Top Kuta viewpoints",
                cList3: "Jungle off-road trail",
                cList4: "Full gear & sterilization",
                cList5: "Traditional Sasak meal",
                bookClassic: "Book Classic",

                premiumExclusive: "Exclusive",
                premiumBadge: "Honeymoons · Anniversaries",
                premiumTitle: "Couples Private Sunset",
                premiumPrice: "$220",
                premiumSuffix: "total (1 buggy)",
                premiumTime1: "Sunset Departure",
                premiumTime2: "Private Guide",
                pList1: "Everything in Classic",
                pList2: "Private dedicated guide",
                pList3: "Premium Sasak dinner",
                pList4: "Sunset cliff viewpoint",
                pList5: "Curated romantic photography route",
                bookPremium: "Book Private Sunset",

                group4Title: "Group of 4",
                group4Subtitle: "2 buggies · Shared guide",
                group4Save: "Save $25 on your group",
                group4Price: "$295",
                group4Suffix: "total ($73.75 pp)",

                crew8Title: "Crew of 8",
                crew8Subtitle: "4 buggies · 2 shared guides",
                crew8Save: "Save $120 on your crew",
                crew8Price: "$600",
                crew8Suffix: "total ($75 pp)",

                includedTitle: "Included in every expedition:",
                inc: ["Certified Helmet", "Goggles", "Hygienic Liner", "SPF50+ Sunscreen", "500ml Water", "Rain Poncho", "Wet Wipes", "Full Insurance"]
            },
            faq: {
                title: "Frequently Asked.",
                q1: "Do I need any experience to drive a buggy?",
                a1: "No experience needed whatsoever. Before every tour we run a mandatory 15-minute safety briefing and practice session in a closed area. If you can drive a go-kart, you can drive our buggies. Our guides ride alongside you throughout the entire tour.",
                q2: "How many people fit in each buggy?",
                a2: "Each buggy fits exactly 2 passengers. If you're booking solo, you'll have the buggy to yourself. If you're a group of 3 or an odd number, just let us know via WhatsApp and we'll work out the best arrangement for you.",
                q3: "What should I wear?",
                a3: "Comfortable clothes you don't mind getting dusty or muddy. Closed-toe shoes are mandatory — no flip flops or sandals. We provide everything else: helmet, goggles, gloves, and a rain poncho if needed. Leave the white linen at the hotel.",
                q4: "Is it safe? What if something goes wrong on the trail?",
                a4: "Safety is our entire business model. We use 800cc+ certified buggies with roll cages and 4-point harnesses. All helmets are DOT/ECE certified and UV-sterilized between every use. Every tour has a guide-to-buggy ratio of 1:3 maximum. Full insurance is included on every booking. We carry first aid equipment and maintain radio contact throughout the route.",
                q5: "What happens if it rains?",
                a5: "We operate in all weather — rain ponchos are included in every tour kit. In fact, a light rain on the jungle trail is one of the best conditions for mud riding. We only cancel in cases of extreme weather or dangerous conditions, in which case you receive a full refund or can reschedule at no charge.",
                q6: "How do I book? Do I pay now?",
                a6: "No upfront payment required. Fill in the reservation form, choose your tour and date, and we'll confirm via WhatsApp within 2 hours. Payment is made in cash or transfer on the day of your tour. Free cancellation up to 24 hours before your tour starts."
            },
            location: {
                badge: "Operations Base",
                city: "Kuta, Lombok",
                desc: "Located perfectly in the heart of South Lombok's adrenaline capital. We offer free hotel pickup from any accommodation within Kuta. If you're coming to us directly, basecamp is equipped with secure parking and cold drinks.",
                d1: "15 mins from Mandalika Circuit",
                d2: "25 mins from Lombok Airport",
                d3: "1 hour from Mataram City",
                res: "Reserve & Meet Us",
                dir: "Get Directions"
            },
            gallery: {
                title: "The Fleet in Action."
            },
            footer: {
                desc: "Lombok All-Terrain Expeditions. The premium buggy tour operator delivering safety, exclusivity, and raw adrenaline.",
                explore: "Explore",
                ops: "Operations",
                rights: "L.A.T.E. Lombok. All access reserved.",
                status: "System Operational",
                rExp: "Expeditions & Routes",
                rPrice: "Pricing & Packages",
                rRev: "Reviews",
                rFaq: "FAQ"
            }
        }
    },
    es: {
        translation: {
            nav: { expeditions: "Expediciones", pricing: "Precios", reviews: "Reseñas", faq: "FAQ", bookNow: "Reserva Ahora" },
            hero: {
                premium: "Expediciones Premium en Buggy",
                conquer: "Conquista lo",
                inaccessible: "Inaccesible.",
                reserve: "Reserva Tu Lugar",
                certified: "Buggies Certificados 800cc+",
                location: "Lombok, Indonesia",
                firstExperience: "La primera experiencia en buggy en Lombok"
            },
            shuffler: {
                item1: { title: "Certificado 800cc+", desc: "Alto rendimiento equipado con jaula antivuelco." },
                item2: { title: "Esterilización UV", desc: "Cascos DOT/ECE desinfectados por viaje." },
                item3: { title: "Seguro Completo", desc: "Cobertura total, guías profesionales." }
            },
            telemetry: {
                liveFeed: "Transmisión en directo",
                msg1: "Estableciendo ruta todoterreno...",
                msg2: "Accediendo al territorio de la Playa Secreta...",
                msg3: "Desbloqueando el mirador de Prabu Hills...",
                msg4: "Acuerdo exclusivo de aldea asegurado."
            },
            scheduler: {
                save: "Guardar Llamada de Expedición",
                days: ['D', 'L', 'M', 'M', 'J', 'V', 'S']
            },
            features: {
                title1: "Diseñado para la adrenalina.",
                title2: "Diseñado para la seguridad absoluta.",
                card1Title: "Seguridad Confidencial",
                card1Desc: "Estándar internacional de seguridad. Buggies de 800cc+ y equipo esterilizado.",
                card2Title: "Acceso Exclusivo",
                card2Desc: "Rutas solo accesibles en 4x4. Los acuerdos con las aldeas otorgan acceso a la playa secreta y a Prabu Hills.",
                card3Title: "El Arco Completo",
                card3Desc: "Viaje seleccionado de 3 horas, guías profesionales y comida tradicional Sasak."
            },
            philosophy: {
                p1: "La mayoría se enfoca en: alquileres baratos y pistas sin guía.",
                p2: "Nosotros nos enfocamos en: ",
                p3: "expediciones seleccionadas."
            },
            protocol: {
                title: "El Arco.",
                subtitle: "Una narrativa desde la adrenalina hasta la cultura.",
                stepLabel: "Paso //",
                s1Title: "Instrucciones y Equipo",
                s1Desc: "Entrenamiento de seguridad y selección de equipo esterilizado. Instrucciones sobre la máquina.",
                s2Title: "La Expedición",
                s2Desc: "Navega por senderos exclusivos y el terreno de Lombok. Accede a lo inaccesible.",
                s3Title: "Descompresión Cultural",
                s3Desc: "Comida tradicional Sasak y reflexiones al atardecer después del punto máximo de adrenalina."
            },
            reviews: {
                title: "Experiencia Inigualable.",
                verified: "Reserva Verificada",
                ready: "¿Listo para unirte a ellos?",
                checkAvail: "Consultar Disponibilidad"
            },
            pricing: {
                title: "Niveles de Expedición.",
                subtitle: "Sin costos ocultos. Todo está incluido.",
                classicBadge: "Experiencia Principal",
                classicTitle: "Aventura Clásica",
                classicPrice: "$130",
                classicSuffix: "/ buggy (2 pasajeros) - $65 p.p.",
                classicTime1: "2.5h ruta (3h total)",
                classicTime2: "9AM | 12PM | 3PM",
                cList1: "Acceso a playa secreta",
                cList2: "Miradores de Kuta",
                cList3: "Ruta de selva todoterreno",
                cList4: "Equipo completo y esterilización",
                cList5: "Comida tradicional Sasak",
                bookClassic: "Reservar Clásico",

                premiumExclusive: "Exclusivo",
                premiumBadge: "Lunas de Miel · Aniversarios",
                premiumTitle: "Atardecer Privado Parejas",
                premiumPrice: "$220",
                premiumSuffix: "total (1 buggy)",
                premiumTime1: "Salida al Atardecer",
                premiumTime2: "Guía Privado",
                pList1: "Todo en el plan Clásico",
                pList2: "Guía privado dedicado",
                pList3: "Cena Premium Sasak",
                pList4: "Mirador de acantilado en atardecer",
                pList5: "Ruta fotográfica romántica",
                bookPremium: "Reservar Atardecer Privado",

                group4Title: "Grupo de 4",
                group4Subtitle: "2 buggies · Guía compartido",
                group4Save: "Ahorra $25 en tu grupo",
                group4Price: "$295",
                group4Suffix: "total ($73.75 p.p.)",

                crew8Title: "Equipo de 8",
                crew8Subtitle: "4 buggies · 2 guías compartidos",
                crew8Save: "Ahorra $120 en tu equipo",
                crew8Price: "$600",
                crew8Suffix: "total ($75 p.p.)",

                includedTitle: "Incluido en cada expedición:",
                inc: ["Casco Certificado", "Gafas", "Forro Higiénico", "Protector Solar SPF50+", "Agua 500ml", "Poncho Lluvia", "Toallitas Húmedas", "Seguro Total"]
            },
            faq: {
                title: "Preguntas Frecuentes.",
                q1: "¿Necesito experiencia para conducir un buggy?",
                a1: "No se necesita experiencia alguna. Antes de cada recorrido realizamos una sesión obligatoria de práctica y seguridad de 15 minutos en un área cerrada. Si puedes conducir un kart, puedes conducir nuestros buggies. Nuestros guías viajan junto a usted durante todo el recorrido.",
                q2: "¿Cuántas personas caben en cada buggy?",
                a2: "Cada buggy tiene capacidad exacta para 2 pasajeros. Si reservas solo, tendrás el buggy para ti. Si sois un grupo de 3 o un número impar, avísanos por WhatsApp y buscaremos la mejor opción para ti.",
                q3: "¿Qué debo llevar puesto?",
                a3: "Ropa cómoda que no te importe ensuciar. Es obligatorio llevar calzado cerrado. Nosotros proporcionamos el resto: casco, gafas, guantes y un poncho impermeable si es necesario.",
                q4: "¿Es seguro? ¿Qué pasa si algo sale mal?",
                a4: "La seguridad es nuestro modelo de negocio. Utilizamos vehículos de más de 800 cc certificados con jaulas antivuelco y arneses de 4 puntos. El seguro total está incluido. Llevamos botiquín de primeros auxilios y mantenemos comunicación.",
                q5: "¿Qué pasa si llueve?",
                a5: "Operamos en todo tipo de clima. Una lluvia ligera en la selva es de hecho la mejor condición para el barro. Solo cancelamos en casos de clima extremo, en cuyo caso recibirás un reembolso completo o podrás reprogramar.",
                q6: "¿Cómo reservo? ¿Pago ahora?",
                a6: "No se requiere pago por adelantado. Completa el formulario y te confirmaremos en 2 horas por WhatsApp. El pago se realiza en efectivo o transferencia el día de tu recorrido. Cancelación gratuita hasta 24h antes."
            },
            location: {
                badge: "Base de Operaciones",
                city: "Kuta, Lombok",
                desc: "Ubicado perfectamente en el corazón de la capital de la adrenalina del sur de Lombok. Ofrecemos recogida gratuita en el hotel dentro de Kuta. Si vienes directamente, la base cuenta con estacionamiento y bebidas frías.",
                d1: "A 15 min del Circuito de Mandalika",
                d2: "A 25 min del Aeropuerto de Lombok",
                d3: "A 1 hora de la Ciudad de Mataram",
                res: "Reserva y Encuéntranos",
                dir: "Obtener Direcciones"
            },
            gallery: {
                title: "La Flota en Acción."
            },
            footer: {
                desc: "Lombok All-Terrain Expeditions. El operador turístico premium que ofrece seguridad, exclusividad y adrenalina pura.",
                explore: "Explorar",
                ops: "Operaciones",
                rights: "L.A.T.E. Lombok. Todos los derechos reservados.",
                status: "Sistema Operativo",
                rExp: "Expediciones y Rutas",
                rPrice: "Precios y Paquetes",
                rRev: "Reseñas",
                rFaq: "FAQ"
            }
        }
    },
    id: {
        translation: {
            nav: { expeditions: "Ekspedisi", pricing: "Harga", reviews: "Ulasan", faq: "FAQ", bookNow: "Pesan Sekarang" },
            hero: {
                premium: "Ekspedisi Buggy Premium",
                conquer: "Taklukkan yang",
                inaccessible: "Tak Terjangkau.",
                reserve: "Pesan Tempat Anda",
                certified: "Buggy Bersertifikat 800cc+",
                location: "Lombok, Indonesia",
                firstExperience: "Pengalaman buggy pertama di Lombok"
            },
            shuffler: {
                item1: { title: "Bersertifikat 800cc+", desc: "Performa tinggi dilengkapi roll-cage." },
                item2: { title: "Sterilisasi UV", desc: "Helm DOT/ECE disterilkan per perjalanan." },
                item3: { title: "Asuransi Penuh", desc: "Cakupan penuh, pemandu profesional." }
            },
            telemetry: {
                liveFeed: "Umpan Langsung",
                msg1: "Menetapkan rute off-road...",
                msg2: "Mengakses wilayah Pantai Rahasia...",
                msg3: "Membuka titik pandang Prabu Hills...",
                msg4: "Perjanjian desa eksklusif diamankan."
            },
            scheduler: {
                save: "Simpan Panggilan Ekspedisi",
                days: ['M', 'S', 'S', 'R', 'K', 'J', 'S']
            },
            features: {
                title1: "Dirancang untuk memacu adrenalin.",
                title2: "Dirancang untuk keamanan mutlak.",
                card1Title: "Keamanan Terpercaya",
                card1Desc: "Standar keselamatan internasional. Buggy bersertifikat 800cc+ dan perlengkapan disterilkan.",
                card2Title: "Akses Eksklusif",
                card2Desc: "Rute hanya dapat dijangkau dengan 4x4. Perjanjian memberikan akses ke pantai rahasia dan Prabu Hills.",
                card3Title: "Perjalanan Lengkap",
                card3Desc: "Perjalanan 3 jam, pemandu profesional, dan makanan tradisional Sasak."
            },
            philosophy: {
                p1: "Kebanyakan kompetitor fokus pada: sewa murah dan trek tanpa pemandu.",
                p2: "Kami fokus pada: ",
                p3: "ekspedisi yang dikurasi."
            },
            protocol: {
                title: "Alurnya.",
                subtitle: "Narasi dari adrenalin hingga budaya.",
                stepLabel: "Langkah //",
                s1Title: "Pengarahan & Persiapan",
                s1Desc: "Pelatihan keselamatan dan perlengkapan. Pengarahan tentang mekanika mesin.",
                s2Title: "Ekspedisi",
                s2Desc: "Jelajahi jalur eksklusif dan medan kasar Lombok. Akses yang tak terjangkau.",
                s3Title: "Dekompresi Budaya",
                s3Desc: "Makan tradisional Sasak dan refleksi sore setelah puncak adrenalin."
            },
            reviews: {
                title: "Pengalaman Tak Tertandingi.",
                verified: "Pemesanan Terverifikasi",
                ready: "Siap bergabung dengan mereka?",
                checkAvail: "Cek Ketersediaan"
            },
            pricing: {
                title: "Tingkatan Ekspedisi.",
                subtitle: "Tanpa biaya tersembunyi. Semua termasuk.",
                classicBadge: "Pengalaman Utama",
                classicTitle: "Petualangan Klasik",
                classicPrice: "$130",
                classicSuffix: "/ buggy (2 penumpang) - $65 pp",
                classicTime1: "Tur 2.5 jam (Total 3 jam)",
                classicTime2: "9AM | 12PM | 3PM",
                cList1: "Akses pantai rahasia",
                cList2: "Daya tarik utama Kuta",
                cList3: "Jalur off-road hutan",
                cList4: "Perlengkapan penuh & sterilisasi",
                cList5: "Makan tradisional Sasak",
                bookClassic: "Pesan Klasik",

                premiumExclusive: "Eksklusif",
                premiumBadge: "Bulan Madu · Hari Jadi",
                premiumTitle: "Matahari Terbenam Pribadi",
                premiumPrice: "$220",
                premiumSuffix: "total (1 buggy)",
                premiumTime1: "Waktu Keberangkatan Sore",
                premiumTime2: "Pemandu Pribadi",
                pList1: "Semua fasilitas di Paket Klasik",
                pList2: "Pemandu khusus pribadi",
                pList3: "Makan malam Sasak Premium",
                pList4: "Tebing matahari terbenam",
                pList5: "Rute fotografi romantis",
                bookPremium: "Pesan Matahari Terbenam Pribadi",

                group4Title: "Grup 4 Orang",
                group4Subtitle: "2 buggy · Pemandu bersama",
                group4Save: "Hemat $25 untuk grup Anda",
                group4Price: "$295",
                group4Suffix: "total ($73.75 pp)",

                crew8Title: "Kru 8 Orang",
                crew8Subtitle: "4 buggy · 2 pemandu bersama",
                crew8Save: "Hemat $120 untuk kru Anda",
                crew8Price: "$600",
                crew8Suffix: "total ($75 pp)",

                includedTitle: "Termasuk dalam setiap ekspedisi:",
                inc: ["Helm Bersertifikat", "Kacamata", "Pelapis Higienis", "Sunblock SPF50+", "Air 500ml", "Jas Hujan", "Tisu Basah", "Asuransi Penuh"]
            },
            faq: {
                title: "Pertanyaan Umum.",
                q1: "Apakah perlu pengalaman untuk mengendarai buggy?",
                a1: "Tidak perlu sama sekali. Sebelum tur kita jalankan briefing 15 menit. Pemandu kami mendampingi Anda di sepanjang tur.",
                q2: "Berapa orang yang muat di setiap buggy?",
                a2: "Muat tepat 2 penumpang. Pemesanan solo mendapatkan 1 buggy untuk sendiri. Jika ganjil, hubungi kami via WhatsApp.",
                q3: "Apa yang harus saya pakai?",
                a3: "Baju santai yang tidak masalah kalau kotor. Sepatu tertutup wajib dipakai. Kami siapkan helm, kacamata pelindung, dll.",
                q4: "Apakah aman jika ada masalah di jalan?",
                a4: "Keamanan adalah nomor satu. Kami pakai buggy 800cc+ yang aman dan asuransi penuh juga tersedia. Peralatan P3K selalu siaga.",
                q5: "Bagaimana jika hujan?",
                a5: "Kita jalan dalam semua cuaca! Hujan ringan sangat bagus untuk trek lumpur. Pembatalan gratis berlaku untuk cuaca sangat buruk.",
                q6: "Bagaimana cara pesan? Bayar langsung?",
                a6: "Pesan gratis di awal, kami konfirmasi di WhatsApp. Pembayaran saat hari-H di lokasi dengan uang tunai atau transfer."
            },
            location: {
                badge: "Basis Operasi",
                city: "Kuta, Lombok",
                desc: "Berlokasi sempurna di jantung pusat adrenalin Lombok Selatan. Tersedia layanan antar jemput gratis di sekitar Kuta. Basecamp kami melayani parkir aman dan aneka minuman.",
                d1: "15 menit dari Sirkuit Mandalika",
                d2: "25 menit dari Bandara Lombok",
                d3: "1 jam dari Kota Mataram",
                res: "Pesan & Temui Kami",
                dir: "Arahkan Rute"
            },
            gallery: {
                title: "Armada Beraksi."
            },
            footer: {
                desc: "Lombok All-Terrain Expeditions. Operator buggy premium dengan memfasilitasi keselamatan dan rekreasi adrenalin eksklusif.",
                explore: "Jelajahi",
                ops: "Operasi",
                rights: "L.A.T.E. Lombok. Seluruh hak cipta dilindungi undang-undang.",
                status: "Sistem Beroperasi",
                rExp: "Ekspedisi & Rute",
                rPrice: "Harga & Paket",
                rRev: "Ulasan",
                rFaq: "FAQ"
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
