using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
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
    }
}
