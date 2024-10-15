using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            await SeedHutbas(context);
            await SeedVijesti(context);
        }

        private static async Task SeedHutbas(DataContext context)
        {
            if (context.Hutbas.Any()) return;
            
            var hutbe = new List<Hutba>
            {
                new Hutba
                {
                    Title = "Pronicljivost je svjetlo vjernika",
                    Description = "Kao što hranom i vodom održavamo naše tijelo u životu, tako je i bogobojaznost najbolja hrana vjerničkoj duši. Bogobojaznost je svjetlo, uputa, uspjeh i spas: “O vjernici, ako se budete Allaha bojali, On će vam sposobnost darovati pa ćete istinu od neistine moći rastaviti i preko ružnih postupaka vaših će preći i oprostiti vam. A Allahova dobrota je neizmjerna.” (El-Enfal, 29).",
                    PictureUrl = "https://res.cloudinary.com/dv57qyqlm/image/upload/v1727264268/Hutba-1_scb3y4.jpg",
                    Author = "Jusuf Horozović",
                    PostedDate = DateTime.UtcNow,
                    Views = 2,
                },
                new Hutba
                {
                    Title = "U susret mektebu",
                    Description = "Sutra će, ako Bog da, početi upis polaznika mektebske nastave u našim džematima širom Švedske. Tim povodom u današnjoj hutbi govorimo o značaju mekteba. U 9. ajetu sure Ez-Zumer Gospodar svjetova kaže: “Jesu li isti taj i onaj koji po cijelu noć predano sedždu čini i na kijamu stoji, pazeći se onoga svijeta i nadajući se milosti Gospodara svoga?! Reci: Zar mogu biti isti oni koji znaju i oni koji ne znaju? Ali, opomenu mogu primiti samo oni koji pameti imaju!“",
                    PictureUrl = "https://res.cloudinary.com/dv57qyqlm/image/upload/v1727264268/Hutba-1_scb3y4.jpg",
                    Author = "Jusuf Horozović",
                    PostedDate = DateTime.UtcNow,
                    Views = 1,
                },
                new Hutba
                {
                    Title = "Kako koristimo vrijeme",
                    Description = "Vrijeme je godišnjih odmora i zato ćemo u današnjoj hutbi govoriti o pogledu islama spram vremena kao Božije blagodati i potrebi njegova adekvatnog korištenja. U tom smislu, trebali bi na umu imati nekoliko činjenica.",
                    PictureUrl = "https://res.cloudinary.com/dv57qyqlm/image/upload/v1727264268/Hutba-1_scb3y4.jpg",
                    Author = "Jusuf Horozović",
                    PostedDate = DateTime.UtcNow,
                    Views = 5,
                },
                new Hutba
                {
                    Title = "HADŽ – PEČAT ISLAMSKIH ŠARTA",
                    Description = "Danas je osmi dan mjeseca zu-l-hidždžeta. Danas hadžije oblače ihrame i kreću prema Mini i Arefatu da obave najvažniji dio hadžskih obreda. I dok zamišljamo najljepšu bijelu boju, boju ihrama, prilika je to da progovorimo koju rečenicu o hadžu.",
                    PictureUrl = "https://res.cloudinary.com/dv57qyqlm/image/upload/v1727264268/Hutba-1_scb3y4.jpg",
                    Author = "Jusuf Horozović",
                    PostedDate = DateTime.UtcNow,
                    Views = 17,
                },
                new Hutba
                {
                    Title = "Kurban – pokornost, poslušnost i žrtva",
                    Description = "Zahvalni smo Uzvišenom Allahu na mnogobrojnim i različitim blagodatima, na opskrbi i na nebrojenim ni’metima. Izgovarajući salavate spominjemo poslanika Muhammeda, a.s., a radeći po njegovom sunetu slijedimo ga.",
                    PictureUrl = "https://res.cloudinary.com/dv57qyqlm/image/upload/v1727264268/Hutba-1_scb3y4.jpg",
                    Author = "Jusuf Horozović",
                    PostedDate = DateTime.UtcNow,
                    Views = 0,
                },
                new Hutba
                {
                    Title = "Mentalitet neodgovornih (umjesto hutbe)",
                    Description = "Allah, džellešanuhu, na više mjesta u Kur’anu upozorava Vjerovjesnika da se ne postavlja kao ,,zastupnik“ (vekil), ,,čuvar“ (hafīz) ili ,,posjednik apsolutne vlasti (musaytir) nad muslimanima, podsjećajući ga da je njegova jedina dužnost da saopštava (al-balag) Božiju poruku kroz mudre riječi, savjete i upućivanje na dobro. Svaki čovjek pojedinačnom spoznajom i slobodnim izborom i djelovanjem mora upoznati i prihvatiti principe i pravila Ovog svijeta.",
                    PictureUrl = "https://res.cloudinary.com/dv57qyqlm/image/upload/v1727264268/Hutba-1_scb3y4.jpg",
                    Author = "Jusuf Horozović",
                    PostedDate = DateTime.UtcNow,
                    Views = 55,
                },
                new Hutba
                {
                    Title = "DŽAMIJE SU CENTRI ZA USPJEH",
                    Description = "بسم الله الرحمن الرحيمِنّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ وَأَقَامَ الصَّلَاةَ وَآتَى الزَّكَاةَ وَلَمْ يَخْشَ إِلَّا اللَّهَ فَعَسَى أُوْلَئِكَ أَنْ يَكُونُوا مِنْ الْمُهْتَدِينَ. “Allahove džamije grade i održavaju oni koji u Allaha i u onaj svijet vjeruju i koji namaz obavljaju i zekat daju i koji se nikoga osim Allaha ne boje; oni su, nadati se je, na pravom putu.” (K, 9:18)",
                    PictureUrl = "https://res.cloudinary.com/dv57qyqlm/image/upload/v1727264268/Hutba-1_scb3y4.jpg",
                    Author = "Jusuf Horozović",
                    PostedDate = DateTime.UtcNow,
                    Views = 15,
                },
                new Hutba
                {
                    Title = "Hutba o zekatu zamjenika reisu-l-uleme i fetva-i-emina dr. Enesa Ljevakovića",
                    Description = "Zamjenik reisu-l-uleme i fetva-i-emin Islamske zajednice (IZ) u Bosni i Hercegovini prof.dr. Enes ef. Ljevaković danas je u Gazi Husrev-begovoj džamiji u Sarajevu kazivao hutbu o zekatu. Agencija MINA hutbu prenosi u cijelosti: “Hvala Allahu, Gospodaru svjetova. Neka je salavat i selam na našeg  Vjerovjesnika, Muhammeda, njegovu časnu porodicu i plemenite ashabe!",
                    PictureUrl = "https://res.cloudinary.com/dv57qyqlm/image/upload/v1727264268/Hutba-1_scb3y4.jpg",
                    Author = "Jusuf Horozović",
                    PostedDate = DateTime.UtcNow,
                    Views = 75,
                },
                new Hutba
                {
                    Title = "U SUSRET RAMAZANU",
                    Description = "U ponedjeljak je prvi dan ramazani šerifa i zato u ovoj današnjoj hutbi govorimo o ovom mjesecu, odnosno, postu kao glavnom ibadetu u ovom mjesecu. U 183 i 184. ajetu sure El-Bekare Allah, dž.š., kaže: „O, vi koji ste uzvjerovali! Propisuje vam se post, kao što je propisan i onima prije vas – da biste se sačuvali – u danima koji su određeni, a onome od vas ko bude bolestan ili na putu – isti broj drugih dana. Oni koji ga ne mogu podnijeti dužni su se iskupiti ishranom jednog siromaha. A ko dragovoljno učini više dobra, za njegovo dobro će to biti. Međutim, bolje vam je, neka znate, da postite.“",
                    PictureUrl = "https://res.cloudinary.com/dv57qyqlm/image/upload/v1727264268/Hutba-1_scb3y4.jpg",
                    Author = "Jusuf Horozović",
                    PostedDate = DateTime.UtcNow,
                    Views = 11,
                },
                new Hutba
                {
                    Title = "Ramazanska hutba reisu-l-uleme Husein-ef. Kavazovića",
                    Description = "Danas je prva hutba ovogodišnjeg Ramazana, 1442., odnosno 16. aprila 2021. godine. Molim Uzvišenog Allaha da nam u njemu otvori kapije svoje milosti. I kapije svojih blagodati. Sve blagodati mjeseca ramazana ne možemo ni naslutiti, a nekamo li dokučiti i pobrojati. Da moj ummet zna koliko u Ramazanu ima dobra, rekao je Vjerovjesnik, a.s., poželio bi da čitava godina bude ramazan!",
                    PictureUrl = "https://res.cloudinary.com/dv57qyqlm/image/upload/v1727264268/Hutba-1_scb3y4.jpg",
                    Author = "Jusuf Horozović",
                    PostedDate = DateTime.UtcNow,
                    Views = 75,
                }
            };

            await context.Hutbas.AddRangeAsync(hutbe);
            await context.SaveChangesAsync();
        }

        private static async Task SeedVijesti(DataContext context)
        {
            if (context.Vijestis.Any()) return;

            var vijesti = new List<Vijesti>
            {
                new Vijesti
                {
                    Title = "Kurs sufare i Kur’ana za zene",
                    Content = "Esselamu alejkum 👋 Sutra pocinjemo sa nasim kursem sufare za zene (ucenja arapskog pisma) kako bismo se opismenile za ucenje najljepse i najkorisnije knjige, Njegovog govora upucenog nama kako bismo lakse kao vjernice razumjele, zivjele i odgajale nasu djecu po pravilima Kur’ana❤️. Kur’an je poslan kao milost nama, nas Poslanik je podnio veliki trud primajuci Objavu te mu je zivot bio ugrozen zeleci covjecanstvu dostaviti spas-Islam.❤️ Drage sestre najmanje sto mi mozemo je zahvaliti sto smo spoznale nasu vjeru a potom potruditi se da Sufaru naucimo kako bi bile pismene da Kur’an ucimo a zato nas ceka nagrada kod Gospodara svjetova koju mi dokuciti ne mozemo😇 🌸Bujrum iskoristite mladost prije starosti i sposobnost da ucite i spoznajete nova znanja🫶",
                    Author = "Jusuf Horozovic",
                    PictureUrl = "https://biznorrkoping.com/storage/app/uploads/public/66e/e7c/168/66ee7c16834ab708344140.jpg",
                    Category = "Džemat",
                    PublishedDate = DateTime.UtcNow,
                    Views = 0,
                    IsFeatured = true,
                    Tags = new string[] {"Kur’an", "Kurs", "žene", "sufara"}
                },
                new Vijesti
                {
                    Title = "Upis u mekteb",
                    Content = "Kad u mekteb ja polazim<br> Radostan i cista srca Sa abdestom i bismilom<br> Na licu mi sreca blista<br> Mnogo toga jos da saznam<br> Moje srce bas se trudi<br> Jer nas vjera Islam uci<br> Da budemo bolji ljudi<br> ❤️Da Allah nagradi sve odgovorne roditelje koji ste danas uzeli vasu djecu za rukice i prioritirali upis u mekteb a time im pokazali i naucili ih da dzamija i mekteb imaju vazno mjesto u njihovim zivotima🥰<br> 👋Roditelji koji nisu iz opravdanih razloga mogli danas, upis je i iducu subotu pa bujrum❤️",
                    Author = "Jusuf Horozovic",
                    PictureUrl = "https://biznorrkoping.com/storage/app/uploads/public/66c/a3a/efa/66ca3aefa7ed2249788522.jpg",
                    Category = "Mekteb",
                    PublishedDate = DateTime.UtcNow,
                    Views = 0,
                    IsFeatured = true,
                    Tags = new string[] {"Kur’an", "Mekteb", "Dijeca", "Upis", "Ucenje"}
                },
                new Vijesti
                {
                    Title = "Kurban 2025",
                    Content = "Uzvišeni Allah u Kur’anu veli:<br> „Mi smo ti, uistinu, mnogō dobro dali, pa, klanjaj radi Gospodara svoga i kurban kolji, onaj koji tebe mrzi sigurno će on bez pomena ostati!“ (El-Kevser, 1-3.)<br> „Do Allaha neće doprijeti meso njihovo i krv njihova, ali će Mu stići iskreno učinjena dobra djela vaša; tako vam ih je potčinio da biste Allaha veličali zato što vas je uputio. I obraduj one koji dobra djela čine!“ (El-Hadždž, 37).<br> Draga braćo i poštovane sestre!<br> Kurban je čin ibadeta i vjerski propis utemeljen u Kur’anu i sunnetu.<br> Aktivnost na koju bez sumnje možemo biti ponosni jeste i akcija „Kurbani“, koju koordinira i provodi Islamska zajednica u Bosni i Hercegovini.",
                    Author = "Jusuf Horozovic",
                    PictureUrl = "https://biznorrkoping.com/storage/app/uploads/public/664/34d/65b/66434d65b59f4290939748.jpg",
                    Category = "Vakuf",
                    PublishedDate = DateTime.UtcNow,
                    Views = 0,
                    IsFeatured = false,
                    Tags = new string[] {"Kurban", "Bajram", "Vakuf"}
                },
                new Vijesti
                {
                    Title = "Maternji jezik",
                    Content = "Esselamu alejkum<br> I ove smo subote ucili nas maternji jezik a uz to kroz pricitanu pricu naucili jedano novo ponasanje naseg Poslanika koje cemo i mi pokusati uvesti u nasu praksu.<br> Cilj ovih casova je da djeca slusaju pricu na bosanskom jeziku ali i uce o svojoj vjeri i lijepom ponasanju💫",
                    Author = "Jusuf Horozovic",
                    PictureUrl = "https://biznorrkoping.com/storage/app/uploads/public/663/a0d/c3a/663a0dc3af03d025471457.jpg",
                    Category = "Mekteb",
                    PublishedDate = DateTime.UtcNow,
                    Views = 0,
                    IsFeatured = false,
                    Tags = new string[] {"Maternji jezik", "Ucenje", "Druzenje", "Dijeca"}
                },
                new Vijesti
                {
                    Title = "Posjeta džematu Linköping",
                    Content = "Esselamu alejkum<br> Juce je grupa od 25 zena iz naseg dzemata posjetila susjedni dzemat Bošnjačka islamska zajednica Linköping te tom prilikom prisustvovala nastavku seminara sa hfz. Hidajetom Mahalbasic na temu ” Biti zena inspiracija drugima”<br> Mnogo novih znanja te osvjestenih spoznaja koje smo imale ali nismo znale alate za upravljanje istima te nam je nasa gosca svojom radionicom pomogla u tome.<br> Lijep domacinski docek dzemata Linköping na cemu im se zahvaljujemo i cinimo dovu da ih Allah pomogne u daljem radu🤲",
                    Author = "Jusuf Horozovic",
                    PictureUrl = "https://biznorrkoping.com/storage/app/uploads/public/65e/61c/e47/65e61ce4735f8238817933.jpg",
                    Category = "Džemat",
                    PublishedDate = DateTime.UtcNow,
                    Views = 0,
                    IsFeatured = true,
                    Tags = new string[] {"Džemat", "Zene", "Druzenje", "Linköping", "Norrköping"}
                },
            };

            await context.Vijestis.AddRangeAsync(vijesti);
            await context.SaveChangesAsync();

        }
    }
}
