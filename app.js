const topics = [
  "Konu bulma", "Ana düşünce", "Yardımcı düşünce", "Başlık bulma", "Paragrafın anahtar kelimeleri",
  "Metnin konusu", "Metnin amacı", "Metnin iletisi", "Metinde anlatılmak istenen", "Çıkarım yapma",
  "Yorumlama", "Örtülü anlam", "Metnin duygusu", "Metnin bakış açısı", "Anlatıcı", "Olay örgüsü",
  "Metin türleri", "Hikâye unsurları", "Paragrafın yapısı", "Giriş-gelişme-sonuç", "Paragraf tamamlama",
  "Paragraf oluşturma", "Cümle sıralama", "Düşüncenin akışını bozan cümle", "Anlam akışına uygun cümle ekleme",
  "Anlam bütünlüğü", "Neden-sonuç", "Amaç-sonuç", "Koşul-sonuç", "Karşılaştırma", "Benzetme",
  "Örneklendirme", "Tanımlama", "Sayısal verilerden yararlanma", "Tanık gösterme",
  "Düşünceyi geliştirme yolları", "Anlatım biçimleri", "Açıklayıcı anlatım", "Öyküleyici anlatım",
  "Betimleyici anlatım", "Tartışmacı anlatım", "Metinler arası karşılaştırma",
  "Tablo-grafik-görsel okuma", "Sözel mantık destekli paragraf soruları", "LGS tarzı yeni nesil paragraf soruları",
  "MEB 6. sınıf Türkçe çalışma soruları", "MEB 7. sınıf Türkçe çalışma soruları",
  "7. sınıf paragraf ek seti - Konu, başlık ve ana düşünce", "7. sınıf paragraf ek seti - Yardımcı düşünce ve çıkarım",
  "7. sınıf paragraf ek seti - Paragraf yapısı ve tamamlama", "7. sınıf paragraf ek seti - Anlatım biçimleri ve metin türleri",
  "7. sınıf paragraf ek seti - Görsel okuma ve sözel mantık",
  "8. sınıf paragraf ek seti - Parçada anlam", "8. sınıf paragraf ek seti - Metin türleri",
  "8. sınıf paragraf ek seti - Görsel ve grafik okuma", "8. sınıf paragraf ek seti - Sözel mantık"
];

const gradePlan = {
  5: {
    headline: "5. sınıf için kısa ve net paragraf antrenmanı",
    subline: "Konu bulma, ana düşünce, başlık ve basit çıkarım soruları ağırlıklı gelir.",
    focus: ["Konu bulma", "Ana düşünce", "Yardımcı düşünce", "Başlık bulma", "Çıkarım yapma", "Tablo-grafik-görsel okuma", "Sözel mantık destekli paragraf soruları", "Hikâye unsurları"]
  },
  6: {
    headline: "6. sınıf için ipucu yakalama çalışması",
    subline: "Ana fikir, yardımcı fikir, metnin amacı ve anlam bütünlüğü birlikte çalışılır.",
    focus: ["Konu bulma", "Ana düşünce", "Yardımcı düşünce", "Metnin amacı", "MEB 6. sınıf Türkçe çalışma soruları", "Tablo-grafik-görsel okuma", "Sözel mantık destekli paragraf soruları", "Neden-sonuç", "Karşılaştırma", "Paragraf tamamlama"]
  },
  7: {
    headline: "7. sınıf için yorumlama ve akışı koruma",
    subline: "Örtülü anlam, cümle sıralama, anlatım biçimleri ve akışı bozan cümleler öne çıkar.",
    focus: ["Konu bulma", "Ana düşünce", "Yardımcı düşünce", "Örtülü anlam", "MEB 7. sınıf Türkçe çalışma soruları", "7. sınıf paragraf ek seti - Konu, başlık ve ana düşünce", "7. sınıf paragraf ek seti - Yardımcı düşünce ve çıkarım", "7. sınıf paragraf ek seti - Paragraf yapısı ve tamamlama", "7. sınıf paragraf ek seti - Anlatım biçimleri ve metin türleri", "7. sınıf paragraf ek seti - Görsel okuma ve sözel mantık", "Tablo-grafik-görsel okuma", "Sözel mantık destekli paragraf soruları", "Yorumlama", "Cümle sıralama", "Düşüncenin akışını bozan cümle", "Anlatım biçimleri", "Düşünceyi geliştirme yolları"]
  },
  8: {
    headline: "8. sınıf için LGS düzeyi yeni nesil tempo",
    subline: "Uzun paragraf, görsel okuma, sözel mantık ve güçlü çeldiricilerle çalışılır.",
    focus: ["Konu bulma", "Ana düşünce", "Yardımcı düşünce", "LGS tarzı yeni nesil paragraf soruları", "8. sınıf paragraf ek seti - Parçada anlam", "8. sınıf paragraf ek seti - Metin türleri", "8. sınıf paragraf ek seti - Görsel ve grafik okuma", "8. sınıf paragraf ek seti - Sözel mantık", "Metinler arası karşılaştırma", "Tablo-grafik-görsel okuma", "Sözel mantık destekli paragraf soruları", "Çıkarım yapma", "Zaman yönetimi"]
  }
};

const practicePassages = [
  {
    id: "p5-fidan-gunlugu", grade: 5, focus: "Ana düşünce", difficulty: "Kolay", title: "Fidan Günlüğü",
    text: "Okul bahçesine dikilen küçük fidan ilk günlerde rüzgârda eğiliyor, yaprakları cansız görünüyordu. Nisa, nöbetçi olduğu günlerde kantine gitmeden önce fidana uğrayıp toprağını kontrol etti. Arkadaşları da zamanla ona katıldı. Birkaç hafta sonra fidanın uçlarında parlak yapraklar belirdi. Çocuklar, küçük bir ilginin bile canlıları güçlendirebildiğini o zaman daha iyi anladı.",
    prompts: [
      ["Bu paragrafın konusu nedir?", "Öğrencilerin okul bahçesindeki fidana gösterdiği özen."],
      ["Ana fikir nedir?", "Canlılara düzenli ilgi göstermek onların gelişmesine katkı sağlar."],
      ["Bu metne hangi başlık uygun olur?", "Fidan Günlüğü / Küçük İlginin Gücü"],
      ["Hangi anlatım biçimi ağır basmaktadır?", "Öyküleyici anlatım; çünkü bir olay, kişiler ve zaman içinde aktarılmıştır."],
      ["Metinden hangi çıkarıma ulaşılabilir?", "Öğrenciler sorumluluk aldıkça çevrelerine karşı daha duyarlı hâle gelmiştir."]
    ]
  },
  {
    id: "p5-kayip-defter", grade: 5, focus: "Hikâye unsurları", difficulty: "Kolay", title: "Kayıp Defter",
    text: "Mert, Türkçe dersinden önce çantasını karıştırdı ama mavi kaplı defterini bulamadı. Sırasının altına, kitaplığın yanına ve askıdaki montunun cebine baktı. Tam umudunu kesmişken Elif, defterin resim dersinde kullandıkları masada kaldığını söyledi. Mert defteri alınca arkadaşına teşekkür etti ve eşyalarını ders bitince kontrol etmeye karar verdi.",
    prompts: [
      ["Olay nedir?", "Mert'in Türkçe defterini araması ve sonunda bulması."],
      ["Kişiler kimlerdir?", "Mert ve Elif."],
      ["Metnin konusu nedir?", "Kaybolan defteri bulma süreci."],
      ["Ana fikir nedir?", "Eşyalarımızı düzenli kontrol etmek sorun yaşamamızı önler."],
      ["Metne uygun bir başlık yaz.", "Mavi Kaplı Defter / Kayıp Defter"]
    ]
  },
  {
    id: "p5-kitap-kokusu", grade: 5, focus: "Başlık bulma", difficulty: "Orta", title: "Kitap Kokusu",
    text: "Zeynep, kütüphanenin kapısını açınca raflardan gelen eski kitap kokusunu hemen fark etti. Sessizce masaya oturdu, kapağı yıpranmış bir hikâye kitabı seçti. Sayfaları çevirdikçe tanımadığı insanların sevinçlerine, korkularına ve umutlarına ortak oldu. Eve dönerken kütüphanenin yalnızca kitap saklanan bir yer olmadığını, insanı başka dünyalara taşıyan sakin bir yolculuk alanı olduğunu düşündü.",
    prompts: [
      ["Paragrafın konusu nedir?", "Zeynep'in kütüphanede kitap okurken yaşadığı duygu ve düşünceler."],
      ["Ana fikir nedir?", "Kütüphaneler ve kitaplar insanı farklı dünyalarla tanıştırır."],
      ["Başlık ne olabilir?", "Kitap Kokusu / Sessiz Yolculuk"],
      ["Metnin duygusu nasıldır?", "Sakin, merak uyandıran ve olumlu bir duygu taşır."],
      ["Hangi anlatım biçimi kullanılmıştır?", "Öyküleyici anlatım ve betimleyici ögeler birlikte kullanılmıştır."]
    ]
  },
  {
    id: "p5-yagmur-sonrasi", grade: 5, focus: "Betimleyici anlatım", difficulty: "Orta", title: "Yağmur Sonrası",
    text: "Yağmur dindikten sonra sokak, sanki yeni yıkanmış gibi parlıyordu. Kaldırım taşlarının arasında biriken küçük su damlaları sabah ışığında gümüş gibi görünüyordu. Apartmanların önündeki sardunyalar başlarını kaldırmış, toprağın kokusu bütün sokağa yayılmıştı. İnsanlar şemsiyelerini kapatıp ağır adımlarla yürürken serin hava yüzlerine dokunuyordu.",
    prompts: [
      ["Metnin konusu nedir?", "Yağmur sonrası sokağın görünümü."],
      ["Hangi anlatım biçimi ağır basmaktadır?", "Betimleyici anlatım; çünkü varlıkların özellikleri duyulara seslenerek anlatılmıştır."],
      ["Metinde hangi duyulara yer verilmiştir?", "Görme, koklama ve dokunma duyularına yer verilmiştir."],
      ["Başlık ne olabilir?", "Yağmur Sonrası Sokak / Serin Sabah"],
      ["Metnin anahtar sözcükleri nelerdir?", "Yağmur, sokak, su damlaları, toprak kokusu, serin hava."]
    ]
  },
  {
    id: "p5-paylasilan-ekmek", grade: 5, focus: "Yardımcı düşünce", difficulty: "Orta", title: "Paylaşılan Ekmek",
    text: "Köy okulunda beslenme saatinde herkes çantasındakileri çıkarırdı. Bir gün Arda'nın yanında yalnızca küçük bir elma vardı. Bunu gören arkadaşları peynirinden, ekmeğinden ve zeytininden ona da verdi. Arda, o gün karnını doyurmaktan çok arkadaşlarının inceliğine sevindi. Öğretmenleri, paylaşmanın bazen en güzel dersi sınıfın içinde kendiliğinden verdiğini söyledi.",
    prompts: [
      ["Paragrafın konusu nedir?", "Arkadaşların Arda ile yiyeceklerini paylaşması."],
      ["Ana fikir nedir?", "Paylaşmak insanları mutlu eder ve dostluğu güçlendirir."],
      ["Yardımcı düşünce olarak ne söylenebilir?", "Arda'nın mutluluğu yalnızca karnının doymasından kaynaklanmamıştır."],
      ["Metin türü neye yakındır?", "Hikâye edici metne yakındır."],
      ["Başlık ne olabilir?", "Paylaşılan Ekmek / Sınıftaki Güzel Ders"]
    ]
  },
  {
    id: "p6-sessiz-kahraman", grade: 6, focus: "Metnin iletisi", difficulty: "Orta", title: "Sessiz Kahraman",
    text: "Mahalledeki yaşlı çınarın gövdesine her yıl yeni bir çizik eklenirdi. Çocuklar onun altında oyun oynar, büyükler yaz akşamları serinlemek için dallarının gölgesine otururdu. Bir gün belediye görevlileri ağacın kuruyan dallarını budamaya geldi. O zaman herkes çınarın yalnızca bir ağaç olmadığını, mahallenin hafızasını taşıyan sessiz bir kahraman olduğunu fark etti.",
    prompts: [
      ["Metnin konusu nedir?", "Mahalledeki yaşlı çınarın insanlar için taşıdığı anlam."],
      ["Ana fikir nedir?", "Bazı varlıklar sadece görüntüleriyle değil, insanlarda bıraktığı anılarla değer kazanır."],
      ["Metnin iletisi nedir?", "Çevremizdeki doğal ve ortak değerleri korumalıyız."],
      ["Hangi anlatım biçimi kullanılmıştır?", "Öyküleyici anlatım içinde betimleyici ögelere yer verilmiştir."],
      ["Başlık ne olabilir?", "Sessiz Kahraman / Mahallenin Çınarı"]
    ]
  },
  {
    id: "p6-robot-kulubu", grade: 6, focus: "Amaç-sonuç", difficulty: "Orta", title: "Robot Kulübü",
    text: "Robot kulübündeki öğrenciler, okul koridorlarında unutulan ışıkları fark edince küçük bir düzenek tasarlamaya karar verdi. Amaçları, sınıf boş kaldığında ışığın kendiliğinden kapanmasını sağlamaktı. İlk denemede sensör kapıya çok yakın yerleştirildiği için düzenek sürekli çalıştı. Öğrenciler ölçüm yapıp sistemi yeniden kurunca proje daha verimli hâle geldi.",
    prompts: [
      ["Öğrencilerin amacı nedir?", "Boş sınıflarda ışığın kendiliğinden kapanmasını sağlamak."],
      ["Metnin konusu nedir?", "Robot kulübünün enerji tasarrufu için düzenek tasarlaması."],
      ["Ana fikir nedir?", "Sorunlara çözüm üretirken deneme ve düzeltme yapmak başarıyı artırır."],
      ["Metinde hangi neden-sonuç ilişkisi vardır?", "Sensör kapıya yakın olduğu için düzenek sürekli çalışmıştır."],
      ["Başlık ne olabilir?", "Robot Kulübü / Işığı Söndüren Düzenek"]
    ]
  },
  {
    id: "p6-deniz-kabugu", grade: 6, focus: "Duyular", difficulty: "Orta", title: "Deniz Kabuğu",
    text: "Eylül, sahilde bulduğu deniz kabuğunu avucuna aldı. Kabuğun dışı pütürlü, içi ise sedef gibi parlaktı. Kulağına götürdüğünde uzaktan gelen dalga seslerini andıran uğultuyu duydu. Tuz kokusu, serin rüzgâr ve ayaklarına değen ince kum, ona yaz sabahlarının hiç bitmeyecekmiş gibi geldiği günleri hatırlattı.",
    prompts: [
      ["Metnin konusu nedir?", "Eylül'ün deniz kabuğu üzerinden sahili ve yazı hatırlaması."],
      ["Hangi duyulara yer verilmiştir?", "Dokunma, görme, işitme, koklama duyularına yer verilmiştir."],
      ["Hangi anlatım biçimi ağır basmaktadır?", "Betimleyici anlatım."],
      ["Başlık ne olabilir?", "Deniz Kabuğu / Yaz Sabahı"],
      ["Metinden hangi çıkarım yapılabilir?", "Küçük bir nesne geçmişteki güzel anıları canlandırabilir."]
    ]
  },
  {
    id: "p6-iki-yol", grade: 6, focus: "Karşılaştırma", difficulty: "Orta", title: "İki Yol",
    text: "Kasabaya giden iki yol vardı. Eski yol dere kenarından kıvrılarak ilerler, yolculara söğütlerin gölgesini ve kuş seslerini sunardı. Yeni yol ise daha kısa, geniş ve düzdü; kasabaya çabuk varmak isteyenler onu seçerdi. Dedem her seferinde eski yolu tercih eder, bazen bir yere varmak kadar yolun kendisini yaşamanın da önemli olduğunu söylerdi.",
    prompts: [
      ["Metinde karşılaştırılan unsurlar nelerdir?", "Kasabaya giden eski yol ve yeni yol."],
      ["Metnin ana fikri nedir?", "Bazen hızdan çok yolculuğun yaşattıkları değerlidir."],
      ["Metnin konusu nedir?", "İki yolun özellikleri ve dedenin eski yolu tercih etmesi."],
      ["Başlık ne olabilir?", "İki Yol / Yolun Tadını Çıkarmak"],
      ["Hangi anlatım biçimleri kullanılmıştır?", "Karşılaştırma içeren açıklayıcı anlatım ve betimleyici ögeler kullanılmıştır."]
    ]
  },
  {
    id: "p6-kus-gozlemcisi", grade: 6, focus: "Çıkarım yapma", difficulty: "Zor", title: "Kuş Gözlemcisi",
    text: "Okulun fen kulübü, bahar aylarında bahçeye gelen kuşları gözlemlemek için küçük bir defter tuttu. Öğrenciler kuşların geliş saatlerini, renklerini ve kondukları ağaçları yazdı. Bir süre sonra serçelerin en çok ekmek kırıntısı bırakılan köşeye, saka kuşlarının ise çiçekli çalılara yakın yerlere geldiğini fark ettiler. Defterdeki notlar, dikkatli bakmanın rastgele bakmaktan çok daha fazla bilgi verdiğini gösterdi.",
    prompts: [
      ["Metnin konusu nedir?", "Öğrencilerin kuşları düzenli gözlemleyerek bilgi toplaması."],
      ["Ana fikir nedir?", "Düzenli ve dikkatli gözlem yapmak çevremizi daha iyi anlamamızı sağlar."],
      ["Metinden hangi çıkarıma ulaşılır?", "Kuşların davranışları bulundukları çevre ve yiyecek olanaklarıyla ilişkilidir."],
      ["Başlık ne olabilir?", "Kuş Gözlemcisi / Bahçedeki Notlar"],
      ["Metinde hangi düşünceyi geliştirme yolu vardır?", "Örneklendirme ve gözleme dayalı açıklama vardır."]
    ]
  },
  {
    id: "p7-cizgi-romanin-dili", grade: 7, focus: "Paragrafın yapısı", difficulty: "Orta", title: "Çizgi Romanın Dili",
    text: "(I) Çizgi roman, yalnızca resimlerle süslenmiş bir hikâye değildir. (II) Karelerin sıralanışı, konuşma balonlarının yeri ve çizgilerin hareket duygusu okuma biçimini doğrudan etkiler. (III) Bu yüzden çizgi romanı değerlendirirken hem yazıya hem görsel anlatıma birlikte bakmak gerekir. (IV) Son yıllarda farklı ülkelerde üretilen çizgi romanlar, bu anlatım dilinin ne kadar geniş bir alana yayıldığını da göstermektedir.",
    prompts: [
      ["Metnin konusu nedir?", "Çizgi romanın yazı ve görsel anlatımı birlikte kullanan özel dili."],
      ["Ana fikir nedir?", "Çizgi romanı doğru anlamak için yazı ve görsel unsurlar birlikte değerlendirilmelidir."],
      ["İkinci paragraf nereden başlatılabilir?", "IV. cümleyle başlatılabilir; çünkü konu çizgi romanın anlatım dilinden yaygınlığına geçer."],
      ["Başlık ne olabilir?", "Çizgi Romanın Dili"],
      ["Hangi anlatım biçimi kullanılmıştır?", "Açıklayıcı anlatım."]
    ]
  },
  {
    id: "p7-eski-saat", grade: 7, focus: "Öyküleyici anlatım", difficulty: "Orta", title: "Eski Saat",
    text: "Dolabın üst rafındaki eski saat yıllardır çalışmıyordu. Babam onu eline aldığında camındaki çizikleri parmağıyla yokladı, sonra kapağını dikkatle açtı. İçindeki küçük çarklar tozla kaplanmıştı. Birkaç saat uğraştıktan sonra saat ince bir tıkırtıyla işlemeye başladı. O ses, odadaki herkes için yalnızca zamanı değil, dedemden kalan hatırayı da yeniden canlandırdı.",
    prompts: [
      ["Metnin konusu nedir?", "Eski saatin onarılması ve ailede uyandırdığı anılar."],
      ["Ana fikir nedir?", "Bazı eşyalar, taşıdığı hatıralar nedeniyle maddi değerinden daha anlamlıdır."],
      ["Hangi anlatım biçimi ağır basmaktadır?", "Öyküleyici anlatım."],
      ["Metinde betimlemeye örnek olabilecek ayrıntı nedir?", "Saatin camındaki çizikler ve çarkların tozla kaplanmış olması."],
      ["Başlık ne olabilir?", "Eski Saat / Yeniden İşleyen Hatıra"]
    ]
  },
  {
    id: "p7-agaclarin-dili", grade: 7, focus: "Tartışmacı anlatım", difficulty: "Zor", title: "Ağaçların Dili",
    text: "Bazıları şehirlerdeki ağaçları yalnızca yol kenarını süsleyen varlıklar olarak görür. Oysa ağaçlar gölge sağlar, havayı temizler, kuşlara yuva olur ve insanın beton arasında nefes almasını kolaylaştırır. Bir caddenin güzelliği yalnızca kaldırımların düzgünlüğüyle ölçülemez; orada yaşayan canlılara ne kadar yer açıldığıyla da ölçülür.",
    prompts: [
      ["Yazar hangi düşünceye karşı çıkmaktadır?", "Ağaçların yalnızca süs amacı taşıdığı düşüncesine."],
      ["Ana fikir nedir?", "Şehirlerdeki ağaçlar estetikten öte yaşamsal ve çevresel değer taşır."],
      ["Hangi anlatım biçimi kullanılmıştır?", "Tartışmacı anlatım."],
      ["Metnin konusu nedir?", "Şehirlerde ağaçların önemi."],
      ["Başlık ne olabilir?", "Ağaçların Dili / Şehirde Nefes Alan Canlılar"]
    ]
  },
  {
    id: "p7-kaybolan-sesler", grade: 7, focus: "Metnin duygusu", difficulty: "Orta", title: "Kaybolan Sesler",
    text: "Eskiden sabahları mahalleyi simitçinin sesi uyandırırdı. Pencereler açılır, çocuklar bozuk paralarını avuçlarında sıkıştırıp merdivenlerden koşardı. Şimdi aynı sokakta arabaların uğultusu daha baskın; tanıdık sesler birer birer çekilmiş gibi. Yine de fırından yükselen sıcak ekmek kokusu, eski günlerin izini kısa bir an için geri getiriyor.",
    prompts: [
      ["Metnin duygusu nedir?", "Özlem ve hafif hüzün."],
      ["Metnin konusu nedir?", "Mahallede eski seslerin ve alışkanlıkların kaybolması."],
      ["Ana fikir nedir?", "Şehir değiştikçe eski mahalle yaşamının sıcak ayrıntıları da azalabilir."],
      ["Hangi duyulara yer verilmiştir?", "İşitme ve koklama duyularına yer verilmiştir."],
      ["Başlık ne olabilir?", "Kaybolan Sesler / Eski Mahallenin İzleri"]
    ]
  },
  {
    id: "p7-koprudeki-yazi", grade: 7, focus: "Örtülü anlam", difficulty: "Zor", title: "Köprüdeki Yazı",
    text: "Köprünün girişindeki tabelada 'Yavaşla, karşı kıyı seni bekler.' yazıyordu. İlk bakışta bu yalnızca sürücülere yapılmış bir uyarı gibiydi. Ancak köprüden geçenlerin çoğu, bu cümlenin aceleyle tüketilen günlere de söylendiğini düşünürdü. Çünkü insan bazen varacağı yere odaklanırken yolun üzerinde gördüklerini, duyduklarını ve hissettiklerini kaçırır.",
    prompts: [
      ["Metnin konusu nedir?", "Bir uyarı cümlesinden hareketle acele etmeden yaşama düşüncesi."],
      ["Örtülü anlam nedir?", "Yavaşlamak yalnız trafikte değil, yaşamı fark etmek için de gereklidir."],
      ["Ana fikir nedir?", "İnsan hedefe ulaşırken yolculuğun ayrıntılarını da fark etmelidir."],
      ["Başlık ne olabilir?", "Köprüdeki Yazı / Yavaşla"],
      ["Hangi anlatım biçimi kullanılmıştır?", "Açıklayıcı ve yorumlayıcı anlatım."]
    ]
  },
  {
    id: "p7-gol-kiyisinda", grade: 7, focus: "Betimleyici anlatım", difficulty: "Zor", title: "Göl Kıyısında",
    text: "Gölün yüzeyi akşam ışığında ince bir bakır tabaka gibi parlıyordu. Sazlıkların arasından gelen hışırtı, suya değen rüzgârın sesiyle karışıyordu. Kıyıdaki eski sandal, yarısı suya gömülmüş hâlde sessizce bekliyordu. Uzakta ağır ağır alçalan güneş, dağların ardında kaybolmadan önce gökyüzüne turuncu bir yol çizdi.",
    prompts: [
      ["Metnin konusu nedir?", "Akşam vakti göl kıyısının görünümü."],
      ["Hangi anlatım biçimi ağır basmaktadır?", "Betimleyici anlatım."],
      ["Metinde benzetmeye örnek nedir?", "Göl yüzeyinin bakır tabakaya benzetilmesi."],
      ["Metnin duygusu nasıldır?", "Sakin ve etkileyici bir atmosfer taşır."],
      ["Başlık ne olabilir?", "Göl Kıyısında / Akşamın Bakır Işığı"]
    ]
  },
  {
    id: "p8-sabah-penceresi", grade: 8, focus: "Dil ve anlatım", difficulty: "Orta", title: "Sabah Penceresi",
    text: "Gözlerini açtığında gün henüz doğmaya başlamıştı. Ağır hareketlerle doğruldu, pencerenin kolunu usulca çevirdi. İçeri dolan serin hava, geceden kalma yorgunluğunu dağıttı. Uzaklarda bir köpek uluyor, horozlar mahalleyi uyandırmak istercesine ötüyor, ağaçların arasında görünmeyen kuşlar telaşlı telaşlı kanat çırpıyordu. Aynadaki çizgili yüzüne bakınca zamanın sessizce eksilttiği günleri düşündü.",
    prompts: [
      ["Metnin konusu nedir?", "Sabah vakti yaşlı bir kişinin çevreyi gözlemlemesi ve zamanı düşünmesi."],
      ["Dil ve anlatımla ilgili neler söylenebilir?", "Betimlemeye başvurulmuş, birden fazla duyuya seslenen ayrıntılar kullanılmıştır."],
      ["Anlatıcı olayın kahramanı mıdır?", "Hayır; anlatım üçüncü kişi ağzıyla yapılmıştır."],
      ["Metnin duygusu nedir?", "Sakinlik, hüzün ve zamanın geçişini hissettiren bir duygu vardır."],
      ["Başlık ne olabilir?", "Sabah Penceresi / Çizgili Yüz"]
    ]
  },
  {
    id: "p8-ustanin-fircasi", grade: 8, focus: "Ana düşünce", difficulty: "Orta", title: "Ustanın Fırçası",
    text: "Yaşlı ressam, öğrencisinin yaptığı tabloya uzun süre baktı. Renkler parlak, çizgiler düzgün, kâğıt tertemizdi; yine de tabloda eksik bir şey vardı. Öğrenci sabırsızca nerede hata yaptığını sorunca usta, 'Hata çizgide değil, bakışında.' dedi. 'Gördüğünü kopyalamışsın ama gördüğünün sende uyandırdığı duyguyu tabloya katmamışsın.'",
    prompts: [
      ["Metnin ana fikri nedir?", "Sanatta teknik doğruluk kadar duygu ve özgün bakış da önemlidir."],
      ["Metnin konusu nedir?", "Bir ressamın öğrencisine sanatta duygu ve bakışın önemini anlatması."],
      ["Metinde verilmek istenen ileti nedir?", "Başarılı bir ürün ortaya koymak için görünenin ötesine geçmek gerekir."],
      ["Hangi anlatım biçimi kullanılmıştır?", "Öyküleyici anlatım, diyalogla desteklenmiştir."],
      ["Başlık ne olabilir?", "Ustanın Fırçası / Bakıştaki Eksik"]
    ]
  },
  {
    id: "p8-sanat-ve-sessizlik", grade: 8, focus: "Tartışmacı anlatım", difficulty: "Zor", title: "Sanat ve Sessizlik",
    text: "Bir eserin etkileyici olması için mutlaka yüksek sesle konuşması gerekmez. Bazı tablolar, bazı şiirler ya da bazı kısa hikâyeler okurun zihninde sessizce büyür. Onları değerli kılan, her şeyi açıkça söylemeleri değil; okura tamamlayacağı anlam boşlukları bırakmalarıdır. Elbette bu boşluklar rastgele değil, metnin ya da eserin kendi ipuçlarıyla desteklenmiş olmalıdır.",
    prompts: [
      ["Metnin konusu nedir?", "Sanat eserlerinde açıklık ve anlam boşluğu ilişkisi."],
      ["Ana fikir nedir?", "Etkili eserler her şeyi doğrudan söylemek yerine okura ipuçlarıyla düşünme alanı bırakabilir."],
      ["Yazar hangi düşünceye karşı çıkmaktadır?", "Eserin etkileyici olması için her şeyi açıkça anlatması gerektiği düşüncesine."],
      ["Hangi anlatım biçimi kullanılmıştır?", "Tartışmacı anlatım."],
      ["Başlık ne olabilir?", "Sanat ve Sessizlik / Anlam Boşlukları"]
    ]
  },
  {
    id: "p8-iki-paragraf", grade: 8, focus: "Paragrafın yapısı", difficulty: "Zor", title: "Çizgi Roman Evreni",
    text: "(I) Çizgi romanları neden sevdiğimiz sorusuna okurlar farklı yanıtlar verebilir. (II) Kimi okur çizgilerin estetik etkisinden, kimi anlatım tekniğinin hızından, kimi de okuma deneyiminin akıcılığından söz eder. (III) Üstelik çizgi roman dünyası, tür ve tema çeşitliliğiyle bu soruyu daha da derinleştirir. (IV) Manga türünden deneysel çalışmalara, süper kahraman serilerinden tarihsel anlatılara kadar uzanan geniş alan, çizgi romanı sonu olmayan bir evrene dönüştürür.",
    prompts: [
      ["Metnin konusu nedir?", "Çizgi romanların okur üzerindeki etkisi ve çeşitliliği."],
      ["İkinci paragraf hangi cümleyle başlatılabilir?", "III. cümleyle; çünkü ilk iki cümle sevilme nedenlerini, III ve IV çeşitliliği anlatır."],
      ["Ana fikir nedir?", "Çizgi roman, anlatım biçimi ve çeşitliliğiyle zengin bir okuma alanıdır."],
      ["Başlık ne olabilir?", "Çizgi Roman Evreni"],
      ["Metnin anlatım biçimi nedir?", "Açıklayıcı anlatım."]
    ]
  },
  {
    id: "p8-kayit-defteri", grade: 8, focus: "Yardımcı düşünce", difficulty: "Zor", title: "Kayıt Defteri",
    text: "Bir araştırmacı, sahada topladığı bilgileri yalnızca hafızasına güvenerek saklayamaz. Gözlem zamanı, ortam koşulları, konuşulan kişiler ve dikkat çeken ayrıntılar düzenli biçimde kaydedilmelidir. Çünkü küçük görünen bir not, çalışmanın ilerleyen aşamasında önemli bir bağlantıyı açıklayabilir. Düzensiz tutulan kayıtlar ise en doğru gözlemleri bile kullanılamaz hâle getirebilir.",
    prompts: [
      ["Metnin konusu nedir?", "Araştırmada düzenli kayıt tutmanın önemi."],
      ["Ana fikir nedir?", "Araştırma sürecinde bilgilerin düzenli kaydedilmesi güvenilir sonuçlara ulaşmayı sağlar."],
      ["Yardımcı düşünce yaz.", "Küçük görünen notlar daha sonra önemli bağlantıları açıklayabilir."],
      ["Metnin amacı nedir?", "Araştırma yapan kişiyi düzenli kayıt tutma konusunda bilgilendirmek ve uyarmak."],
      ["Başlık ne olabilir?", "Kayıt Defteri / Küçük Notların Değeri"]
    ]
  },
  {
    id: "p8-bir-kentin-hafizasi", grade: 8, focus: "Metinler arası karşılaştırma", difficulty: "Zor", title: "Bir Kentin Hafızası",
    text: "Eski fotoğraflar, bir kentin yalnızca binalarını değil, insanların yaşayış biçimini de gösterir. Meydandaki çeşmenin çevresinde toplanan çocuklar, dükkân önünde bekleyen esnaf, taş sokaktan geçen at arabası; hepsi geçmişin gündelik hayatına açılan küçük pencerelerdir. Bugünün geniş caddeleri ve parlak vitrinleri ise değişimi gösterir ama fotoğraflar, bu değişimin neyin üzerine kurulduğunu hatırlatır.",
    prompts: [
      ["Metnin konusu nedir?", "Eski fotoğrafların kent belleğini ve değişimi göstermesi."],
      ["Ana fikir nedir?", "Eski fotoğraflar, kentlerin geçmiş yaşamını ve bugünkü değişimin köklerini anlamamızı sağlar."],
      ["Metinde karşılaştırılan unsurlar nelerdir?", "Geçmişteki kent yaşamı ile bugünkü kent görünümü."],
      ["Başlık ne olabilir?", "Bir Kentin Hafızası / Eski Fotoğraflar"],
      ["Hangi anlatım biçimi kullanılmıştır?", "Açıklayıcı anlatım, betimleyici ayrıntılarla desteklenmiştir."]
    ]
  },
  {
    id: "p8-tartisma-masasi", grade: 8, focus: "Düşünceyi geliştirme yolları", difficulty: "Zor", title: "Tartışma Masası",
    text: "Sınıfta yapılan bir tartışmada herkesin aynı fikirde olması beklenmez. Önemli olan, farklı düşüncelerin saygılı bir dille gerekçelendirilmesidir. Örneğin bir öğrenci okul bahçesinin spor alanı olarak düzenlenmesini savunurken diğeri sessiz okuma köşelerine ihtiyaç olduğunu söyleyebilir. Bu iki görüş, kanıt ve örneklerle desteklendiğinde tartışma bir çekişme olmaktan çıkar, ortak akıl arayışına dönüşür.",
    prompts: [
      ["Metnin konusu nedir?", "Tartışmalarda farklı görüşlerin gerekçeli ve saygılı biçimde sunulması."],
      ["Ana fikir nedir?", "Farklı düşünceler kanıt ve örneklerle desteklendiğinde tartışma verimli hâle gelir."],
      ["Düşünceyi geliştirme yollarından hangileri vardır?", "Örneklendirme ve açıklama kullanılmıştır."],
      ["Metnin amacı nedir?", "Sağlıklı tartışmanın nasıl olması gerektiğini açıklamak."],
      ["Başlık ne olabilir?", "Tartışma Masası / Ortak Akıl"]
    ]
  }
];

practicePassages.push(
  {
    id: "p5-pazar-sabahi", grade: 5, focus: "Konu bulma", difficulty: "Kolay", title: "Pazar Sabahı",
    text: "Pazar sabahı evin içinde telaşlı ama neşeli bir hazırlık vardı. Annem kahvaltı masasını kuruyor, babam fırından aldığı sıcak ekmekleri sepete yerleştiriyordu. Kardeşim reçel kavanozunu açmaya çalışırken ben de bardakları dizdim. Hepimiz aynı masanın etrafında toplanınca sıradan bir sabah bile özel bir güne dönüşmüştü.",
    prompts: [
      ["Bu paragrafın konusu nedir?", "Ailenin pazar sabahı birlikte kahvaltı hazırlaması."],
      ["Ana fikir nedir?", "Aileyle paylaşılan küçük anlar sıradan zamanı değerli kılar."],
      ["Başlık ne olabilir?", "Pazar Sabahı / Aynı Masada"],
      ["Hangi anlatım biçimi ağır basmaktadır?", "Öyküleyici anlatım."],
      ["Metinden hangi çıkarıma ulaşılabilir?", "Anlatıcı ailesiyle vakit geçirmekten mutluluk duymaktadır."]
    ]
  },
  {
    id: "p5-ucurtma", grade: 5, focus: "Ana düşünce", difficulty: "Orta", title: "Uçurtmanın İpi",
    text: "Emir, uçurtmasını rüzgâra bırakınca onun hemen göğe yükselmesini bekledi. Fakat ipi bir anda salınca uçurtma savrulup yere düştü. Dedesi, uçurtmanın yükselmesi için ipin tamamen bırakılmaması gerektiğini söyledi. Emir ipi dikkatle yönettiğinde uçurtma bu kez gökyüzünde dengeli biçimde süzüldü.",
    prompts: [
      ["Metnin konusu nedir?", "Emir'in uçurtma uçurmayı öğrenmesi."],
      ["Ana fikir nedir?", "Başarı için özgürlük kadar dikkatli kontrol de gereklidir."],
      ["Başlık ne olabilir?", "Uçurtmanın İpi"],
      ["Metinde hangi olay anlatılmıştır?", "Uçurtmanın önce düşmesi, sonra doğru yönlendirilerek uçması."],
      ["Metinden hangi ders çıkarılabilir?", "Bir işi öğrenirken deneyip düzeltmek gerekir."]
    ]
  },
  {
    id: "p5-kucuk-not", grade: 5, focus: "Yardımcı düşünce", difficulty: "Orta", title: "Küçük Not",
    text: "Sınıf panosunun köşesinde küçük bir not duruyordu: 'Bugün bir arkadaşına güzel bir söz söyle.' Başta kimse bu nota fazla dikkat etmedi. Öğleden sonra öğrenciler birbirlerine teşekkür etmeye, yardım edenleri fark etmeye başladı. Gün bittiğinde öğretmen, bazen kısa bir cümlenin sınıfın havasını değiştirebileceğini söyledi.",
    prompts: [
      ["Metnin konusu nedir?", "Küçük bir notun sınıftaki davranışları değiştirmesi."],
      ["Ana fikir nedir?", "Güzel sözler ve küçük hatırlatmalar insanların ilişkilerini olumlu etkiler."],
      ["Yardımcı düşünce nedir?", "Öğrenciler gün içinde birbirlerinin olumlu davranışlarını fark etmiştir."],
      ["Başlık ne olabilir?", "Küçük Not / Güzel Söz"],
      ["Metnin amacı nedir?", "Okura güzel söz söylemenin etkisini düşündürmek."]
    ]
  },
  {
    id: "p5-sonbahar-yapraklari", grade: 5, focus: "Betimleyici anlatım", difficulty: "Orta", title: "Sonbahar Yaprakları",
    text: "Parkın yolu sarı ve kahverengi yapraklarla kaplanmıştı. Rüzgâr estiğinde yapraklar küçük kayıklar gibi havalanıyor, sonra usulca yere iniyordu. Bankların üzerindeki ince yağmur damlaları sabah ışığında parlıyordu. Defne, bu manzaraya bakarken sonbaharın yalnızca serinlik değil, renkli bir sessizlik de getirdiğini düşündü.",
    prompts: [
      ["Metnin konusu nedir?", "Sonbaharda parkın görünümü."],
      ["Hangi anlatım biçimi kullanılmıştır?", "Betimleyici anlatım."],
      ["Metinde benzetme var mı?", "Yapraklar küçük kayıklara benzetilmiştir."],
      ["Metnin duygusu nedir?", "Sakin ve huzurlu bir duygu vardır."],
      ["Başlık ne olabilir?", "Sonbahar Yaprakları / Renkli Sessizlik"]
    ]
  },
  {
    id: "p6-bisiklet-yolu", grade: 6, focus: "Metnin amacı", difficulty: "Orta", title: "Bisiklet Yolu",
    text: "Okul çevresindeki kısa mesafelerde bisiklet kullanmak hem trafiği azaltır hem de öğrencilerin hareket etmesini sağlar. Ancak bisikletin güvenli bir ulaşım aracı olabilmesi için yol çizgileri, uyarı levhaları ve kask kullanımı önemlidir. Bu nedenle belediyenin yaptığı bisiklet yolunu korumak, yalnız bisiklet sürenlerin değil, bütün yayaların sorumluluğudur.",
    prompts: [
      ["Metnin konusu nedir?", "Okul çevresinde güvenli bisiklet kullanımı."],
      ["Metnin amacı nedir?", "Bisiklet yolunun güvenli ve sorumlu kullanılmasını anlatmak."],
      ["Ana fikir nedir?", "Bisiklet yolu güvenliği herkesin dikkatli davranmasıyla sağlanır."],
      ["Metinde hangi yardımcı düşünce vardır?", "Kask, uyarı levhası ve yol çizgileri güvenlik için önemlidir."],
      ["Başlık ne olabilir?", "Bisiklet Yolu / Güvenli Ulaşım"]
    ]
  },
  {
    id: "p6-golge-oyunu", grade: 6, focus: "Anlatım biçimleri", difficulty: "Orta", title: "Gölge Oyunu",
    text: "Fen dersinde sınıfın perdeleri kapatıldı, küçük bir lamba masanın üzerine yerleştirildi. Öğretmen, elindeki kartondan kuş figürünü lambanın önünde hareket ettirdi. Duvara düşen gölge büyüyüp küçüldükçe öğrenciler ışığın yönü ve uzaklığı hakkında tahmin yürüttü. Dersin sonunda herkes, basit bir gözlemin soyut bir konuyu anlaşılır hâle getirebildiğini fark etti.",
    prompts: [
      ["Metnin konusu nedir?", "Gölge deneyiyle ışığın etkisinin öğrenilmesi."],
      ["Ana fikir nedir?", "Basit deneyler zor konuları daha anlaşılır kılabilir."],
      ["Hangi anlatım biçimi ağır basmaktadır?", "Öyküleyici anlatım ve açıklayıcı anlatım birlikte kullanılmıştır."],
      ["Metinden hangi çıkarım yapılabilir?", "Öğrenciler deney yaparak daha kalıcı öğrenmiştir."],
      ["Başlık ne olabilir?", "Gölge Oyunu / Işığın Dersi"]
    ]
  },
  {
    id: "p6-kayip-harita", grade: 6, focus: "Çıkarım yapma", difficulty: "Orta", title: "Kayıp Harita",
    text: "Müze gezisinde gruplara küçük birer harita verildi. Duru'nun grubu ilk salonda haritayı katlayıp cebine koydu ve yön levhalarına dikkat etmedi. Bir süre sonra diğer gruplar seramik bölümüne ulaşmışken onlar aynı koridora üçüncü kez girdi. Duru, haritanın yalnızca elde taşınan bir kâğıt değil, doğru kullanıldığında zamanı koruyan bir rehber olduğunu anladı.",
    prompts: [
      ["Metnin konusu nedir?", "Müze gezisinde haritayı doğru kullanmanın önemi."],
      ["Ana fikir nedir?", "Araçlar ancak doğru kullanıldığında işe yarar."],
      ["Metinden hangi çıkarım yapılabilir?", "Duru'nun grubu yönlendirmeleri yeterince takip etmemiştir."],
      ["Başlık ne olabilir?", "Kayıp Harita / Müzedeki Rehber"],
      ["Metinde neden-sonuç ilişkisi nedir?", "Harita kullanılmadığı için grup aynı koridorda dolaşıp zaman kaybetmiştir."]
    ]
  },
  {
    id: "p6-kusaklar-arasi", grade: 6, focus: "Karşılaştırma", difficulty: "Zor", title: "İki Oyun",
    text: "Dedem çocukken sokakta oynanan oyunların akşam ezanına kadar sürdüğünü anlatır. Oyuncakları azmış ama oyun kurmak için taş, dal ve birkaç çizgi yetermiş. Bugün çocuklar daha çok hazır oyuncaklara ve dijital oyunlara yöneliyor. İki dönemin oyunları farklı olsa da çocukların arkadaşlarıyla vakit geçirme isteği değişmeden kalıyor.",
    prompts: [
      ["Metinde karşılaştırılan iki durum nedir?", "Eskiden oynanan sokak oyunları ile bugünkü oyunlar."],
      ["Ana fikir nedir?", "Oyun araçları değişse de çocukların birlikte oynama isteği sürer."],
      ["Metnin konusu nedir?", "Geçmiş ve günümüz çocuk oyunları."],
      ["Başlık ne olabilir?", "İki Oyun / Değişen Oyuncaklar"],
      ["Metinde ortak yön nedir?", "Çocukların arkadaşlarıyla vakit geçirmek istemesi."]
    ]
  },
  {
    id: "p6-dogru-kaynak", grade: 6, focus: "Yardımcı düşünce", difficulty: "Zor", title: "Doğru Kaynak",
    text: "Araştırma ödevi hazırlayan öğrenciler çoğu zaman ilk buldukları bilgiyle yetinmek ister. Oysa bir bilginin güvenilir olup olmadığını anlamak için kaynağın kim tarafından hazırlandığına, yayın tarihine ve başka kaynaklarla uyumuna bakmak gerekir. Öğretmen, bilgiye ulaşmanın kolaylaştığını ama doğru bilgiyi seçmenin daha dikkatli bir okuma istediğini söyledi.",
    prompts: [
      ["Metnin konusu nedir?", "Araştırmada güvenilir kaynak seçimi."],
      ["Ana fikir nedir?", "Bilgiye kolay ulaşmak yeterli değildir; doğru kaynağı seçmek gerekir."],
      ["Yardımcı düşünce yaz.", "Kaynağın hazırlayanı, tarihi ve başka kaynaklarla uyumu kontrol edilmelidir."],
      ["Metnin amacı nedir?", "Öğrencileri güvenilir bilgi seçimi konusunda uyarmak."],
      ["Başlık ne olabilir?", "Doğru Kaynak / Bilgiyi Seçmek"]
    ]
  },
  {
    id: "p7-sessiz-kutuphane", grade: 7, focus: "Ana düşünce", difficulty: "Orta", title: "Sessiz Kütüphane",
    text: "Kütüphanede sessizlik yalnızca konuşmamak anlamına gelmez. Rafların arasında yavaş yürümek, sandalyeyi çekmeden önce dikkat etmek, kitabı yerine bırakırken diğer okurların düzenini bozmamak da bu sessizliğin parçasıdır. Çünkü kütüphane, herkesin kendi düşüncesiyle baş başa kalabildiği ortak bir alandır. Bu alanı korumak, orada bulunan herkesin küçük davranışlarına bağlıdır.",
    prompts: [
      ["Metnin konusu nedir?", "Kütüphanede sessizliği ve düzeni koruma."],
      ["Ana fikir nedir?", "Ortak çalışma alanlarının huzuru herkesin dikkatli davranmasıyla korunur."],
      ["Metinde hangi yardımcı düşünce vardır?", "Sessizlik yalnızca konuşmamak değil, eşyaları ve düzeni dikkatli kullanmaktır."],
      ["Hangi anlatım biçimi kullanılmıştır?", "Açıklayıcı anlatım."],
      ["Başlık ne olabilir?", "Sessiz Kütüphane / Ortak Sessizlik"]
    ]
  },
  {
    id: "p7-kayip-mektup", grade: 7, focus: "Öyküleyici anlatım", difficulty: "Orta", title: "Kayıp Mektup",
    text: "Tavan arasındaki sandığı temizlerken sararmış bir zarf yere düştü. Zarfın üzerinde anneannemin gençlik yıllarındaki soyadı yazıyordu. Mektubu okudukça ailemizin yıllardır anlatılan göç hikâyesinin yalnızca birkaç cümleden ibaret olmadığını anladım. Tren garında bekleyiş, geride bırakılan ev ve yeni şehirde duyulan yabancılık, mektubun satırlarında yeniden canlanıyordu.",
    prompts: [
      ["Metnin konusu nedir?", "Eski bir mektubun aile geçmişini canlandırması."],
      ["Ana fikir nedir?", "Eski belgeler geçmişte yaşanan duyguları ve olayları anlamamıza yardım eder."],
      ["Hangi anlatım biçimi ağır basmaktadır?", "Öyküleyici anlatım."],
      ["Metinde hangi duygu öne çıkar?", "Geçmişe özlem ve merak."],
      ["Başlık ne olabilir?", "Kayıp Mektup / Sandıktaki Geçmiş"]
    ]
  },
  {
    id: "p7-renklerin-dili", grade: 7, focus: "Yorumlama", difficulty: "Zor", title: "Renklerin Dili",
    text: "Bir afişte kullanılan renkler, yazı kadar güçlü bir anlam taşıyabilir. Kırmızı dikkat çekerken mavi güven duygusu uyandırabilir; yeşil ise çoğu zaman doğa ve tazelikle ilişkilendirilir. Ancak renklerin etkisi tek başına düşünülmemelidir. Afişin amacı, hedef kitlesi ve üzerinde yer alan görseller birlikte değerlendirildiğinde verilen mesaj daha doğru anlaşılır.",
    prompts: [
      ["Metnin konusu nedir?", "Afişlerde renklerin anlamı ve mesajla ilişkisi."],
      ["Ana fikir nedir?", "Bir afişin mesajını anlamak için renkler diğer unsurlarla birlikte değerlendirilmelidir."],
      ["Metinden hangi yorum yapılabilir?", "Renk seçimi afişin okurda oluşturmak istediği etkiyi destekler."],
      ["Hangi anlatım biçimi kullanılmıştır?", "Açıklayıcı anlatım."],
      ["Başlık ne olabilir?", "Renklerin Dili / Afişin Mesajı"]
    ]
  },
  {
    id: "p7-dere-yolu", grade: 7, focus: "Betimleyici anlatım", difficulty: "Zor", title: "Dere Yolu",
    text: "Köyün arkasından başlayan dar patika, dere boyunca kıvrılarak ormana uzanırdı. Sabahları suyun yüzeyinde ince bir buğu yükselir, taşların arasından geçen akıntı gümüş bir çizgi gibi parıldardı. Böğürtlen dalları patikanın kenarına sarkar, ıslak toprak kokusu insanın içine serin bir ferahlık bırakırdı. Bu yolda yürüyen biri, sessizliğin de kendine özgü bir sesi olduğunu hissederdi.",
    prompts: [
      ["Metnin konusu nedir?", "Dere kenarındaki patikanın görünümü ve atmosferi."],
      ["Hangi anlatım biçimi ağır basmaktadır?", "Betimleyici anlatım."],
      ["Metinde hangi duyulara seslenilmiştir?", "Görme, işitme ve koklama duyularına seslenilmiştir."],
      ["Metnin duygusu nedir?", "Huzurlu ve sakin bir duygu vardır."],
      ["Başlık ne olabilir?", "Dere Yolu / Sessizliğin Sesi"]
    ]
  },
  {
    id: "p7-dusunce-koprusu", grade: 7, focus: "Düşünceyi geliştirme yolları", difficulty: "Zor", title: "Düşünce Köprüsü",
    text: "Bir düşünceyi savunmak, yalnızca 'Ben böyle düşünüyorum.' demekle tamamlanmaz. Düşüncenin nedenlerini göstermek, gerektiğinde örnek vermek ve karşı görüşü anlamaya çalışmak gerekir. Örneğin okulda telefon kullanımının sınırlandırılmasını savunan biri, dikkat dağınıklığına yol açan durumları somut örneklerle açıklarsa görüşü daha anlaşılır hâle gelir. Böylece tartışma kişisel bir inatlaşma değil, düşünceyi geliştiren bir köprü olur.",
    prompts: [
      ["Metnin konusu nedir?", "Bir düşünceyi gerekçelerle savunma."],
      ["Ana fikir nedir?", "Görüşler neden ve örneklerle desteklendiğinde daha etkili savunulur."],
      ["Hangi düşünceyi geliştirme yolu kullanılmıştır?", "Örneklendirme ve açıklama kullanılmıştır."],
      ["Başlık ne olabilir?", "Düşünce Köprüsü"],
      ["Metnin amacı nedir?", "Sağlıklı tartışma için düşüncelerin nasıl destekleneceğini açıklamak."]
    ]
  },
  {
    id: "p8-bir-fotografin-soyledigi", grade: 8, focus: "Çıkarım yapma", difficulty: "Zor", title: "Bir Fotoğrafın Söylediği",
    text: "Eski bir okul fotoğrafına dikkatle bakıldığında yalnızca öğrencilerin yüzleri görülmez. Sıraların düzeni, duvardaki harita, pencereden içeri giren ışık ve çocukların duruşu dönemin eğitim anlayışına dair ipuçları verir. Fotoğrafın arkasına yazılan tarih ise bu ipuçlarını belirli bir zamanın içine yerleştirir. Bu nedenle görsel belgeler, doğru okunduğunda metinler kadar zengin bilgiler sunabilir.",
    prompts: [
      ["Metnin konusu nedir?", "Eski fotoğrafların geçmişe dair bilgi vermesi."],
      ["Ana fikir nedir?", "Görseller dikkatli incelendiğinde geçmişle ilgili önemli ipuçları sunar."],
      ["Metinden hangi çıkarım yapılabilir?", "Fotoğraftaki ayrıntılar dönemin eğitim ortamını anlamaya yardımcı olabilir."],
      ["Hangi anlatım biçimi kullanılmıştır?", "Açıklayıcı anlatım."],
      ["Başlık ne olabilir?", "Bir Fotoğrafın Söylediği / Görselin İpuçları"]
    ]
  },
  {
    id: "p8-oykunun-kapisi", grade: 8, focus: "Dil ve anlatım", difficulty: "Zor", title: "Öykünün Kapısı",
    text: "İyi bir öykü, okuru daha ilk cümlede gürültülü bir çağrıyla değil, merak uyandıran küçük bir ayrıntıyla içeri alabilir. Masanın üzerinde unutulmuş bir anahtar, yağmurda ıslanmış bir mektup ya da suskun bir kahramanın pencereye uzun uzun bakması, anlatının kapısını aralar. Bu ayrıntılar rastgele seçildiğinde okuru yorar; olayın duygusuyla birleştiğinde ise metnin dünyasını kurar.",
    prompts: [
      ["Metnin konusu nedir?", "Öyküde ayrıntıların okuru metne çekmedeki rolü."],
      ["Ana fikir nedir?", "Öyküde seçilen ayrıntılar olayın duygusuyla uyumlu olduğunda anlatıyı güçlendirir."],
      ["Dil ve anlatım açısından ne söylenebilir?", "Örneklemelerle açıklayıcı ve yorumlayıcı bir anlatım kurulmuştur."],
      ["Metinde hangi düşünceyi geliştirme yolu vardır?", "Örneklendirme."],
      ["Başlık ne olabilir?", "Öykünün Kapısı / Küçük Ayrıntı"]
    ]
  },
  {
    id: "p8-kentin-sesi", grade: 8, focus: "Metinler arası karşılaştırma", difficulty: "Zor", title: "Kentin Sesi",
    text: "Birinci metin, sabah saatlerinde uyanan bir kentin gürültüsünü anlatır: servislerin freni, kepenklerin sesi, aceleyle yürüyen insanların konuşmaları... İkinci metin ise aynı kentin gece yarısından sonraki hâline odaklanır; boş kaldırımlar, uzaktan gelen tek tük motor sesleri ve vitrinlerde kalan solgun ışıklar öne çıkar. İki metin de aynı mekânı anlatır ama zaman değiştikçe kentin okurda uyandırdığı duygu da değişir.",
    prompts: [
      ["Metnin konusu nedir?", "Aynı kentin farklı zamanlarda farklı duygu uyandırması."],
      ["İki metnin ortak yönü nedir?", "İkisi de kenti anlatmaktadır."],
      ["İki metin arasındaki fark nedir?", "Biri sabahın hareketini, diğeri gecenin sessizliğini öne çıkarır."],
      ["Ana fikir nedir?", "Mekân aynı kalsa da zaman ve ayrıntılar anlatımın duygusunu değiştirir."],
      ["Başlık ne olabilir?", "Kentin Sesi / Sabah ve Gece"]
    ]
  },
  {
    id: "p8-tartismanin-olcusu", grade: 8, focus: "Tartışmacı anlatım", difficulty: "Zor", title: "Tartışmanın Ölçüsü",
    text: "Bir konuyu tartışırken en güçlü sesin en doğru düşünceye ait olduğu sanılır. Oysa tartışmanın değeri, sesin yüksekliğinde değil, düşüncenin dayandığı kanıtlardadır. Bir öğrenci okulda okuma saatinin artırılmasını savunuyorsa yalnız 'Bence yararlı olur.' demekle yetinmemeli; okuma alışkanlığının dil becerisine, dikkat süresine ve ifade gücüne katkısını örneklerle göstermelidir. Böyle yapıldığında tartışma, karşı tarafı susturma çabası olmaktan çıkar.",
    prompts: [
      ["Yazar hangi düşünceye karşı çıkmaktadır?", "Tartışmada en yüksek sesin en doğru düşünce olduğu anlayışına."],
      ["Ana fikir nedir?", "Tartışmada düşünceler kanıt ve örneklerle desteklenmelidir."],
      ["Hangi anlatım biçimi kullanılmıştır?", "Tartışmacı anlatım."],
      ["Metnin konusu nedir?", "Sağlıklı tartışmada kanıt kullanmanın önemi."],
      ["Başlık ne olabilir?", "Tartışmanın Ölçüsü / Kanıtın Gücü"]
    ]
  },
  {
    id: "p8-zamanin-izleri", grade: 8, focus: "Betimleyici anlatım", difficulty: "Zor", title: "Zamanın İzleri",
    text: "Konağın ahşap kapısı yılların dokunuşuyla koyulaşmış, demir tokmağı avuç içinde soğuk bir ağırlık bırakacak kadar eskimişti. İçeri girildiğinde taşlığın serinliği yüzü karşılar, yüksek tavanlardan sarkan lambalar loş bir ışık yayardı. Duvarlardaki solgun fotoğraflar, bir zamanlar bu odalarda yankılanan kahkahaların sessiz tanıkları gibi dururdu. Konağın her köşesi, geçmişin ağır ama incelikli izlerini taşırdı.",
    prompts: [
      ["Metnin konusu nedir?", "Eski bir konağın görünümü ve uyandırdığı geçmiş duygusu."],
      ["Hangi anlatım biçimi ağır basmaktadır?", "Betimleyici anlatım."],
      ["Metinde hangi duyulara seslenilmiştir?", "Görme ve dokunma duyularına seslenilmiştir."],
      ["Metnin duygusu nedir?", "Geçmişe bağlı, sakin ve hafif hüzünlü bir duygu vardır."],
      ["Başlık ne olabilir?", "Zamanın İzleri / Eski Konak"]
    ]
  },
  {
    id: "p8-bilginin-yolculugu", grade: 8, focus: "Ana düşünce", difficulty: "Zor", title: "Bilginin Yolculuğu",
    text: "Bilgi, yalnızca bir kaynaktan alınıp deftere geçirilen hazır bir sonuç değildir. İyi bir okur, ulaştığı bilgiyi önce bağlamı içinde değerlendirir; sonra başka kaynaklarla karşılaştırır ve kendi cümleleriyle yeniden kurar. Bu süreçte kimi bilgiler elenir, kimileri yeni sorular doğurur. Bu yüzden araştırma, cevapları toplamak kadar doğru soruları sormayı da gerektirir.",
    prompts: [
      ["Metnin konusu nedir?", "Araştırma sürecinde bilginin değerlendirilmesi."],
      ["Ana fikir nedir?", "Araştırma, bilgiyi olduğu gibi almak değil; sorgulayıp karşılaştırarak anlamlandırmaktır."],
      ["Metnin amacı nedir?", "Okura bilinçli araştırma yapmanın önemini anlatmak."],
      ["Hangi anlatım biçimi kullanılmıştır?", "Açıklayıcı anlatım."],
      ["Başlık ne olabilir?", "Bilginin Yolculuğu / Doğru Sorular"]
    ]
  }
);

if (Array.isArray(window.PARAGRAF_KOCU_PRACTICE_PASSAGES)) {
  practicePassages.push(...window.PARAGRAF_KOCU_PRACTICE_PASSAGES);
}

let questionBank = [
  {
    grade: 5, topic: "Konu bulma", difficulty: "Kolay", outcome: "Metnin konusunu belirler.",
    text: "Elif, okul bahçesindeki küçük fidanı her gün suluyordu. Arkadaşları oyun oynarken o önce fidana bakıyor, toprağını kontrol ediyor, sonra oyuna katılıyordu. Bir ay sonra fidanın yeni yapraklar çıkardığını görünce çok sevindi.",
    stem: "Bu paragrafta asıl anlatılan konu aşağıdakilerden hangisidir?",
    options: ["Okul bahçesinde oynanan oyunlar", "Elif'in bir fidana gösterdiği özen", "Arkadaşların birlikte çalışması", "Fidanların hangi mevsimde büyüdüğü"],
    answer: "B",
    solution: "Bu soruda önce metinde en çok neyin tekrarlandığına bakmalıyız. Elif'in fidana bakması, toprağını kontrol etmesi ve büyümesine sevinmesi aynı konu etrafında toplanır.",
    wrong: "A oyun sadece yan bilgidir. C metinde ortak çalışma yoktur. D mevsim bilgisi verilmemiştir.",
    strategy: "Konu sorularında ayrıntıları değil, metnin etrafında toplandığı varlık ya da durumu bul.",
    hint: "Metindeki tekrar eden davranışlara bak."
  },
  {
    grade: 5, topic: "Ana düşünce", difficulty: "Orta", outcome: "Metnin ana fikrini belirler.",
    text: "Kitap okumak bazen yeni bir şehrin sokaklarında gezmek gibidir. Bilmediğimiz insanları tanır, farklı düşüncelerle karşılaşırız. Bu nedenle okuyan insanın hayal gücü ve kelime hazinesi zamanla gelişir.",
    stem: "Bu paragraftan çıkarılabilecek ana düşünce nedir?",
    options: ["Kitaplar yalnızca eğlenceli zaman geçirtir.", "Çok gezen kişiler daha iyi kitap okur.", "Kitap okumak insanı düşünce ve dil yönünden geliştirir.", "Her kitap aynı konuda bilgi verir."],
    answer: "C",
    solution: "Metnin sonunda verilen sonuç cümlesi ana fikri güçlendirir. Hayal gücü ve kelime hazinesinin gelişmesi, okumanın insana katkısını anlatır.",
    wrong: "A katkıyı daraltır. B metinde yoktur. D metinde söylenmeyen genellemedir.",
    strategy: "Ana düşünceyi bulurken metnin tamamını kapsayan ve yazarın vermek istediği mesajı ara.",
    hint: "Son cümle güçlü bir ipucu taşır."
  },
  {
    grade: 5, topic: "Başlık bulma", difficulty: "Kolay", outcome: "Metne uygun başlık belirler.",
    text: "Kerem, sınıf kitaplığındaki kitapların karışık durduğunu fark etti. Teneffüste birkaç arkadaşından yardım istedi. Masal, şiir ve hikâye kitaplarını ayrı raflara dizdiler. Öğretmenleri sınıfa girince kitapların daha kolay bulunabildiğini söyledi.",
    stem: "Bu metne en uygun başlık aşağıdakilerden hangisidir?",
    options: ["Yeni Bir Kitap", "Düzenlenen Sınıf Kitaplığı", "Uzun Teneffüs", "Öğretmenin Sorusu"],
    answer: "B",
    solution: "Metnin tamamında kitaplığın karışık olması ve öğrencilerin kitaplığı düzenlemesi anlatılır. Başlık, metnin tamamını kapsamalıdır.",
    wrong: "A tek bir kitaptan söz eder. C teneffüs ayrıntıdır. D öğretmenin sorusu yoktur.",
    strategy: "Başlık bulurken metindeki olayın ya da düşüncenin bütününü kapsayan kısa ifadeyi seç.",
    hint: "Metinde yapılan ana işe odaklan."
  },
  {
    grade: 5, topic: "Yardımcı düşünce", difficulty: "Orta", outcome: "Metindeki destekleyici bilgileri ayırt eder.",
    text: "Yağmur yağdıktan sonra toprak kokusu bahçeye yayıldı. Mine, annesiyle birlikte saksılardaki çiçekleri kontrol etti. Bazı yaprakların tozdan arındığını, bazı çiçeklerin ise fazla su aldığı için eğildiğini gördü. Annesi, bitkilerin de insanlar gibi ölçülü bakıma ihtiyaç duyduğunu söyledi.",
    stem: "Bu metinde aşağıdakilerden hangisine değinilmiştir?",
    options: ["Bitkilerin her gün yer değiştirmesi gerektiğine", "Yağmurun bazı çiçekleri etkileyebildiğine", "Mine'nin bahçede oyun oynadığına", "Toprağın hiç su istemediğine"],
    answer: "B",
    solution: "Metinde bazı yaprakların temizlendiği, bazı çiçeklerin ise fazla su aldığı için eğildiği söylenir. Bu, yağmurun çiçekleri etkileyebildiğini gösterir.",
    wrong: "A, C ve D metinde yoktur. Özellikle D, metindeki ölçülü bakım düşüncesine de aykırıdır.",
    strategy: "Yardımcı düşünce sorularında seçenekleri metindeki cümlelerle tek tek karşılaştır.",
    hint: "Yağmurdan sonra bitkilerde ne değişmiş?"
  },
  {
    grade: 5, topic: "Hikâye unsurları", difficulty: "Orta", outcome: "Olay, kişi, yer ve zamanı belirler.",
    text: "Cumartesi sabahı Ayşe, dedesiyle köy yoluna çıktı. Yol kenarındaki ceviz ağacının altında kısa bir mola verdiler. Dedesi ona çocukken aynı yolda okula yürüdüğünü anlattı. Ayşe, dedesinin anılarını dinlerken eski günleri gözünde canlandırdı.",
    stem: "Bu metinde olayın geçtiği yer aşağıdakilerden hangisidir?",
    options: ["Okul bahçesi", "Köy yolu", "Sınıf kitaplığı", "Şehir parkı"],
    answer: "B",
    solution: "Metinde Ayşe ve dedesinin köy yoluna çıktığı, ceviz ağacının altında mola verdiği anlatılır. Olayın geçtiği temel yer köy yoludur.",
    wrong: "A ve C metinde yoktur. D park anlamına gelen bir yer belirtilmemiştir.",
    strategy: "Hikâye unsurlarında 'nerede?' sorusunu sorarak yeri bul.",
    hint: "Ayşe ve dedesi nereye çıkıyor?"
  },
  {
    grade: 5, topic: "Çıkarım yapma", difficulty: "Zor", outcome: "Metindeki ipuçlarından basit çıkarım yapar.",
    text: "Sınıfta geri dönüşüm kutusu boş duruyordu. Öğretmen, plastik şişeleri ve kâğıtları ayrı kutulara atmanın doğaya katkı sağlayacağını anlattı. Bir hafta sonra kutular dolmuş, öğrenciler de çöpleri ayırmaya alışmıştı. Okul görevlisi, sınıfın bu konuda örnek olduğunu söyledi.",
    stem: "Bu metinden aşağıdakilerden hangisi çıkarılabilir?",
    options: ["Öğrenciler geri dönüşüm konusunda bilinçlenmiştir.", "Sınıfta hiç plastik şişe kullanılmamıştır.", "Öğretmen geri dönüşüm kutularını kaldırmıştır.", "Okulda yalnızca kâğıt atık oluşmaktadır."],
    answer: "A",
    solution: "Başta kutu boştur, öğretmenin açıklamasından sonra kutular dolar ve öğrenciler çöpleri ayırmaya alışır. Bu durum öğrencilerin bilinçlendiğini gösterir.",
    wrong: "B ve D metinde söylenmeyen kesin yargılardır. C metne aykırıdır.",
    strategy: "Çıkarım sorularında metindeki değişimi fark et ve bu değişimin neyi gösterdiğini düşün.",
    hint: "Başta ve sonda öğrencilerin davranışı nasıl değişiyor?"
  },
  {
    grade: 6, topic: "Yardımcı düşünce", difficulty: "Orta", outcome: "Metindeki destekleyici düşünceleri ayırt eder.",
    text: "Bisiklet kullanmak hem bedeni çalıştırır hem de kısa mesafelerde ulaşımı kolaylaştırır. Motorlu araç kullanılmadığı için çevreye daha az zarar verir. Ayrıca düzenli bisiklet süren kişiler, zamanla denge ve dikkat becerilerini de geliştirir.",
    stem: "Bu metinde aşağıdakilerden hangisine değinilmemiştir?",
    options: ["Bisikletin çevreye katkısı", "Bisikletin denge becerisine etkisi", "Bisikletin ulaşımı kolaylaştırması", "Bisiklet yarışları için gerekli kurallar"],
    answer: "D",
    solution: "Bu soruda metinde verilen yardımcı düşünceleri tek tek kontrol etmeliyiz. Çevre, denge ve ulaşım metinde vardır; yarış kuralları yoktur.",
    wrong: "A ikinci cümlede, B son cümlede, C ilk cümlede yer alır.",
    strategy: "Değinilmemiştir sorularında seçenekleri metindeki ifadelerle eşleştir.",
    hint: "Metinde geçmeyen alanı ara."
  },
  {
    grade: 6, topic: "Metnin amacı", difficulty: "Orta", outcome: "Yazarın metni yazma amacını belirler.",
    text: "Okul koridorlarında koşmak çoğu öğrenciye eğlenceli görünebilir. Ancak teneffüs sırasında koridorlar kalabalık olur ve hızlı hareket eden öğrenciler birbirine çarpabilir. Bu nedenle koridorlarda yürümek, merdivenleri dikkatli kullanmak ve arkadaşlarımızı uyarmak okul güvenliği için önemlidir.",
    stem: "Bu metnin yazılış amacı aşağıdakilerden hangisidir?",
    options: ["Okul koridorlarını tanıtmak", "Öğrencileri güvenli davranışlar konusunda uyarmak", "Teneffüslerin süresini karşılaştırmak", "Merdivenlerin nasıl yapıldığını açıklamak"],
    answer: "B",
    solution: "Metinde koridorda koşmanın tehlikesi anlatılıyor ve güvenli davranışlar öneriliyor. Bu nedenle amaç öğrencileri uyarmaktır.",
    wrong: "A tanıtım değildir. C süre karşılaştırması yoktur. D merdiven yapımıyla ilgili bilgi verilmez.",
    strategy: "Amaç sorularında yazarın okurda hangi davranış ya da düşünceyi oluşturmak istediğini bul.",
    hint: "Metin seni hangi konuda dikkatli olmaya çağırıyor?"
  },
  {
    grade: 6, topic: "Neden-sonuç", difficulty: "Kolay", outcome: "Neden-sonuç ilişkisini belirler.",
    text: "Selin, sabah çantasını aceleyle hazırladığı için matematik defterini evde unuttu. Derste not tutamayınca teneffüste arkadaşından defterini ödünç aldı. Eve gidince çantasını akşamdan hazırlamaya karar verdi.",
    stem: "Selin'in matematik defterini unutmasının nedeni aşağıdakilerden hangisidir?",
    options: ["Defterinin eski olması", "Çantasını aceleyle hazırlaması", "Arkadaşından defter alması", "Derse geç kalması"],
    answer: "B",
    solution: "Metinde 'çantasını aceleyle hazırladığı için' ifadesi neden bildirir. Defteri unutmasının nedeni budur.",
    wrong: "A ve D metinde yoktur. C sonuçta yaptığı davranıştır, neden değildir.",
    strategy: "Neden-sonuçta 'neden?' sorusunu sor; metindeki 'için, çünkü, bu yüzden' gibi ipuçlarını yakala.",
    hint: "'İçin' sözcüğünün bağlı olduğu bölüme bak."
  },
  {
    grade: 6, topic: "Karşılaştırma", difficulty: "Orta", outcome: "Metindeki karşılaştırma ilişkisini belirler.",
    text: "Elektronik kitaplar çok sayıda eseri tek cihazda taşımayı sağlar. Basılı kitaplar ise sayfa kokusu, kapak dokusu ve göz yormayan okuma deneyimiyle bazı okurlar için daha keyiflidir. İki türün de kendine göre üstün yanları vardır; önemli olan okurun ihtiyacına uygun olanı seçmesidir.",
    stem: "Bu metinde karşılaştırılan iki unsur aşağıdakilerden hangisidir?",
    options: ["Roman ve hikâye", "Elektronik kitap ve basılı kitap", "Okur ve yazar", "Kapak ve sayfa numarası"],
    answer: "B",
    solution: "Metin elektronik kitapların taşıma kolaylığı ile basılı kitapların okuma deneyimini karşılaştırır.",
    wrong: "A, C ve D metnin ana karşılaştırma unsurları değildir.",
    strategy: "Karşılaştırma sorularında iki varlık ya da durumun hangi özelliklerle yan yana getirildiğini belirle.",
    hint: "Metinde iki kitap türü birlikte ele alınmış."
  },
  {
    grade: 6, topic: "Paragraf tamamlama", difficulty: "Zor", outcome: "Anlam bütünlüğüne uygun cümleyi seçer.",
    text: "Bir metni anlamak için sadece kelimeleri okumak yetmez. Cümlelerin birbirine nasıl bağlandığını, hangi düşüncenin önce hangisinin sonra geldiğini de fark etmek gerekir. Bu bağ kurulmadığında ----",
    stem: "Paragraf aşağıdakilerden hangisiyle tamamlanmalıdır?",
    options: ["okur metnin ana düşüncesini daha kolay bulur.", "metnin anlam bütünlüğü zayıf kavranır.", "başlık her zaman ilk cümleden seçilir.", "paragraflar mutlaka kısa yazılır."],
    answer: "B",
    solution: "Boşluk öncesinde bağ kurmanın önemi anlatılıyor. Bağ kurulmadığında olumsuz bir sonuç beklenir; anlam bütünlüğünün zayıf kavranması bu akışa uygundur.",
    wrong: "A olumlu sonuç verir. C ve D metindeki düşünceyle ilgili olmayan kurallardır.",
    strategy: "Tamamlama sorularında boşluktan önceki duygu ve mantık yönünü koru.",
    hint: "Boşluk, bir sonuç cümlesi istiyor."
  },
  {
    grade: 6, topic: "Anlam bütünlüğü", difficulty: "Zor", outcome: "Metnin anlam bütünlüğünü sağlayan ifadeyi seçer.",
    text: "Bir kulüp çalışmasında herkesin aynı görevi yapması beklenmez. Kimi öğrenci duyuru metni hazırlar, kimi kısa konuşmayı düzenler, kimi de etkinlik günü salon düzenini sağlar. Farklı görevler doğru biçimde paylaşıldığında ----",
    stem: "Bu metin aşağıdakilerden hangisiyle tamamlanırsa anlam bütünlüğü sağlanır?",
    options: ["çalışma daha düzenli ve verimli ilerler.", "kulüp etkinlikleri tamamen gereksiz hâle gelir.", "hiç kimsenin sorumluluk almasına gerek kalmaz.", "duyuru metni yazmak bütün görevlerden önemsizdir."],
    answer: "A",
    solution: "Metin görev paylaşımının yararını anlatıyor. Bu nedenle farklı görevlerin doğru paylaşılması sonucunda çalışmanın düzenli ilerlemesi beklenir.",
    wrong: "B ve C metnin olumlu görev paylaşımı düşüncesine aykırıdır. D metinde yoktur.",
    strategy: "Anlam bütünlüğünde önce metnin olumlu mu olumsuz mu ilerlediğini belirle.",
    hint: "Görev paylaşımının sonucu ne olabilir?"
  },
  {
    grade: 7, topic: "Düşüncenin akışını bozan cümle", difficulty: "Orta", outcome: "Metindeki anlam akışını bozan cümleyi belirler.",
    text: "(I) Eski mahallelerde komşuluk ilişkileri daha sıcaktı. (II) İnsanlar birbirlerinin ihtiyacını sorar, kapılarını rahatça çalardı. (III) Güneş panelleri elektrik üretiminde kullanılan araçlar arasındadır. (IV) Bu yakınlık, mahallede güven duygusunu da artırırdı.",
    stem: "Numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?",
    options: ["I", "II", "III", "IV"],
    answer: "C",
    solution: "Metin komşuluk ilişkileri üzerine ilerliyor. III. cümlede güneş panellerinden söz edilmesi konu dışına çıkıldığını gösterir.",
    wrong: "I konuya giriş yapar. II ve IV komşuluk düşüncesini destekler.",
    strategy: "Akışı bozan cümle, metnin konu zincirine bağlanmayan cümledir.",
    hint: "Aynı konu ailesine ait olmayan cümleyi bul."
  },
  {
    grade: 7, topic: "Cümle sıralama", difficulty: "Orta", outcome: "Cümleleri anlamlı bir paragraf oluşturacak biçimde sıralar.",
    text: "(I) Sonunda sınıf panosunda küçük ama etkileyici bir sergi oluştu. (II) Öğrenciler önce araştırdıkları bilgileri kısa notlara dönüştürdü. (III) Daha sonra bu notları görsellerle destekleyerek renkli kartlara yazdılar. (IV) Türkçe dersinde her öğrenci sevdiği bir yazar hakkında çalışma hazırladı.",
    stem: "Numaralanmış cümlelerle anlamlı bir paragraf oluşturulduğunda sıralama nasıl olmalıdır?",
    options: ["IV-II-III-I", "II-IV-I-III", "I-III-II-IV", "III-I-IV-II"],
    answer: "A",
    solution: "Önce çalışmanın konusu verilir: Türkçe dersinde yazar çalışması hazırlanır. Sonra araştırma notlara dönüştürülür, notlar kartlara yazılır ve sonunda sergi oluşur.",
    wrong: "Diğer seçeneklerde sonuç cümlesi başa alınır ya da hazırlık aşamaları karışır.",
    strategy: "Sıralama sorularında önce giriş cümlesini, sonra işlem basamaklarını ve sonuç cümlesini bul.",
    hint: "Sergi oluşması en son gerçekleşir."
  },
  {
    grade: 7, topic: "Anlatım biçimleri", difficulty: "Orta", outcome: "Metinde kullanılan anlatım biçimini belirler.",
    text: "Sabahın erken saatlerinde gölün üstünde ince bir sis vardı. Su kıyısındaki sazlar hafif rüzgârla eğiliyor, uzaktaki dağların gölgesi suya düşüyordu. Kuş sesleri, sessizliği bozmadan çevreye yayılıyordu.",
    stem: "Bu metinde ağır basan anlatım biçimi aşağıdakilerden hangisidir?",
    options: ["Tartışmacı anlatım", "Betimleyici anlatım", "Açıklayıcı anlatım", "Öyküleyici anlatım"],
    answer: "B",
    solution: "Metinde bir yerin görünümü ayrıntılarıyla gözümüzde canlandırılıyor. Bu nedenle betimleyici anlatım ağır basar.",
    wrong: "A düşünce savunmaz. C bilgi açıklama amacı taşımaz. D belirgin bir olay akışı yoktur.",
    strategy: "Betimlemede renk, ses, görünüm ve ayrıntılarla okurun zihninde tablo oluşturulur.",
    hint: "Metin sana bir sahne mi gösteriyor, yoksa bir düşünce mi savunuyor?"
  },
  {
    grade: 7, topic: "Örtülü anlam", difficulty: "Zor", outcome: "Metindeki dolaylı anlamları çıkarır.",
    text: "Mert, sınavdan önce notlarını tekrar tekrar okudu. Sınav başlayınca ilk sorularda biraz yavaşladı ama bildiği yerleri sakin kalarak işaretledi. Sonuçta beklediğinden iyi bir puan aldı.",
    stem: "Bu paragraftan aşağıdakilerden hangisi çıkarılabilir?",
    options: ["Mert hiç heyecanlanmamıştır.", "Hazırlık ve sakinlik başarıyı olumlu etkilemiştir.", "Sınavdaki tüm sorular kolaydır.", "Mert yalnızca şans sayesinde başarılı olmuştur."],
    answer: "B",
    solution: "Metinde Mert'in hazırlık yaptığı ve sakin kaldığı belirtiliyor. Beklediğinden iyi puan alması bu iki davranışın olumlu etkisine işaret eder.",
    wrong: "A kesin değildir; biraz yavaşladığı söylenir. C tüm sorular için bilgi yoktur. D metindeki hazırlık bilgisini yok sayar.",
    strategy: "Örtülü anlamda metinde açıkça yazmayan ama ipuçlarından ulaşılan sonucu seç.",
    hint: "Hazırlık ve sonucun bağlantısını düşün."
  },
  {
    grade: 7, topic: "Düşünceyi geliştirme yolları", difficulty: "Zor", outcome: "Düşünceyi geliştirme yolunu belirler.",
    text: "Düzenli not tutmak öğrenmeyi kalıcı hâle getirir. Örneğin fen dersinde deney aşamalarını kısa maddelerle yazan bir öğrenci, konuyu tekrar ederken hangi adımda ne yaptığını kolayca hatırlar. Bu yöntem, bilgiyi yalnızca okumaktan daha etkili bir çalışma sağlar.",
    stem: "Bu metinde düşünceyi geliştirmek için daha çok hangi yola başvurulmuştur?",
    options: ["Tanımlama", "Örneklendirme", "Tanık gösterme", "Sayısal verilerden yararlanma"],
    answer: "B",
    solution: "Yazar, düzenli not tutmanın yararını fen dersi deney aşamaları örneğiyle somutlaştırıyor. Bu nedenle örneklendirme kullanılmıştır.",
    wrong: "A kavram tanımı yapılmamıştır. C uzman görüşü yoktur. D sayısal veri verilmemiştir.",
    strategy: "Bir düşünce somut bir olay, durum ya da kişiyle açıklanıyorsa örneklendirme aranır.",
    hint: "'Örneğin' sözcüğü güçlü ipucudur."
  },
  {
    grade: 7, topic: "Yorumlama", difficulty: "Zor", outcome: "Metinden hareketle yorum yapar.",
    text: "Bazı öğrenciler bir soruyu çözemeyince hemen o konuyu hiç anlamadığını düşünür. Oysa zorlanmak, öğrenmenin durduğu anlamına gelmez; çoğu zaman eksik halkayı gösterir. Öğrenci bu halkayı fark edip doğru sorular sorarsa aynı konu onun için daha anlaşılır hâle gelir.",
    stem: "Bu metne göre zorlanma hakkında aşağıdakilerden hangisi söylenebilir?",
    options: ["Öğrenmenin tamamen bittiğini gösterir.", "Eksik noktayı fark etmek için bir işaret olabilir.", "Sadece başarısız öğrencilerde görülür.", "Soruların her zaman yanlış hazırlandığını kanıtlar."],
    answer: "B",
    solution: "Metin zorlanmanın öğrenmenin durması değil, eksik halkayı göstermesi olduğunu vurgular. Bu yüzden B seçeneği metne uygundur.",
    wrong: "A metne aykırıdır. C genelleme yapar. D soruların yanlışlığıyla ilgili değildir.",
    strategy: "Yorum sorularında metnin verdiği ipucunu aşmadan, metnin desteklediği sonucu seç.",
    hint: "Metindeki 'eksik halka' benzetmesini düşün."
  },
  {
    grade: 8, topic: "Tablo-grafik-görsel okuma", difficulty: "Orta", outcome: "Verilerden hareketle yorum yapar.",
    text: "Bir okulda kitap türü tercihleri şöyledir: Roman %38, bilgi kitabı %24, şiir %12, hikâye %26. Öğrencilerin en çok roman, en az şiir tercih ettiği görülmektedir.",
    stem: "Bu verilere göre aşağıdakilerden hangisi kesin olarak söylenebilir?",
    options: ["Hikâye tercih edenler bilgi kitabı tercih edenlerden fazladır.", "Şiir okuyan hiç öğrenci yoktur.", "Roman ve hikâye oranları birbirine eşittir.", "Bilgi kitabı en çok tercih edilen türdür."],
    answer: "A",
    solution: "Veriyi sayısal olarak karşılaştırırız. Hikâye %26, bilgi kitabı %24 olduğu için hikâye tercih edenlerin oranı daha fazladır.",
    wrong: "B yanlıştır, şiir %12'dir. C %38 ve %26 eşit değildir. D en çok tercih edilen roman %38'dir.",
    strategy: "LGS tarzında tablo sorularında önce veriyi sade karşılaştırmalara ayır.",
    hint: "Yüzdeleri büyükten küçüğe sırala."
  },
  {
    grade: 8, topic: "Metinler arası karşılaştırma", difficulty: "Zor", outcome: "İki metin arasındaki ortak ve farklı yönleri belirler.",
    text: "I. metin: Teknoloji, bilgiye ulaşmayı hızlandırdığı için öğrenme sürecinde önemli bir araçtır. Ancak doğru kaynak seçilmezse hızlı ulaşım, yanlış bilginin de hızla yayılmasına neden olabilir.\n\nII. metin: Basılı kaynaklar daha yavaş erişilir görünse de yayınevi, editör ve uzman denetiminden geçtiği için bazı konularda güvenilir bir temel oluşturabilir. Yine de tek bir kaynağa bağlı kalmak sağlıklı değildir.",
    stem: "Bu iki metnin ortak yönü aşağıdakilerden hangisidir?",
    options: ["Bilgiye ulaşırken kaynak güvenilirliğine dikkat edilmesi gerektiğini vurgulamaları", "Teknolojinin tüm kaynaklardan üstün olduğunu savunmaları", "Basılı kaynakların artık kullanılmaması gerektiğini söylemeleri", "Öğrenmenin yalnızca hızlı okumaya bağlı olduğunu belirtmeleri"],
    answer: "A",
    solution: "İki metin de bilgiye ulaşma yollarını değerlendirirken güvenilir kaynak seçiminin önemine dikkat çeker.",
    wrong: "B yalnızca teknoloji lehine kesin yargıdır, metinlerde yoktur. C basılı kaynakları dışlamaz. D hız tek ölçüt olarak verilmez.",
    strategy: "Metinler arası sorularda önce her metnin ana düşüncesini ayrı ayrı çıkar, sonra kesişen düşünceyi bul.",
    hint: "İki metinde de 'kaynak' düşüncesi nasıl ele alınmış?"
  },
  {
    grade: 8, topic: "Sözel mantık destekli paragraf soruları", difficulty: "Zor", outcome: "Metindeki koşullardan hareketle sıralama ve çıkarım yapar.",
    text: "Bir kitap kulübünde Ada, Bora, Cem ve Duru sunum yapacaktır. Sunum sırası için şu bilgiler verilmiştir: Ada, Bora'dan önce sunum yapacaktır. Cem ilk sırada değildir. Duru, Ada'dan hemen sonra sunum yapacaktır. Bora son sıradadır.",
    stem: "Bu bilgilere göre sunum sırası aşağıdakilerden hangisidir?",
    options: ["Cem - Ada - Duru - Bora", "Ada - Bora - Duru - Cem", "Duru - Ada - Cem - Bora", "Cem - Duru - Ada - Bora"],
    answer: "A",
    solution: "Bora son sıradadır. Duru, Ada'dan hemen sonra gelmelidir; bu ikili Ada-Duru biçimindedir. Cem ilk sırada değildir bilgisi seçeneklerde kontrol edildiğinde A seçeneği koşulları birlikte sağlar.",
    wrong: "B'de Duru Ada'dan hemen sonra değildir. C'de Duru Ada'dan önce gelir. D'de Duru-Ada sırası yanlıştır.",
    strategy: "LGS taktiği: kesin bilgileri önce yerleştir, sonra ikili koşulları bozmayan seçeneği kontrol et.",
    hint: "Ada ve Duru yan yana, Bora son sırada olmalı."
  },
  {
    grade: 8, topic: "LGS tarzı yeni nesil paragraf soruları", difficulty: "Zor", outcome: "Uzun metinde çok aşamalı çıkarım yapar.",
    text: "Gözlerini açtığında gün henüz doğmaya başlamıştı. Ağır hareketlerle doğruldu, besmelesini çekip her zamanki gibi camı açtı. Yüzüne vuran tertemiz hava, sabahın bu saatlerini büyük bir nimete dönüştürüyordu. Uzaklarda bir köpek uluyor, horozlar bütün mahalleyi uyandırmak istercesine ötüyor, ağustos böcekleri var gücüyle kanat çırpıyordu. Aynaya baktığında çizgili yüzü ona, bu sabahların tadını çıkarmak için kaç günü kaldığını sorar gibiydi.",
    stem: "Bu metnin dil ve anlatımıyla ilgili aşağıdakilerden hangisi söylenemez?",
    options: ["Betimlemeye başvurulmuştur.", "Anlatıcı olayın kahramanlarından biridir.", "Birden fazla duyuya seslenen ayrıntılara yer verilmiştir.", "Kişileştirme yoluyla anlatım güçlendirilmiştir."],
    answer: "B",
    solution: "Metin üçüncü kişi anlatıcıyla kurulmuştur; anlatıcı olayın kahramanlarından biri değildir. Diğer seçenekler metnin dil ve anlatım özellikleriyle uyumludur.",
    wrong: "A sabah ve çevre ayrıntılarıyla, C ses ve dokunma duyularıyla, D aynadaki yüzün soru sorar gibi verilmesiyle desteklenir.",
    strategy: "Dil ve anlatım sorularında anlatıcıyı, duyuları, betimlemeyi ve söz sanatlarını ayrı ayrı kontrol et.",
    hint: "Anlatıcı metinde 'ben' diye olayın içinde mi, yoksa dışarıdan mı anlatıyor?"
  },
  {
    grade: 8, topic: "LGS tarzı yeni nesil paragraf soruları", difficulty: "Zor", outcome: "Uzun paragrafta ana düşünce ve çıkarımı birlikte değerlendirir.",
    text: "(I) “Çizgi romanları neden seviyoruz?” sorusuna okurlar birbirinden farklı yanıtlar verebilir. (II) Kimi okur çizgilerin estetik etkisinden, kimi anlatım tekniğinin kendine özgü dinamizminden, kimi ise okuma deneyiminin sunduğu akıcılıktan söz eder; fakat tüm bu açıklamalara rağmen soruya tek ve kesin bir yanıt vermek kolay değildir. (III) Üstelik çizgi roman dünyası, çeşitliliğiyle bu soruyu daha da derinleştirir. (IV) Manga türünden deneysel çalışmalara, popüler kahraman serilerinden özgün yapımlara uzanan geniş yelpazesiyle çizgi roman, sonu olmayan bir evren niteliği taşır.",
    stem: "Bu metin iki paragrafa ayrılmak istendiğinde ikinci paragraf numaralanmış cümlelerin hangisiyle başlar?",
    options: ["I", "II", "III", "IV"],
    answer: "C",
    solution: "I ve II. cümlelerde çizgi romanların neden sevildiği üzerinde durulur. III. cümleden itibaren çizgi roman dünyasının çeşitliliği yeni bir düşünce olarak ele alınır.",
    wrong: "I metnin girişidir, II ilk düşünceyi sürdürür, IV ise III ile başlayan ikinci bölümün açıklayıcı devamıdır.",
    strategy: "Paragraf bölme sorularında konu yönünün değiştiği cümleyi bul; yeni bakış genellikle yeni paragrafı başlatır.",
    hint: "İlk iki cümle okur gerekçelerini, son iki cümle çizgi roman dünyasının genişliğini anlatıyor."
  },
  {
    grade: 8, topic: "Çıkarım yapma", difficulty: "Orta", outcome: "Metindeki ipuçlarından hareketle yargıya ulaşır.",
    text: "Bir öğretmen, deneme sınavından sonra öğrencilerine yalnızca yanlış sayılarını sormadı. Her öğrenciden hangi soruda neden zorlandığını, hangi seçeneği niçin elediğini ve bir sonraki denemede hangi stratejiyi uygulayacağını yazmasını istedi. Öğretmene göre sonuç kadar, sonuca nasıl ulaşıldığını görmek de önemlidir.",
    stem: "Bu metinden aşağıdakilerden hangisi çıkarılabilir?",
    options: ["Öğretmen sadece yüksek puan alan öğrencilerle ilgilenmektedir.", "Yanlışların nedenini incelemek öğrenme sürecine katkı sağlar.", "Deneme sınavlarında süre tutulmamalıdır.", "Seçenek eleme yöntemi her zaman gereksizdir."],
    answer: "B",
    solution: "Öğretmen öğrencilerden zorlandıkları noktaları ve stratejilerini yazmalarını istiyor. Bu, yanlışların nedenini incelemenin öğrenmeye katkı sağladığını gösterir.",
    wrong: "A metinde yoktur. C süreyle ilgili değildir. D seçenek elemenin gereksiz olduğunu değil, bilinçli yapılması gerektiğini düşündürür.",
    strategy: "Çıkarım sorularında açıkça söylenen davranıştan yazarın önem verdiği düşünceye ulaş.",
    hint: "Öğretmen sadece sonuca mı, sürece de mi bakıyor?"
  }
];

const passageSeeds = {
  5: [
    { title: "Sınıf Bahçesi", place: "okul bahçesi", person: "Elif", detail: "çiçeklerin düzenli sulanması", message: "Sorumluluk alındığında küçük işler güzel sonuçlar doğurur.", inference: "Öğrenciler doğaya karşı daha dikkatli davranmaya başlamıştır.", action: "bahçedeki çiçekleri suladı" },
    { title: "Kitaplık Günü", place: "sınıf kitaplığı", person: "Kerem", detail: "kitapların türlerine göre ayrılması", message: "Düzenli çalışmak aranan bilgiye daha kolay ulaşmayı sağlar.", inference: "Sınıfta kitaplara verilen önem artmıştır.", action: "kitapları raflara ayırdı" },
    { title: "Kayıp Kalem", place: "sınıf", person: "Mina", detail: "arkadaşının kalemini bulmasına yardım etmesi", message: "Yardımlaşma arkadaşlık bağlarını güçlendirir.", inference: "Mina arkadaşının zor durumda kalmasını istememiştir.", action: "kalemi birlikte aradı" },
    { title: "Sessiz Okuma Saati", place: "kütüphane", person: "Doruk", detail: "okuma saatinde herkesin sessiz davranması", message: "Ortak alanlarda kurallara uymak herkesin işini kolaylaştırır.", inference: "Öğrenciler kütüphane kurallarını önemsemiştir.", action: "sessizce kitabını okudu" },
    { title: "Pazar Hazırlığı", place: "ev mutfağı", person: "Zeynep", detail: "alışveriş listesinin önceden hazırlanması", message: "Plan yapmak zaman kaybını azaltır.", inference: "Aile alışverişe daha hazırlıklı gitmiştir.", action: "listeyi kontrol etti" }
  ],
  6: [
    { title: "Okul Servisi", detail: "öğrencilerin sırayla binmesi", cause: "herkes sıraya uyduğu için", result: "servise biniş daha güvenli oldu", compareA: "sıralı biniş", compareB: "aceleyle biniş", message: "Kurallı davranmak toplu yaşamı kolaylaştırır.", purpose: "öğrencileri güvenli davranmaya yönlendirmek" },
    { title: "Bilim Kulübü", detail: "deney notlarının düzenli tutulması", cause: "notlar düzenli yazıldığı için", result: "deney sonucu daha kolay açıklandı", compareA: "düzenli not", compareB: "dağınık not", message: "Bilgiyi düzenlemek öğrenmeyi kalıcı hâle getirir.", purpose: "düzenli not tutmanın yararını anlatmak" },
    { title: "Mahalle Parkı", detail: "çöplerin ayrıştırılması", cause: "kutular doğru kullanıldığı için", result: "park daha temiz göründü", compareA: "temiz park", compareB: "bakımsız park", message: "Çevreyi korumak küçük alışkanlıklarla başlar.", purpose: "çevre bilinci kazandırmak" },
    { title: "Spor Takımı", detail: "antrenman saatlerine uyulması", cause: "takım zamanında toplandığı için", result: "çalışma eksiksiz yapıldı", compareA: "düzenli antrenman", compareB: "düzensiz antrenman", message: "Başarı düzenli hazırlıkla güçlenir.", purpose: "planlı çalışmanın önemini göstermek" },
    { title: "Okuma Günlüğü", detail: "okunan kitaplardan kısa not alınması", cause: "notlar tekrar edildiği için", result: "kitabın konusu unutulmadı", compareA: "not alarak okuma", compareB: "not almadan okuma", message: "Okurken düşünmek anlamayı derinleştirir.", purpose: "okuma günlüğünün katkısını açıklamak" }
  ],
  7: [
    { title: "Dijital Defter", idea: "teknolojinin öğrenmeye destek olması", example: "öğrenci, derste aldığı notları konu başlıklarına göre dosyaladı", odd: "Deniz kaplumbağaları yumurtalarını kumsala bırakır.", hidden: "Teknoloji bilinçli kullanıldığında öğrenmeyi düzenler.", style: "açıklayıcı anlatım" },
    { title: "Eski Saat", idea: "eşyaların anılarla değer kazanması", example: "dedesinden kalan saati her sınavdan önce masasına koydu", odd: "Matematikte kesirler pay ve paydadan oluşur.", hidden: "Anılar, sıradan eşyaları özel kılabilir.", style: "öyküleyici anlatım" },
    { title: "Yağmur Sonrası", idea: "doğanın ayrıntılarını fark etmek", example: "ıslanan yaprakların üzerinde güneş ışığı parlıyordu", odd: "Futbolda takımlar on bir oyuncuyla sahaya çıkar.", hidden: "Dikkatli bakmak çevremizdeki güzellikleri görmemizi sağlar.", style: "betimleyici anlatım" },
    { title: "Takım Çalışması", idea: "farklı görevlerin ortak başarıya katkısı", example: "bir grup duyuru metnini yazarken diğer grup sunum sırasını düzenledi", odd: "Volkanik dağlar lav püskürterek oluşabilir.", hidden: "Paylaşılan sorumluluk başarıyı kolaylaştırır.", style: "açıklayıcı anlatım" },
    { title: "Sabırlı Çalışma", idea: "zor konuların tekrar ile anlaşılması", example: "öğrenci, çözemediği soruları işaretleyip ertesi gün yeniden denedi", odd: "Karadeniz kıyılarında yağış yıl boyunca görülür.", hidden: "Sabır, öğrenme sürecindeki eksikleri tamamlamayı sağlar.", style: "tartışmacı anlatım" }
  ],
  8: [
    { title: "Deneme Analizi", data: "Ana düşünce %76, çıkarım %58, görsel okuma %82, sözel mantık %64", logic: ["Ayça", "Berk", "Ceren", "Deniz"], message: "Sınav başarısı yalnızca doğru sayısıyla değil, yanlışın nedenini görmeyle gelişir.", comparison: "Bir metin sonucu önemserken diğer metin süreci öne çıkarır." },
    { title: "Okuma Stratejisi", data: "Kısa metin %88, uzun paragraf %61, tablo yorumu %74, metin karşılaştırma %69", logic: ["Roman", "Şiir", "Deneme", "Hikâye"], message: "Uzun metinlerde soru kökünü önce okumak dikkati doğru yere toplar.", comparison: "İki metin de okuma alışkanlığını ele alır ancak biri hızdan, diğeri anlam derinliğinden söz eder." },
    { title: "Kaynak Seçimi", data: "Basılı kaynak %35, dijital kaynak %42, öğretmen notu %18, video ders %5", logic: ["Pazartesi", "Salı", "Çarşamba", "Perşembe"], message: "Bilgiye hızlı ulaşmak kadar kaynağın güvenilirliğini sorgulamak da önemlidir.", comparison: "Bir metin dijital kaynakların hızını, diğeri denetlenmiş kaynakların güvenini vurgular." },
    { title: "Zaman Planı", data: "Paragraf 18 dk, sözel mantık 12 dk, dil bilgisi 10 dk, kontrol 5 dk", logic: ["Mavi", "Yeşil", "Sarı", "Kırmızı"], message: "Zamanı bölümlere ayıran öğrenci hem hızını hem dikkatini daha iyi yönetir.", comparison: "İki metin de plan yapmayı savunur; biri ders çalışma, diğeri sınav anı üzerinden açıklar." },
    { title: "Yeni Nesil Soru", data: "Doğrudan bilgi %20, çıkarım %35, karşılaştırma %25, yorumlama %20", logic: ["A", "B", "C", "D"], message: "Yeni nesil sorular, bilgiyi bulmaktan çok bilgiyi yorumlamayı gerektirir.", comparison: "Bir metin ezberi eleştirir, diğeri yorum gücünün önemini anlatır." }
  ]
};

function paragraphExtension(grade, seed, note, index) {
  const gradeFive = [
    "Bu deneyimden sonra öğrenciler, ayrıntılara dikkat etmenin sonucu nasıl değiştirdiğini daha iyi anladı.",
    "Öğretmen, yapılan çalışmanın yalnızca sonucu değil, öğrencilerin süreçteki çabasını da gösterdiğini belirtti.",
    "Sınıftaki konuşmada herkes, benzer durumlarda nasıl davranabileceğini kısaca anlattı."
  ];
  const gradeSix = [
    "Öğrenciler bu durumun nedenini ve sonucunu ayrı ayrı yazınca metindeki düşünce daha anlaşılır hâle geldi. Böylece olayın yalnızca ne olduğuna değil, hangi davranışla ortaya çıktığına da dikkat ettiler.",
    "Sınıf tartışmasında bazı öğrenciler benzer örnekler verdi, bazıları ise metindeki ayrıntıların ana düşünceyi nasıl desteklediğini açıkladı. Bu çalışma, seçenekleri metne bağlı kalarak değerlendirmelerini sağladı.",
    "Etkinliğin sonunda öğretmen, metindeki yardımcı bilgilerin ana düşünceyi güçlendirdiğini hatırlattı. Öğrenciler de seçenekleri işaretlerken önce metindeki kanıtı bulmaları gerektiğini fark etti."
  ];
  const gradeSeven = [
    "Bu nedenle öğrenciler, metindeki örneklerin yalnızca süsleyici ayrıntı olmadığını; asıl düşünceyi güçlendiren ipuçları olduğunu gördü. Tartışma ilerledikçe bazı cümlelerin konuyu desteklediği, bazılarının ise konu zincirinin dışında kaldığı daha belirginleşti.",
    "Öğretmen, bir paragrafı anlamanın sadece cümleleri okumakla sınırlı olmadığını söyledi. Metindeki geçiş ifadeleri, örnekler ve sonuç cümlesi birlikte değerlendirildiğinde yazarın asıl yönelimi daha açık görülüyordu.",
    "Öğrenciler önce metnin konusu üzerinde durdu, sonra bu konudan çıkarılabilecek yorumu tartıştı. Böylece doğrudan söylenen bilgi ile metinden çıkarılan anlam arasındaki fark daha iyi kavrandı."
  ];
  const gradeEight = [
    "Bu değerlendirmede özellikle uzun metinlerde öğrencinin önce soru kökünü okuması, sonra metinde aradığı bilgiyi işaretlemesi önerildi. Çünkü yeni nesil paragraf sorularında çeldiriciler çoğu zaman metindeki bir ayrıntıyı doğru verip asıl yargıyı eksik bırakır. Bu yüzden öğrenci, seçeneklerin yalnızca doğru görünen bölümüne değil, metnin tamamıyla uyumuna da bakmalıdır.",
    "Öğrencilerden biri, yanlış yaptığı sorularda genellikle iki seçenek arasında kaldığını söyledi. Öğretmen, böyle durumlarda metindeki kesin bilgi ile yorum gerektiren bilgiyi ayırmanın önemli olduğunu vurguladı. Böylece öğrenci hem süre kaybını azaltabilir hem de güçlü çeldiricileri daha bilinçli eleyebilir.",
    "Deneme sonrasında yapılan inceleme, bazı öğrencilerin kısa metinlerde hızlı ilerlediğini ancak uzun paragraflarda ana düşünceyi kaçırdığını gösterdi. Bu nedenle çalışma planında yalnızca soru sayısı değil, yanlışın konusu ve metnin uzunluğu da dikkate alındı. Öğrencinin gelişimi, aynı beceriyi farklı metinlerde tekrar etmesiyle daha görünür hâle geldi."
  ];
  const pools = { 5: gradeFive, 6: gradeSix, 7: gradeSeven, 8: gradeEight };
  return pools[grade][index % pools[grade].length];
}

function stimulusTable(headers, rows) {
  const head = headers.map((header) => `<th>${header}</th>`).join("");
  const body = rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("");
  return `<table class="stimulus-table"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>`;
}

function stimulusList(items) {
  return `<ul class="stimulus-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function stimulusCards(items) {
  return `<div class="stimulus-cards">${items.map((item) => `<div><strong>${item.title}</strong><span>${item.text}</span></div>`).join("")}</div>`;
}

function makeOptions(correct, distractors, shift = 0) {
  const cleanDistractors = distractors.filter((item) => item !== correct).slice(0, 3);
  const options = [correct, ...cleanDistractors];
  const rotate = shift % 4;
  const rotated = [...options.slice(rotate), ...options.slice(0, rotate)];
  return {
    options: rotated,
    answer: "ABCD"[rotated.indexOf(correct)]
  };
}

const contextDossiers = [
  {
    title: "Akıllı Sofra Rehberi",
    field: "sağlık ve beslenme",
    lead: "Sağlıklı beslenmede tabağın renkli sebzeler, tam tahıllar, baklagiller ve ölçülü yağlarla dengelenmesi gerekir. Tek bir yiyeceği mucize gibi görmek yerine günlük seçimlerin toplam etkisine dikkat etmek daha doğru bir yaklaşımdır.",
    main: "Sağlıklı beslenme, tek bir besine yüklenmek yerine dengeli ve sürdürülebilir seçimler yapmayı gerektirir.",
    detail: "rehberin tek bir yiyeceği mucize gibi göstermediği",
    warning: "Bir besini çok tüketmek, dengeli beslenmenin yerini tutmaz.",
    fact: "Tam tahıl, baklagil ve sebze birlikte kullanıldığında öğün daha dengeli olur.",
    myth: "Sağlıklı beslenmek için sevilen bütün yiyecekleri tamamen bırakmak gerekir.",
    steps: ["Tabağı renklendir", "Porsiyonu ölçülü tut", "Su içmeyi unutma", "Haftalık plan yap"],
    table: [["Sebze", "Her gün", "Lif desteği"], ["Tam tahıl", "Sık", "Uzun süre tokluk"], ["Baklagil", "Haftada 2-3", "Bitkisel protein"], ["Şekerli içecek", "Sınırlı", "Gereksiz enerji"]],
    quote: "Sofradaki denge, günün enerjisini sessizce kurar."
  },
  {
    title: "Seslerin Haritası",
    field: "ses farkındalığı",
    lead: "Şehirdeki sesler yalnız gürültü olarak görülmemelidir; bazı sesler dikkat süresini, ruh hâlini ve çalışma verimini etkileyebilir. Gün içinde duyulan sesleri, hissettirdikleri duyguyla birlikte not etmek çevreyi daha bilinçli fark etmeyi sağlar.",
    main: "Çevredeki sesleri bilinçli fark etmek, dikkat ve duygu yönetimini destekler.",
    detail: "seslerin hissettirdiği duygularla birlikte not edilmesi",
    warning: "Sürekli bildirim sesi, dikkati küçük parçalara bölebilir.",
    fact: "Kuş sesi, su sesi ve rüzgâr gibi doğal sesler bazı kişilerde sakinlik duygusu oluşturabilir.",
    myth: "Sessiz bir ortam herkes için her zaman en verimli çalışma ortamıdır.",
    steps: ["Bir dakika dur", "Duyduğun sesleri ayır", "Sende uyandırdığı duyguyu yaz", "Gereksiz sesi azalt"],
    table: [["Yağmur", "Sakinlik", "Doğal ses"], ["Trafik", "Yorgunluk", "Şehir sesi"], ["Klavye", "Üretim hissi", "İş sesi"], ["Bildirim", "Dikkat bölünmesi", "Dijital ses"]],
    quote: "Duymak yalnız işitmek değil, fark etmektir."
  },
  {
    title: "Balkondan Gökyüzü",
    field: "gökyüzü gözlemi",
    lead: "Şehir ışıkları arasında bile gökyüzünü izlemek mümkündür. Ayın evrelerini not etmek, parlak yıldızları takip etmek ve kısa gözlem süreleri ayırmak gökyüzü gözlemini düzenli bir alışkanlığa dönüştürür.",
    main: "Gökyüzünü düzenli gözlemlemek, insanın doğayla bağını ve merak duygusunu güçlendirir.",
    detail: "ayın evrelerinin not edilmesi ve parlak yıldızların takip edilmesi",
    warning: "Gözlem için güçlü araçlardan önce düzenli dikkat gerekir.",
    fact: "Ayın görünümü günlere göre değişir ve bu değişim gözlem defterine kaydedilebilir.",
    myth: "Şehirde yaşayan biri gökyüzü gözlemi yapamaz.",
    steps: ["Işığı azalt", "Ayın konumuna bak", "Kısa not al", "Ertesi gün karşılaştır"],
    table: [["Ay", "Her gece değişir", "Kolay izlenir"], ["Parlak yıldız", "Sabit gibi görünür", "Yön bulmaya yardım eder"], ["Bulut", "Hava ipucu verir", "Gözlemi etkiler"], ["Işık kirliliği", "Görüşü azaltır", "Azaltılabilir"]],
    quote: "Gökyüzü, başını kaldıran okura açık bir sayfadır."
  },
  {
    title: "Bilgiyi Kalıcı Kılan Tekrar",
    field: "öğrenme ve tekrar",
    lead: "Aralıklı tekrar, öğrenilen bilginin belirli zaman aralıklarıyla yeniden hatırlanmasına dayanır. Kısa ama planlı tekrarlar, uzun ve düzensiz çalışmalardan daha kalıcı öğrenme sağlayabilir.",
    main: "Bilgi, doğru aralıklarla hatırlandığında daha kalıcı hâle gelir.",
    detail: "kısa ama planlı tekrarların uzun ve düzensiz çalışmalardan etkili olabileceği",
    warning: "Üst üste uzun çalışmak, öğrenmeyi kalıcı kılmak için tek başına yeterli değildir.",
    fact: "İlk tekrarın öğrenmeden kısa süre sonra yapılması hatırlamayı güçlendirir.",
    myth: "Bir konuyu bir kez çok uzun çalışmak, tekrar yapmaya gerek bırakmaz.",
    steps: ["İlk öğrenme", "Kısa tekrar", "Bir gün sonra bak", "Üç gün sonra dene"],
    table: [["İlk tekrar", "10-20 dk sonra", "Unutmayı yavaşlatır"], ["İkinci tekrar", "1 gün sonra", "Hatırlamayı güçlendirir"], ["Üçüncü tekrar", "3 gün sonra", "Kalıcı iz bırakır"], ["Genel tekrar", "1 hafta sonra", "Eksikleri gösterir"]],
    quote: "Bilgi, doğru zamanda geri çağrılınca güçlenir."
  },
  {
    title: "Bulutların Haritası",
    field: "doğa ve hava gözlemi",
    lead: "Bulutlar yalnız gökyüzünü süsleyen görüntüler değildir; hava değişimlerinin ipuçlarını taşır. Bulutların şekli, yüksekliği ve rengi birlikte incelendiğinde hava hakkında daha dikkatli yorum yapılabilir.",
    main: "Bulutları gözlemlemek, hava olaylarını anlamaya yardımcı olur.",
    detail: "bulutların şekli, yüksekliği ve renginin incelenmesi",
    warning: "Tek bir buluta bakarak kesin hava tahmini yapmak doğru değildir.",
    fact: "Koyu ve kalın bulutlar çoğu zaman yağış ihtimalinin arttığını gösterir.",
    myth: "Bütün bulutlar aynı yükseklikte oluşur.",
    steps: ["Şekle bak", "Rengi değerlendir", "Rüzgârı gözle", "Notlarını karşılaştır"],
    table: [["Kümülüs", "Pamuksu", "Açık hava"], ["Sirüs", "İnce", "Yüksek seviye"], ["Stratus", "Gri tabaka", "Kapalı gökyüzü"], ["Nimbüs", "Koyu", "Yağış işareti"]],
    quote: "Gökyüzünü okuyan, havanın sessiz notlarını fark eder."
  },
  {
    title: "Artıklarla Barış Rehberi",
    field: "israfı azaltma",
    lead: "Evde artan yiyecekleri değerlendirmek için kapların üzerine tarih yazmak, görünür raf kullanmak ve küçük porsiyonlar hazırlamak işe yarar. Amaç, yiyecekleri unutulmuş eşya olmaktan çıkarıp planlı tüketime katmaktır.",
    main: "Yiyecek israfını azaltmak, küçük düzenleme alışkanlıklarıyla mümkündür.",
    detail: "kapların üzerine tarih yazılması ve görünür raf kullanılması",
    warning: "Tarihsiz kaplar, yiyeceklerin unutulmasına ve bozulmasına yol açabilir.",
    fact: "Küçük porsiyon hazırlamak, artan yiyecek miktarını azaltabilir.",
    myth: "Artan yiyecekler mutlaka çöpe gitmelidir.",
    steps: ["Tarihi yaz", "Görünür rafa koy", "Bir gün içinde planla", "Tüketemeyeceğini paylaş"],
    table: [["Tarih etiketi", "Ne zaman hazırlandı?", "Unutmayı önler"], ["Şeffaf kap", "İçerik görünür", "Seçimi kolaylaştırır"], ["Küçük porsiyon", "Az artar", "İsrafı azaltır"], ["Arka raf", "Gözden kaçar", "Risklidir"]],
    quote: "Küçük kaplar, büyük israfı durdurabilir."
  },
  {
    title: "Dijital Denge Planı",
    field: "teknoloji kullanımı",
    lead: "Ekran süresini tamamen yasaklamak yerine kullanım amacını belirlemek daha dengeli bir yoldur. Ders, iletişim ve eğlence süreleri birbirinden ayrıldığında teknoloji daha bilinçli kullanılabilir.",
    main: "Teknolojiyi bilinçli kullanmak, süre kadar amaç belirlemeyi de gerektirir.",
    detail: "ders, iletişim ve eğlence sürelerinin ayrılması",
    warning: "Amaçsız ekran kullanımı, zamanın fark edilmeden dağılmasına neden olabilir.",
    fact: "Bildirimleri azaltmak, odaklanma süresini artırabilir.",
    myth: "Teknolojiyi verimli kullanmak için bütün uygulamaları silmek gerekir.",
    steps: ["Amacı yaz", "Süre belirle", "Bildirimleri azalt", "Kısa mola ver"],
    table: [["Ders", "40 dk", "Öncelikli"], ["İletişim", "20 dk", "Sınırlı"], ["Oyun", "30 dk", "Planlı"], ["Amaçsız gezinme", "Azaltılmalı", "Dikkat dağıtır"]],
    quote: "Ekranı yönetmek, zamanı yönetmenin bir parçasıdır."
  },
  {
    title: "Su İzini Takip Et",
    field: "su tasarrufu",
    lead: "Su kullanımı yalnız musluğu kapatmakla sınırlı değildir. Gıda, kıyafet ve temizlik alışkanlıkları da dolaylı su tüketimini etkiler. Günlük seçimlerin su izini düşünmek, tasarruf bilincini güçlendirir.",
    main: "Su tasarrufu, doğrudan ve dolaylı tüketimi birlikte fark etmeyi gerektirir.",
    detail: "gıda, kıyafet ve temizlik alışkanlıklarının dolaylı su tüketimini etkilemesi",
    warning: "Yalnız musluğu kapatmak, su bilinci için yeterli görülmemelidir.",
    fact: "Tamir edilmeyen küçük sızıntılar zamanla büyük su kaybına yol açabilir.",
    myth: "Su tasarrufu yalnız banyoda yapılır.",
    steps: ["Sızıntıyı kontrol et", "Gereksiz akışı durdur", "Alışverişi planla", "Tekrar kullanılabileni seç"],
    table: [["Diş fırçalama", "Musluk kapalı", "Doğrudan tasarruf"], ["Sızıntı", "Onarım gerekli", "Sürekli kayıp"], ["Gıda israfı", "Azaltılmalı", "Dolaylı su"], ["Bilinçli alışveriş", "Planlı", "Kaynak koruma"]],
    quote: "Suyun izi, günlük seçimlerin içinde saklıdır."
  },
  {
    title: "Kompost Günlüğü",
    field: "organik atık dönüşümü",
    lead: "Okul bahçesinde başlatılan kompost çalışmasında meyve kabukları ve kuru yapraklar ayrı bir kutuda biriktirilmiştir. Öğrenciler, her organik atığın aynı hızda çözünmediğini ve dengenin koku oluşumunu etkilediğini gözlemlemiştir.",
    main: "Kompost yapmak, organik atıkları doğru dengeyle toprağa kazandırmayı sağlar.",
    detail: "meyve kabukları ve kuru yaprakların ayrı bir kutuda biriktirilmesi",
    warning: "Denge kurulmazsa kompost kutusunda kötü koku oluşabilir.",
    fact: "Kuru yapraklar, nemli atıklarla birlikte kullanıldığında karışım dengelenir.",
    myth: "Kompost kutusuna her türlü atık atılabilir.",
    steps: ["Organik atığı ayır", "Kuru malzeme ekle", "Ara sıra karıştır", "Toprak kokusunu kontrol et"],
    table: [["Meyve kabuğu", "Uygun", "Nemli atık"], ["Kuru yaprak", "Uygun", "Denge sağlar"], ["Plastik", "Uygun değil", "Çözünmez"], ["Yağlı yemek", "Sınırlı", "Koku yapabilir"]],
    quote: "Toprağa dönen atık, doğanın döngüsüne katılır."
  },
  {
    title: "Şehirde Bisiklet Rotası",
    field: "ulaşım ve güvenlik",
    lead: "Bisiklet kullanmak çevreye katkı sağlar; ancak güvenli rota seçmek de en az bunun kadar önemlidir. Kask takmak, görünür kıyafet seçmek ve araç trafiğinin yoğun olduğu yollardan kaçınmak temel güvenlik adımlarıdır.",
    main: "Bisiklet kullanımı, çevre yararı kadar güvenli rota planlaması da gerektirir.",
    detail: "kask, görünür kıyafet ve güvenli rota seçiminin önerilmesi",
    warning: "Yoğun trafikli yolda plansız sürüş risk oluşturabilir.",
    fact: "Kısa mesafelerde bisiklet kullanmak karbon salımını azaltmaya yardımcı olur.",
    myth: "Bisiklet güvenliği yalnız hızlı sürmemekle sağlanır.",
    steps: ["Rotayı seç", "Kaskı tak", "Görünür ol", "Trafik işaretlerine uy"],
    table: [["Kask", "Gerekli", "Baş koruma"], ["Reflektör", "Gerekli", "Görünürlük"], ["Yoğun yol", "Kaçınılmalı", "Risk"], ["Bisiklet yolu", "Tercih edilmeli", "Güvenli rota"]],
    quote: "İyi rota, güvenli yolculuğun ilk adımıdır."
  },
  {
    title: "Afet Çantası Listesi",
    field: "hazırlık ve güvenlik",
    lead: "Afet hazırlığı metninde çantanın yalnız bir kez hazırlanıp unutulmaması gerektiği vurgulanır. Su, ilk yardım malzemesi, fener, düdük ve kişisel ilaçlar düzenli olarak kontrol edilmelidir.",
    main: "Afet çantası, düzenli kontrol edildiğinde gerçek bir hazırlık aracına dönüşür.",
    detail: "su, fener, düdük ve kişisel ilaçların düzenli kontrol edilmesi",
    warning: "Tarihi geçmiş malzeme güven duygusu verse de ihtiyaç anında işe yaramayabilir.",
    fact: "Düdük, sesin duyurulmasını kolaylaştıran küçük ama önemli bir araçtır.",
    myth: "Afet çantası hazırlandıktan sonra bir daha kontrol edilmez.",
    steps: ["Temel malzemeyi koy", "Tarihleri kontrol et", "Aileyle yerini paylaş", "Altı ayda bir yenile"],
    table: [["Su", "Gerekli", "Tarih kontrolü"], ["Fener", "Gerekli", "Pil kontrolü"], ["Düdük", "Gerekli", "Ses verme"], ["Ağır eşya", "Sınırlı", "Taşımayı zorlaştırır"]],
    quote: "Hazırlık, panik başlamadan önce yapılan sessiz plandır."
  }
];

const lgsPdfContexts = [
  {
    title: "Akdeniz Diyeti: Doğanın Soframıza Sunduğu Şifa",
    text: "Akdeniz diyeti; zeytinyağı, sebze, meyve, tam tahıl, baklagil, kuruyemiş ve balığın öne çıktığı bir beslenme düzenidir. Bu yaklaşım yalnız ne yediğimizle değil, nasıl yaşadığımızla da ilgilidir. Sofra kültürü, hareket etmek, mevsiminde beslenmek ve işlenmiş gıdaları azaltmak bu anlayışın parçalarıdır.",
    boxTitle: "Altın kurallar",
    cards: [["Bitkisel gıdalar", "Sebze, meyve ve tam tahıl günlük beslenmenin temelini oluşturur."], ["Zeytinyağı", "Ana yağ kaynağı olarak ölçülü kullanılır."], ["Balık", "Haftada en az iki kez tüketilmesi önerilir."], ["Kırmızı et", "Sınırlı tüketilmelidir."]],
    table: [["Sebze ve meyve", "Günlük", "Vitamin ve lif"], ["Balık", "Haftalık", "Omega-3"], ["Tam tahıl", "Sık", "Tokluk"], ["Şekerli içecek", "Sınırlı", "Gereksiz enerji"]],
    myth: "Akdeniz diyeti yalnız zeytinyağı tüketmekten ibarettir.",
    fact: "Akdeniz diyeti, besin seçimiyle birlikte sofra kültürü ve hareketi de kapsar.",
    main: "Akdeniz diyeti, dengeli beslenmeyi yaşam tarzıyla birleştiren bütüncül bir yaklaşımdır.",
    inference: "Bu metinde sağlıklı yaşam tek bir yiyeceğe değil, düzenli alışkanlıkların bütününe bağlanmıştır."
  },
  {
    title: "Buzdolabında Kurulan Gizli Hükümet",
    text: "Artan yemeklerin unutulmaması için kapların üzerine tarih yazmak, şeffaf kap kullanmak ve yiyecekleri görünür raflara yerleştirmek önerilir. Rehber, mutfaktaki küçük düzenlemelerin israfı azaltabileceğini eğlenceli bir dille anlatır.",
    boxTitle: "Artıklarla barış rehberi",
    cards: [["Tarih etiketi", "Kabın ne zaman hazırlandığını gösterir."], ["Şeffaf kap", "İçindekini görünür kılar."], ["Arka raf", "Yiyeceklerin unutulma riskini artırır."], ["Küçük porsiyon", "Artan yemek miktarını azaltır."]],
    table: [["Tarih yaz", "Unutmayı azaltır", "Planlama"], ["Görünür koy", "Fark edilir", "Düzen"], ["Bir gün belirle", "Tüketimi hızlandırır", "Takip"], ["Çekinmeden paylaş", "İsrafı azaltır", "Dayanışma"]],
    myth: "Artan yiyecekler mutlaka çöpe gitmelidir.",
    fact: "Artan yiyecekler doğru saklanır ve planlanırsa değerlendirilebilir.",
    main: "Yiyecek israfı, mutfakta yapılacak küçük ama düzenli uygulamalarla azaltılabilir.",
    inference: "Metin, israfı azaltmayı yalnız ekonomik değil, dikkat ve sorumluluk gerektiren bir davranış olarak ele alır."
  },
  {
    title: "Seslerin Haritası",
    text: "Günlük yaşamda duyduğumuz sesler ruh hâlimizi, dikkat süremizi ve çalışma verimimizi etkileyebilir. Yağmur, kuş sesi, trafik uğultusu, bildirim sesi ve klavye ritmi kişide farklı etkiler uyandırabilir.",
    boxTitle: "Gün içindeki ses katmanları",
    cards: [["Doğa sesleri", "Yağmur, rüzgâr ve kuş sesleri."], ["Şehir sesleri", "Trafik, korna ve insan kalabalığı."], ["Dijital sesler", "Bildirim, alarm ve klavye tıklamaları."], ["Sessizlik", "Dinlenme ve odaklanma alanı."]],
    table: [["Yağmur", "Sakinlik", "Doğal ses"], ["Kuş sesi", "Açıklık", "Doğal ses"], ["Trafik", "Yorgunluk", "Şehir sesi"], ["Bildirim", "Dikkat bölünmesi", "Dijital ses"]],
    myth: "Sessizlik her zaman herkes için en verimli ortamdır.",
    fact: "Bazı kişiler hafif arka plan sesleriyle daha rahat çalışabilir.",
    main: "Sesleri bilinçli fark etmek, dikkat ve duygu durumunu yönetmeye yardımcı olur.",
    inference: "Metin, duymayı pasif bir işitme değil, çevreyi bilinçli tanıma becerisi olarak sunar."
  },
  {
    title: "Balkondan Gökyüzü",
    text: "Şehir ışıkları arasında bile gökyüzünü izlemek mümkündür. Ayın evrelerini takip etmek, parlak yıldızları not etmek ve kısa gözlem süreleriyle gökyüzü defteri tutmak merak duygusunu canlı tutar.",
    boxTitle: "Basit gökyüzü rutini",
    cards: [["Işığı azalt", "Balkon ışığını kıs, gözlerini karanlığa alıştır."], ["Ay'a bak", "Ayın görünümünü ve yönünü not et."], ["Kısa gözlem", "15-20 dakika düzenli gözlem yeterlidir."], ["Kayıt tut", "Tarih, saat ve gördüklerini yaz."]],
    table: [["Ay", "Her gece farklı", "Kolay gözlenir"], ["Dürbün", "Yaklaştırır", "Araç"], ["Işık kirliliği", "Görüşü azaltır", "Engel"], ["Gözlem defteri", "Karşılaştırma sağlar", "Kayıt"]],
    myth: "Şehirde yıldız gözlemi yapılamaz.",
    fact: "Şehirde de Ay, parlak gezegenler ve bazı yıldızlar gözlemlenebilir.",
    main: "Gökyüzünü izlemek, şehirde bile merak ve düzenli gözlem alışkanlığı kazandırabilir.",
    inference: "Metin, gökyüzü gözlemini pahalı araçlardan çok süreklilik ve dikkatle ilişkilendirir."
  },
  {
    title: "Bilgiyi Kalıcı Kılan Yöntem",
    text: "Aralıklı tekrar, öğrenilen bilgilerin belirli zaman aralıklarıyla yeniden hatırlanmasıdır. İlk kısa tekrar, bir gün sonra tekrar, üç gün sonra tekrar ve haftalık genel tekrar bilgiyi daha kalıcı hâle getirebilir.",
    boxTitle: "Aralıklı tekrar döngüsü",
    cards: [["İlk öğrenme", "Konu ilk kez çalışılır."], ["Kısa tekrar", "10-20 dakika sonra yapılır."], ["Bir gün sonra", "Hatırlama güçlendirilir."], ["Bir hafta sonra", "Eksikler görülür."]],
    table: [["İlk tekrar", "10-20 dk", "Unutmayı yavaşlatır"], ["İkinci tekrar", "1 gün", "Hatırlatır"], ["Üçüncü tekrar", "3 gün", "Kalıcı iz oluşturur"], ["Genel tekrar", "1 hafta", "Eksikleri gösterir"]],
    myth: "Bir konuyu bir kez uzun süre çalışmak tekrar ihtiyacını ortadan kaldırır.",
    fact: "Bilgi, doğru aralıklarla geri çağrıldığında daha kalıcı olur.",
    main: "Kalıcı öğrenme, bilgiyi planlı aralıklarla yeniden hatırlamayı gerektirir.",
    inference: "Metin, çok uzun tek çalışma yerine kısa ve düzenli tekrarların değerini vurgular."
  },
  {
    title: "Bulutların Haritası",
    text: "Bulutlar yalnız güzel görüntüler sunmaz; hava değişimlerinin ipuçlarını taşır. Şekil, yükseklik, renk ve hareket bilgileri birlikte değerlendirildiğinde gökyüzü daha bilinçli okunabilir.",
    boxTitle: "Bulut türleri",
    cards: [["Kümülüs", "Pamuksu, güzel havalarda görülür."], ["Sirüs", "İnce, yükseklerde yer alır."], ["Stratus", "Gri tabaka gibi gökyüzünü kaplar."], ["Nimbüs", "Koyu renkli, yağışla ilişkilidir."]],
    table: [["Kümülüs", "Alçak-orta", "Açık hava"], ["Sirüs", "Yüksek", "İnce yapı"], ["Stratus", "Alçak", "Kapalı hava"], ["Nimbüs", "Alçak-orta", "Yağış olasılığı"]],
    myth: "Bütün bulutlar aynı yükseklikte oluşur.",
    fact: "Bulut türleri şekil ve yükseklik bakımından farklılık gösterir.",
    main: "Bulutları gözlemlemek, hava olaylarını anlamaya yardımcı olur.",
    inference: "Metin, doğayı anlamanın yalnız bakmakla değil, ayrıntıları karşılaştırmakla mümkün olduğunu anlatır."
  }
];

function lgsPdfStyleQuestion(common, index) {
  const source = lgsPdfContexts[index % lgsPdfContexts.length];
  const cycle = Math.floor(index / lgsPdfContexts.length);
  const mode = (index + cycle) % 8;
  const cards = stimulusCards(source.cards.map(([title, text]) => ({ title, text })));
  const dataTable = stimulusTable(["Bölüm", "Bilgi", "İşlev"], source.table);
  const intro = `<p>${source.text}</p>`;
  if (mode === 0) {
    const made = makeOptions(source.main, ["Metnin amacı yalnız okuru eğlendirmektir.", "Metinde verilen kutular ana metinle ilişkisizdir.", "Metin tek bir ayrıntıyı bütün bilgilerden üstün tutmaktadır."], index);
    return buildQuestion({ ...common, text: `${intro}${cards}`, stem: "Bu metin ve bilgi kutuları birlikte değerlendirildiğinde ulaşılabilecek ana düşünce hangisidir?", ...made, solution: `Ana metin ve kutular '${source.main}' düşüncesinde birleşir.` });
  }
  if (mode === 1) {
    const made = makeOptions(source.fact, [source.myth, "Tablodaki tüm bilgiler aynı anlama gelir.", "Metinde hiçbir karşılaştırma yapılmamıştır."], index);
    return buildQuestion({ ...common, text: `${intro}${stimulusTable(["Yanlış bilinen", "Doğrusu"], [[source.myth, source.fact], ["Tek bilgi bütün metni açıklamaya yeter.", "Metindeki parçalar birlikte okunmalıdır."]])}`, stem: "Verilen bilgilere göre aşağıdakilerden hangisi doğrudur?", ...made, solution: `Tabloda yanlış bilinen yargının karşısında doğru bilgi olarak '${source.fact}' verilmiştir.` });
  }
  if (mode === 2) {
    const correct = `${source.cards[0][0]}, ${source.cards[0][1].toLocaleLowerCase("tr-TR")}`;
    const made = makeOptions(correct, [`${source.cards[1][0]}, metinde hiç açıklanmamıştır.`, `${source.cards[2][0]}, ana metinle çelişmektedir.`, `${source.cards[3][0]}, ana metinden bağımsız bir ayrıntıdır.`], index);
    return buildQuestion({ ...common, text: `${intro}${cards}`, stem: "Bilgi kutularından hareketle aşağıdakilerden hangisi söylenebilir?", ...made, solution: `İlk bilgi kutusunda '${source.cards[0][0]}' başlığı altında verilen açıklama doğrudan desteklenir.` });
  }
  if (mode === 3) {
    const made = makeOptions(source.inference, ["Metin, okurun yalnız başlığa bakmasını yeterli görür.", "Metne göre bütün bilgiler tek bir satırdan çıkarılmalıdır.", "Metin, tablo ve kutular arasında ilişki kurulamayacağını savunur."], index);
    return buildQuestion({ ...common, text: `${intro}${dataTable}`, stem: "Bu metinden aşağıdakilerden hangisi çıkarılabilir?", ...made, solution: `Ana metin ile tablo birlikte düşünüldüğünde '${source.inference}' çıkarımı yapılabilir.` });
  }
  if (mode === 4) {
    const made = makeOptions(`${source.table[0][0]} - ${source.table[0][1]} - ${source.table[0][2]}`, [`${source.table[1][0]} - ${source.table[0][1]} - ${source.table[2][2]}`, `${source.table[2][0]} - ${source.table[3][1]} - ${source.table[0][2]}`, `${source.table[3][0]} - ${source.table[1][1]} - ${source.table[1][2]}`], index);
    return buildQuestion({ ...common, text: `${intro}${dataTable}`, stem: "Tablodaki bilgiler doğru eşleştirildiğinde aşağıdakilerden hangisi oluşur?", ...made, solution: "Doğru seçenek, tablonun aynı satırındaki üç bilgiyi değiştirmeden verir." });
  }
  if (mode === 5) {
    const made = makeOptions(`"${source.boxTitle}" bölümü, ana metindeki düşünceyi somut bilgilerle desteklemektedir.`, [`"${source.boxTitle}" bölümü metnin konusunu değiştirmektedir.`, `"${source.boxTitle}" bölümü ana metinden kopuk bilgilerden oluşmaktadır.`, `"${source.boxTitle}" bölümü ana metindeki düşünceyle çelişmektedir.`], index);
    return buildQuestion({ ...common, text: `${intro}${cards}`, stem: `"${source.boxTitle}" bölümü ile ana metin arasındaki ilişki aşağıdakilerden hangisidir?`, ...made, solution: "Kutular, ana metindeki temel düşünceyi ayrıntılandırıp somutlaştırır." });
  }
  if (mode === 6) {
    const made = makeOptions(source.myth, [source.fact, source.main, source.inference], index);
    return buildQuestion({ ...common, text: `${intro}${stimulusTable(["Yanlış Anlama", "Düzeltme"], [[source.myth, source.fact]])}`, stem: "Bu metne göre aşağıdakilerden hangisi yanlış bir yorumdur?", ...made, solution: `Metin '${source.myth}' yargısını desteklemez; bunun yerine '${source.fact}' bilgisini verir.` });
  }
  const made = makeOptions("Metin, ana açıklama ile bilgi kutuları ve tabloyu birlikte kullanarak konuyu çok yönlü ele almaktadır.", ["Metin yalnız tek cümlelik bir uyarıdan oluşmaktadır.", "Metinde bilgi kutuları ana açıklamayla bağlantısızdır.", "Metin herhangi bir okuma ya da yorumlama görevi gerektirmez."], index);
  return buildQuestion({ ...common, text: `${intro}${cards}${dataTable}`, stem: "Bu metnin yapısıyla ilgili en doğru yargı hangisidir?", ...made, solution: "Metin, ana açıklama, bilgi kutuları ve tabloyu birlikte kullanan çok parçalı bir okuma metnidir." });
}

const mebGradeEightPassages = [
  {
    title: "Sabahın İlk Sesi",
    text: "Gözlerini açtığında gün henüz doğmaya başlamıştı. Ağır hareketlerle doğruldu, besmelesini çekip her zamanki gibi camı açtı. Yüzüne vuran serin hava, geceden kalma yorgunluğu bir anda dağıttı. Uzaklarda bir köpek uluyor, horozlar bütün mahalleyi uyandırmak istercesine ötüyor, ağustos böcekleri görünmeyen bir telaşla kanat çırpıyordu. Aynadaki çizgili yüzüne bakınca zamanın sessizce eksilttiği günleri düşündü.",
    topic: "sabah vaktinde yaşlı bir kişinin duygu ve gözlemleri",
    main: "İnsan, sıradan bir sabah anında bile zamanın geçişini ve hayatın değerini derinden hissedebilir.",
    detail: "Metinde görme, dokunma ve işitme duyularına seslenen ayrıntıların bulunması",
    inference: "Kahraman sabahın canlılığını fark ederken kendi yaşlanmışlığıyla da yüzleşmektedir.",
    style: "öyküleyici ve betimleyici anlatım"
  },
  {
    title: "Çizgi Romanın Çekimi",
    text: "(I) “Çizgi romanları neden seviyoruz?” sorusuna okurlar birbirinden farklı yanıtlar verebilir. (II) Kimi okur çizgilerin estetik etkisinden, kimi anlatım tekniğinin kendine özgü dinamizminden, kimi ise okuma deneyiminin sunduğu akıcılıktan söz eder; fakat tüm bu açıklamalara rağmen soruya tek ve kesin bir yanıt vermek kolay değildir. (III) Üstelik çizgi roman dünyası, çeşitliliğiyle bu soruyu daha da derinleştirir. (IV) Manga türünden deneysel çalışmalara, popüler kahraman serilerinden özgün yapımlara uzanan geniş yelpazesiyle çizgi roman, sonu olmayan bir evren niteliği taşır.",
    topic: "çizgi romanların okur üzerindeki etkisi ve çeşitliliği",
    main: "Çizgi romanların sevilme nedeni tek bir açıklamaya indirgenemeyecek kadar çeşitlidir.",
    detail: "Çizgi roman okurlarının estetik, teknik ve akıcılık gibi farklı gerekçeler öne sürmesi",
    inference: "Metinde ilk iki cümle okurun ilgisini, son iki cümle ise çizgi roman dünyasının genişliğini öne çıkarır.",
    style: "tartışmacı ve açıklayıcı anlatım"
  },
  {
    title: "Minyatürün Sabırlı Eli",
    text: "Minyatür sanatında ayrıntı, yalnız göze hoş görünen bir süs değildir; anlatının taşıyıcısıdır. Bir savaş sahnesindeki atların dizilişi, bir şenlikteki kalabalığın yüz ifadeleri ya da bir bahçedeki ağaçların yerleşimi dönemin yaşama biçimi hakkında ipuçları verir. Bu yüzden minyatüre bakmak, küçük çizgilerin arasına saklanmış tarihî ve kültürel işaretleri okumayı gerektirir.",
    topic: "minyatür sanatında ayrıntının işlevi",
    main: "Minyatürde ayrıntılar, dönemin kültürünü ve yaşam biçimini anlamaya yarayan önemli ipuçları taşır.",
    detail: "Atların dizilişi, yüz ifadeleri ve ağaçların yerleşiminin bilgi değeri taşıması",
    inference: "Metin minyatürü yalnız görsel bir sanat değil, okunması gereken kültürel bir belge olarak değerlendirir.",
    style: "açıklayıcı anlatım"
  },
  {
    title: "Araştırmacının Sessizliği",
    text: "Bir tarih araştırmacısının işi, eski belgelerin tozunu almakla bitmez. O, satır aralarında saklanan küçük bir tarih, unutulmuş bir imza ya da silik bir mühür üzerinden geçmişin eksik parçasına ulaşmaya çalışır. Bazen aradığı bilgi bir arşiv rafında değil, belgeler arasındaki sessiz ilişkide belirir. Bu nedenle araştırma sabır, dikkat ve kuşku isteyen uzun bir yolculuktur.",
    topic: "tarih araştırmacılığında sabır ve dikkat",
    main: "Tarih araştırması, belgeleri sabırla inceleyip küçük ipuçlarından anlamlı sonuçlar çıkarma işidir.",
    detail: "Araştırmacının silik mühür ve unutulmuş imza gibi ayrıntılardan yararlanması",
    inference: "Araştırmacı yalnız hazır bilgiyi bulmaz, dağınık ipuçları arasında ilişki kurar.",
    style: "açıklayıcı ve betimleyici anlatım"
  },
  {
    title: "Kısa Öykünün Kapısı",
    text: "Kısa öykü, az sözle geniş bir alan açar okura. Bazen bir bakış, yarım kalmış bir cümle ya da kapının eşiğinde duran bir çift ayakkabı bütün bir hayatı düşündürmeye yeter. Bu türde yazar, her şeyi açıklamak yerine okurun sezgisine güvenir. Bu yüzden iyi bir kısa öykü, bittiği yerde kapanmaz; okurun zihninde yeni sorularla sürer.",
    topic: "kısa öykünün okurda bıraktığı etki",
    main: "Kısa öykü, az sözle okurun hayal gücünü ve sezgisini harekete geçiren bir türdür.",
    detail: "Yazarın her şeyi açıklamak yerine okurun sezgisine güvenmesi",
    inference: "Kısa öyküde eksik bırakılan alanlar okurun metne katılmasını sağlar.",
    style: "deneme ve açıklayıcı anlatım"
  },
  {
    title: "Yağmurdan Sonra",
    text: "Yağmur dinince sokağın taşları koyu bir renge büründü. Saçaklardan düşen son damlalar, kaldırımın kenarında biriken küçük su halkalarını titretiyordu. Fırından yeni çıkmış ekmeğin kokusu, ıslak toprağın kokusuna karışmıştı. Bir çocuk, çamura basmamak için sekerek yürürken arkasında bıraktığı neşeli izlere dönüp gülümsedi.",
    topic: "yağmur sonrası sokakta oluşan canlı görünüm",
    main: "Yağmurdan sonra sıradan bir sokak, duyulara seslenen canlı bir görünüme kavuşur.",
    detail: "Koku, görüntü ve hareket bildiren ayrıntıların birlikte verilmesi",
    inference: "Metin olaydan çok atmosferi ve duyusal ayrıntıları öne çıkarmaktadır.",
    style: "betimleyici anlatım"
  },
  {
    title: "Eleştirinin Ölçüsü",
    text: "Eleştiri, bir eserin yalnız kusurlarını göstermek değildir. İyi bir eleştirmen, metnin nerede güçlendiğini, nerede eksildiğini ve hangi gelenekle konuştuğunu birlikte değerlendirir. Eseri peşin hükümlerle yargılamak kolaydır; asıl zor olan, metnin kendi dünyasına girip onu kendi ölçüleri içinde anlamaya çalışmaktır.",
    topic: "nitelikli edebiyat eleştirisinin özellikleri",
    main: "Nitelikli eleştiri, eseri hem güçlü hem eksik yönleriyle kendi bütünlüğü içinde değerlendirmelidir.",
    detail: "Eleştirmenin eserin hangi gelenekle konuştuğunu da dikkate alması",
    inference: "Eleştiri, yargı vermekten önce anlama çabası gerektirir.",
    style: "tartışmacı anlatım"
  }
];

const mebDistractorBank = {
  "Sabahın İlk Sesi": {
    topic: [
      "yalnızca sabah saatlerinde duyulan hayvan sesleri",
      "aynaya bakma anındaki fiziksel görünüm ayrıntıları",
      "çevredeki canlılığın yaşlılık duygusundan bağımsız anlatılması"
    ],
    main: [
      "Sabahın canlılığı insanın geçmişi düşünmesini bütünüyle engeller.",
      "İnsan ancak kalabalık ortamlarda hayatın değerini fark edebilir.",
      "Doğadaki sesler, yaşlı bir kişide yalnızca huzursuzluk uyandırır."
    ],
    detail: [
      "Kahramanın çocukluk anılarını ayrıntılı biçimde anlatması",
      "Mahalledeki insanların karşılıklı konuşmalarına yer verilmesi",
      "Günün akşam saatlerindeki sessizliğin betimlenmesi"
    ],
    inference: [
      "Kahraman sabah seslerinden rahatsız olup çevresinden uzaklaşmak istemektedir.",
      "Metinde sabah, yalnızca saat bilgisi vermek için kullanılmıştır.",
      "Kahraman aynaya baktığında yaşadığı zaman duygusundan tamamen kopmaktadır."
    ],
    style: ["açıklayıcı anlatım", "tartışmacı anlatım", "kanıtlayıcı anlatım"]
  },
  "Çizgi Romanın Çekimi": {
    topic: [
      "yalnızca çizgi romanlardaki çizimlerin estetik görünümü",
      "çizgi roman türlerinin adlarının sıralanması",
      "okurların çizgi romanı aynı nedenle sevmesi"
    ],
    main: [
      "Çizgi romanı değerli kılan tek unsur çizimlerin güzel olmasıdır.",
      "Okurların çizgi romanı sevme nedenleri tek bir başlıkta toplanabilir.",
      "Çizgi roman yalnızca popüler kahraman serilerinden oluşan sınırlı bir türdür."
    ],
    detail: [
      "Çizgi roman okurlarının tamamının aynı gerekçeyi öne sürmesi",
      "Manga ve deneysel çalışmaların çizgi roman dışında tutulması",
      "Çizgi romanların okuma deneyiminden bağımsız ele alınması"
    ],
    inference: [
      "Metin, çizgi romanların okur üzerindeki etkisini tek bir nedene bağlamaktadır.",
      "Çizgi roman çeşitliliği, bu türü anlamayı daha yüzeysel hâle getirir.",
      "Okurların farklı yanıtlar vermesi, çizgi romanın etkisinin sınırlı olduğunu gösterir."
    ],
    style: ["betimleyici anlatım", "öyküleyici anlatım", "söyleşmeye bağlı anlatım"]
  },
  "Minyatürün Sabırlı Eli": {
    topic: [
      "minyatürde yalnız renk ve süsleme kullanımının anlatılması",
      "savaş sahnelerindeki atların estetik görünümü",
      "minyatür sanatçılarının kişisel yaşamlarının tanıtılması"
    ],
    main: [
      "Minyatürde ayrıntılar yalnızca süsleme amacıyla kullanılır.",
      "Bir minyatürü anlamak için çizgilerin taşıdığı kültürel ipuçları önemsenmemelidir.",
      "Minyatürler döneminin yaşam biçimi hakkında bilgi vermez."
    ],
    detail: [
      "Minyatürde yalnızca sanatçının adının önemli görülmesi",
      "Savaş ve şenlik sahnelerinin hiçbir bilgi değeri taşımaması",
      "Ayrıntıların metinde süsleme dışında değerlendirilmemesi"
    ],
    inference: [
      "Metin, minyatürü yalnızca göze hoş gelen bir süsleme olarak görmektedir.",
      "Minyatürdeki tarihî işaretlere ulaşmak için ayrıntılara bakmak gerekmez.",
      "Küçük çizgiler, metne göre izleyiciyi dönem hakkında yanıltmak için kullanılır."
    ],
    style: ["öyküleyici anlatım", "tartışmacı anlatım", "betimleyici anlatım"]
  },
  "Araştırmacının Sessizliği": {
    topic: [
      "eski belgelerin yalnız fiziksel özelliklerinin tanıtılması",
      "arşiv raflarının düzenlenme biçimi",
      "araştırmacının ulaştığı tek bir hazır bilginin aktarılması"
    ],
    main: [
      "Tarih araştırması, yalnızca hazır bilgileri hızlıca kopyalamaktan ibarettir.",
      "Araştırmacı, belgeler arasındaki küçük ilişkileri dikkate almadan sonuca ulaşır.",
      "Eski belgelerdeki ayrıntılar geçmişi anlamada işe yaramaz."
    ],
    detail: [
      "Araştırmacının belgeleri incelemeden sonuca vardığı",
      "Geçmişe ait her bilginin tek bir kaynakta açıkça bulunduğu",
      "Araştırmada sabır ve kuşkunun gereksiz görüldüğü"
    ],
    inference: [
      "Araştırmacı için önemli olan, belgeleri ilişkilendirmekten çok hızlı karar vermektir.",
      "Metin, geçmişe ulaşmanın kolay ve kısa bir işlem olduğunu savunmaktadır.",
      "Belgelerdeki küçük işaretler araştırmacıyı doğru bilgiden uzaklaştırır."
    ],
    style: ["öyküleyici anlatım", "tartışmacı anlatım", "söyleşmeye bağlı anlatım"]
  },
  "Kısa Öykünün Kapısı": {
    topic: [
      "kısa öyküde yalnız olay örgüsünün sıralanması",
      "yazarın bütün anlamları açıkça vermesi",
      "okurun metindeki boşluklardan uzak tutulması"
    ],
    main: [
      "Kısa öykü, okura hiçbir yorum alanı bırakmayan bir türdür.",
      "İyi bir kısa öyküde yazar bütün anlamları ayrıntılı biçimde açıklamalıdır.",
      "Kısa öykü, bittiği anda okurun zihnindeki etkisini tamamen yitirir."
    ],
    detail: [
      "Yazarın her ayrıntıyı tek tek açıklamak zorunda olduğu",
      "Kısa öyküde okurun sezgisine hiç yer verilmediği",
      "Bir bakış ya da yarım cümlenin anlam kurmada etkisiz olduğu"
    ],
    inference: [
      "Kısa öyküde boşluk bırakmak, okurun metinden uzaklaşmasına neden olur.",
      "Metin, kısa öykünün yalnız olay aktarmaya dayandığını savunmaktadır.",
      "Okurun sezgisi, kısa öyküyü anlamada gereksiz bir unsurdur."
    ],
    style: ["öyküleyici anlatım", "betimleyici anlatım", "karşılaştırmalı anlatım"]
  },
  "Yağmurdan Sonra": {
    topic: [
      "yağmurun neden olduğu ulaşım sorunları",
      "sokaktaki insanların karşılıklı konuşmaları",
      "çocuğun uzun bir yolculuğa çıkma hazırlığı"
    ],
    main: [
      "Yağmurdan sonra sokak bütün canlılığını yitirir ve sıradanlaşır.",
      "Çevreyi anlamak için yalnız görme duyusundan yararlanmak yeterlidir.",
      "Günlük yaşamda karşılaşılan küçük görüntüler metne konu olamaz."
    ],
    detail: [
      "Sokakta uzun bir yolculuğa çıkan kalabalığın anlatılması",
      "Yağmurun hiç dinmeden devam ettiğinin belirtilmesi",
      "Çocuğun sokaktaki bütün insanlarla konuşması"
    ],
    inference: [
      "Metinde olay örgüsü, duyusal ayrıntılardan daha çok öne çıkarılmıştır.",
      "Yağmur sonrası çevre, metinde kasvetli ve hareketsiz bir yer olarak verilmiştir.",
      "Anlatıcı, sokağın kokusunu ve görüntüsünü özellikle dışarıda bırakmıştır."
    ],
    style: ["açıklayıcı anlatım", "tartışmacı anlatım", "öğretici anlatım"]
  },
  "Eleştirinin Ölçüsü": {
    topic: [
      "eleştiride yalnız kusurları sıralama gereği",
      "bir eserin türünü belirleme yöntemleri",
      "eleştirmenin kişisel beğenisini tek ölçüt sayması"
    ],
    main: [
      "Eleştirinin görevi, bir eserde yalnız kusur aramaktır.",
      "İyi eleştirmen, eseri anlamadan kesin hükümler vermelidir.",
      "Bir metnin güçlü yönlerini görmek eleştirinin niteliğini azaltır."
    ],
    detail: [
      "Eleştirmenin eserin hangi gelenekle ilişkili olduğunu göz ardı etmesi",
      "Eleştiride yalnız kişisel beğenilerin yeterli sayılması",
      "Eserin güçlü ve eksik yönlerinin birlikte değerlendirilmemesi"
    ],
    inference: [
      "Eleştiri, metni anlamadan hüküm vermeyi önceleyen bir uğraştır.",
      "Metne göre eserin kendi dünyasına girmek eleştirmeni yanıltır.",
      "Nitelikli eleştiri, yalnız olumsuz yargılar sıralayarak yapılır."
    ],
    style: ["öyküleyici anlatım", "betimleyici anlatım", "açıklayıcı anlatım"]
  }
};

const fallbackMebDistractors = {
  topic: ["metindeki ayrıntıların yalnız biçimsel yönü", "konunun tek bir örnekle sınırlanması", "anlatılan durumun sonuçtan bağımsız kalması"],
  main: ["Metindeki örnekler ana düşünceyle bağlantı kurmaz.", "Yazar yalnızca ayrıntıları sıralayıp herhangi bir sonuca ulaşmaz.", "Metinde vurgulanan düşünce kişisel izlenimlerden tamamen uzaktır."],
  detail: ["Metinde konuya bağlı hiçbir örneğe yer verilmemesi", "Anlatımda bütün ayrıntıların konu dışı bırakılması", "Yazarın düşüncesini destekleyen bilgi kullanmaması"],
  inference: ["Metin, konuya ilişkin bütün ipuçlarını dışarıda bırakmaktadır.", "Anlatılan ayrıntılar okuru ana düşünceden tamamen uzaklaştırmaktadır.", "Yazarın verdiği örnekler metnin sonucuyla çelişmektedir."],
  style: ["açıklayıcı anlatım", "betimleyici anlatım", "tartışmacı anlatım"]
};

function mebCloseOptions(passage, kind, correct, correctIndex = 1) {
  const source = mebDistractorBank[passage.title]?.[kind] || fallbackMebDistractors[kind] || [];
  const fallback = fallbackMebDistractors[kind] || [];
  const distractors = [...source, ...fallback].filter((item, itemIndex, list) => item !== correct && list.indexOf(item) === itemIndex).slice(0, 3);
  while (distractors.length < 3) distractors.push(fallback[distractors.length] || "Metinde bu yargıyı doğrudan destekleyen bir bilgi yoktur.");
  const options = [...distractors];
  options.splice(correctIndex, 0, correct);
  return options.slice(0, 4);
}

function mebLgsQuestion(common, index) {
  const passage = mebGradeEightPassages[index % mebGradeEightPassages.length];
  const mode = index % 6;
  if (mode === 0) {
    const narrative = mebGradeEightPassages[0];
    return buildQuestion({
      ...common,
      text: narrative.text,
      stem: "Bu metnin dil ve anlatımıyla ilgili aşağıdakilerden hangisi söylenemez?",
      options: ["Betimleyici ögelere yer verilmiştir.", "Anlatıcı olayın kahramanlarından biridir.", "Anlatımda duyulara seslenen ayrıntılar kullanılmıştır.", "Metnin anlatımı konuya uygun bir atmosfer oluşturmuştur."],
      answer: "B",
      solution: "Metin üçüncü kişi anlatıcıyla kurulmuştur; anlatıcı olayın kahramanlarından biri değildir."
    });
  }
  if (mode === 1) {
    return buildQuestion({
      ...common,
      text: mebGradeEightPassages[1].text,
      stem: "Bu metin iki paragrafa ayrılmak istendiğinde ikinci paragraf numaralanmış cümlelerin hangisiyle başlar?",
      options: ["I", "II", "III", "IV"],
      answer: "C",
      solution: "I ve II. cümlelerde okurların çizgi romanı sevme nedenleri tartışılır. III. cümleden itibaren çizgi roman dünyasının çeşitliliğine geçildiği için ikinci paragraf III ile başlar."
    });
  }
  if (mode === 2) {
    return buildQuestion({
      ...common,
      text: passage.text,
      stem: "Bu metnin konusu aşağıdakilerden hangisidir?",
      options: mebCloseOptions(passage, "topic", passage.topic, 1),
      answer: "B",
      solution: `Metnin bütününde ${passage.topic} üzerinde durulmaktadır.`
    });
  }
  if (mode === 3) {
    return buildQuestion({
      ...common,
      text: passage.text,
      stem: "Bu metinden hareketle aşağıdakilerden hangisine ulaşılabilir?",
      options: mebCloseOptions(passage, "inference", passage.inference, 1),
      answer: "B",
      solution: `Metindeki ayrıntılar '${passage.inference}' sonucuna ulaşmayı sağlar.`
    });
  }
  if (mode === 4) {
    return buildQuestion({
      ...common,
      text: `${passage.text}\n\n(I) Bu metinde yazar, konuyu tek bir örnekle sınırlamamıştır. (II) Düşüncesini açıklarken ayrıntılardan ve yorumdan yararlanmıştır. (III) Metnin ana düşüncesi yalnızca ilk cümlede doğrudan verilmiş, sonraki cümleler bu düşünceyle bağlantı kurmamıştır. (IV) Anlatım, okurun konuyu farklı yönleriyle değerlendirmesine imkân verir.`,
      stem: "Numaralanmış cümlelerden hangisi metnin anlatımıyla ilgili yanlış bir değerlendirmedir?",
      options: ["I", "II", "III", "IV"],
      answer: "C",
      solution: "Metindeki sonraki cümleler ana düşünceden kopuk değildir; ayrıntılar ve yorumlar ana düşünceyi destekler. Bu nedenle III. cümledeki değerlendirme yanlıştır."
    });
  }
  return buildQuestion({
    ...common,
    text: passage.text,
    stem: "Bu metinde ağır basan anlatım biçimi aşağıdakilerden hangisidir?",
    options: mebCloseOptions(passage, "style", passage.style, 1),
    answer: "B",
    solution: `Metnin kuruluşu ve kullanılan ayrıntılar ${passage.style} özelliği gösterir.`
  });
}

const gradeEightPassages = [
  {
    title: "Sessiz okuma alışkanlığı",
    text: "Bazı öğrenciler kitap okumayı yalnızca sayfa tamamlamak olarak görür. Oysa düzenli okuma, insanın dikkatini uzun süre aynı düşünce üzerinde tutmasını sağlar. Her gün kısa da olsa nitelikli bir metne zaman ayıran öğrenci, zamanla sözcükleri daha hızlı tanır, cümleler arasındaki ilişkiyi daha kolay kurar ve okuduğu metinden çıkarım yaparken daha az zorlanır.",
    topic: "düzenli okumanın anlama becerisine katkısı",
    main: "Düzenli ve nitelikli okuma, öğrencinin metni anlama gücünü geliştirir.",
    detail: "Düzenli okuyan öğrencinin cümleler arasındaki ilişkiyi daha kolay kurduğu",
    inference: "Okuma alışkanlığı yalnız hız kazandırmaz, anlam kurma becerisini de destekler."
  },
  {
    title: "Kısa video alışkanlığı",
    text: "Kısa videolar, bilgiye hızlı ulaşma hissi verebilir; ancak bu içerikler çoğu zaman düşünmeye zaman bırakmadan bir sonrakine geçer. Uzun metin okurken zorlanan bazı öğrencilerin temel sorunu, bilgiyi anlamak değil, dikkatini yeterince uzun süre koruyamamaktır. Bu nedenle paragraf çalışması, yalnızca Türkçe dersi için değil, zihni odaklama alışkanlığı için de değerlidir.",
    topic: "kısa içeriklerin dikkat süresine etkisi",
    main: "Paragraf çalışması, öğrencinin uzun süre odaklanma becerisini güçlendirir.",
    detail: "Kısa videoların düşünmeye zaman bırakmadan tüketildiği",
    inference: "Uzun metinlerde zorlanmak bazen bilgi eksikliğinden değil dikkat süresinden kaynaklanır."
  },
  {
    title: "Kütüphane köşesi",
    text: "Okulun koridorunda kullanılmayan küçük bir alan, öğrencilerin önerisiyle okuma köşesine dönüştürüldü. Başta yalnız birkaç öğrenci burada vakit geçirirken zamanla teneffüslerde sessizce kitap okuyanların sayısı arttı. Öğretmenler, bu değişimin öğrencilerin kendi ihtiyaçlarını fark edip çözüm üretmesiyle gerçekleştiğini belirtti.",
    topic: "öğrencilerin okuma alanı oluşturması",
    main: "Öğrencilerin sahip çıktığı düzenlemeler okul yaşamını olumlu değiştirebilir.",
    detail: "Kullanılmayan bir alanın okuma köşesine dönüştürüldüğü",
    inference: "Öğrenciler yalnız sorun fark etmemiş, çözümün uygulanmasına da katkı sağlamıştır."
  },
  {
    title: "Yanlış defteri",
    text: "Bir öğrenci, çözemediği soruları silip geçmek yerine küçük bir deftere kaydetmeye başladı. Deftere yalnız doğru cevabı değil, kendisini yanıltan seçeneği ve bu seçeneği neden düşündüğünü de yazdı. Birkaç hafta sonra aynı tür sorularda daha az hata yaptığını fark etti çünkü artık yanlışını ezberlemiyor, yanlış düşünme yolunu tanıyordu.",
    topic: "yanlışları analiz ederek öğrenme",
    main: "Yanlışların nedenini incelemek, aynı hatayı tekrar etme olasılığını azaltır.",
    detail: "Öğrencinin kendisini yanıltan seçeneği de deftere yazdığı",
    inference: "Öğrenci yalnız cevabı değil, hataya götüren düşünce biçimini de değerlendirmiştir."
  },
  {
    title: "Soru kökünü okuma",
    text: "Paragraf sorularında bazı öğrenciler önce metni hızlıca okuyup hemen seçeneklere geçer. Bu yöntem kısa metinlerde işe yarıyor gibi görünse de uzun metinlerde öğrencinin ne aradığını unutmasına yol açabilir. Soru kökünü önce okumak, metindeki önemli bilgileri seçmeyi kolaylaştırır; çünkü öğrenci zihninde bir hedefle okuma yapar.",
    topic: "soru kökünü önce okumanın yararı",
    main: "Soru kökünü önce okumak, uzun metinlerde hedefli okuma yapmayı sağlar.",
    detail: "Öğrencinin zihninde bir hedefle okuma yaptığı",
    inference: "Uzun metinlerde başarı, yalnız hızlı okumaya değil ne aradığını bilmeye de bağlıdır."
  },
  {
    title: "Görsel Anlatımın Gücü",
    text: "Genç çizerlerin çalışmalarında yalnız çizimlerin güzelliği değil, çizgilerin anlatıya nasıl hizmet ettiği de önemlidir. Bir karakterin yüzündeki küçük bir gölge korkuyu, arka planda eğilen bir ağaç ise yaklaşan fırtınayı sezdirebilir. Böylece görsel anlatım, metindeki duyguyu tamamlayan güçlü bir dile dönüşür.",
    topic: "görsel anlatımın metindeki duyguyu desteklemesi",
    main: "Görsel anlatım, yalnız süsleme değil metnin duygu ve anlam dünyasını güçlendiren bir dildir.",
    detail: "Küçük bir gölgenin korkuyu, eğilen ağacın yaklaşan fırtınayı sezdirebileceği",
    inference: "Görsel unsurlar, metindeki anlamı tamamlayan yorumlanabilir ayrıntılar olarak kullanılmıştır."
  },
  {
    title: "Kaynak güvenilirliği",
    text: "İnternette karşılaşılan her bilgi doğru kabul edildiğinde araştırma yapmak kolaylaşmaz, aksine daha riskli hâle gelir. Güvenilir bir bilgi için kaynağın kim tarafından hazırlandığı, ne zaman yayımlandığı ve başka kaynaklarla desteklenip desteklenmediği kontrol edilmelidir. Bilgiye hızlı ulaşmak, onu sorgulamadan kullanmak anlamına gelmez.",
    topic: "bilginin güvenilirliğini sorgulama",
    main: "Araştırmada bilgiye ulaşmak kadar bilginin güvenilirliğini kontrol etmek de önemlidir.",
    detail: "Bilginin başka kaynaklarla desteklenip desteklenmediğinin kontrol edilmesi",
    inference: "Hızlı ulaşılan bilgi, doğruluğu incelenmeden kullanılmamalıdır."
  },
  {
    title: "Okuma grubu",
    text: "Bir sınıfta öğrenciler aynı kitabı okuyup haftada bir kısa değerlendirme yapmaya başladı. Her öğrenci kitaptaki farklı bir ayrıntıya dikkat çektiği için tartışmalar tek bir doğru cevap arayışına dönüşmedi. Zamanla öğrenciler, bir metnin farklı bakış açılarıyla daha zengin anlaşılabileceğini gördü.",
    topic: "metni farklı bakış açılarıyla değerlendirme",
    main: "Ortak okuma çalışmaları, metni farklı yönleriyle anlamayı sağlar.",
    detail: "Her öğrencinin kitaptaki farklı bir ayrıntıya dikkat çektiği",
    inference: "Aynı metin, farklı okurların katkısıyla daha kapsamlı değerlendirilebilir."
  },
  {
    title: "Paragrafta hız",
    text: "Sınavda hızlı olmak elbette önemlidir; fakat hız, anlamı gözden kaçırmaya başladığında yarar yerine zarar getirir. Bir öğrenci metni kısa sürede bitirip soruya yanlış cevap veriyorsa asıl sorun sürenin uzunluğu değil, okuma sırasında kurduğu bağın zayıflığıdır. Etkili okuma, hız ile anlam arasındaki dengeyi korumayı gerektirir.",
    topic: "hız ve anlama dengesi",
    main: "Paragraf çözümünde hız, anlamı koruduğu sürece değerlidir.",
    detail: "Hızlı okuyup yanlış cevap veren öğrencide bağ kurma sorunu olabileceği",
    inference: "Süreyi azaltmak tek başına paragraf başarısını artırmaz."
  },
  {
    title: "Anahtar sözcükler",
    text: "Bir paragrafta bazı sözcükler, metnin hangi düşünce etrafında kurulduğunu gösterir. Bu sözcükler her zaman en çok tekrar eden kelimeler olmak zorunda değildir; bazen bir sonuç cümlesinde ya da örneğin sonunda belirir. Dikkatli okur, bu ipuçlarını fark ederek metnin ana yönünü daha kolay belirler.",
    topic: "anahtar sözcüklerin metni anlamadaki işlevi",
    main: "Anahtar sözcükler, paragrafın temel düşüncesini belirlemede okura yol gösterir.",
    detail: "Anahtar sözcüklerin bazen sonuç cümlesinde belirdiği",
    inference: "Metnin ana yönü yalnız tekrar sayısına bakılarak bulunamaz."
  },
  {
    title: "Sosyal sorumluluk duyurusu",
    text: "Okulda başlatılan kitap bağışı kampanyası yalnız rafları doldurmak için yapılmadı. Öğrenciler, okudukları kitapların başka çocukların da dünyasını genişletebileceğini düşündü. Kampanya sonunda toplanan kitaplar köy okuluna gönderildiğinde, öğrenciler paylaşmanın somut bir karşılık bulduğunu gördü.",
    topic: "kitap paylaşımı yoluyla sosyal sorumluluk",
    main: "Paylaşma bilinci, küçük okul etkinlikleriyle somut bir değere dönüşebilir.",
    detail: "Toplanan kitapların köy okuluna gönderildiği",
    inference: "Kampanya, yalnız eşya toplama değil başkalarının öğrenmesine katkı sağlama amacı taşımıştır."
  },
  {
    title: "Metin karşılaştırma",
    text: "İki metin aynı konudan söz edebilir ancak okura aynı mesajı vermeyebilir. Örneğin biri doğayı korumak için bireysel sorumluluğu vurgularken diğeri kurumların alması gereken önlemleri öne çıkarabilir. Bu nedenle karşılaştırma sorularında yalnız konuya değil, yazarın konuya hangi açıdan yaklaştığına da bakmak gerekir.",
    topic: "aynı konudaki metinlerin farklı bakış açıları",
    main: "Metin karşılaştırmada konu kadar yazarın bakış açısı da dikkate alınmalıdır.",
    detail: "Bir metnin bireysel sorumluluğu, diğerinin kurumsal önlemleri öne çıkarabileceği",
    inference: "Aynı konuyu işleyen metinler farklı ana düşüncelere sahip olabilir."
  },
  {
    title: "Uzun paragraf",
    text: "Uzun paragraflar çoğu öğrenciyi ilk bakışta zorlar; fakat bu metinler genellikle küçük düşünce basamaklarından oluşur. Her cümle bir öncekinin üzerine yeni bir ayrıntı ekler ya da önceki düşünceyi açıklar. Öğrenci bu basamakları fark ettiğinde paragraf, tek parça bir yük olmaktan çıkar ve izlenebilir bir düşünce zincirine dönüşür.",
    topic: "uzun paragrafta düşünce basamaklarını izleme",
    main: "Uzun paragraflar, düşünce basamakları izlenerek daha kolay anlaşılır.",
    detail: "Her cümlenin önceki düşünceye yeni ayrıntı eklediği ya da onu açıkladığı",
    inference: "Uzun metin korkusu, metnin yapısı fark edildiğinde azalabilir."
  },
  {
    title: "Çeldirici seçenekler",
    text: "Bazı seçenekler metindeki bir kelimeyi aynen kullandığı için doğruymuş gibi görünür. Oysa doğru seçenek, yalnız aynı kelimeyi taşıyan değil, metnin bütünündeki yargıyla uyuşan seçenektir. Bu nedenle öğrenci, seçenekleri değerlendirirken kelime benzerliğine değil anlam uygunluğuna bakmalıdır.",
    topic: "çeldirici seçenekleri anlamca eleme",
    main: "Doğru seçenek, metindeki kelimeye değil metnin bütün anlamına uygun olmalıdır.",
    detail: "Bazı seçeneklerin metindeki kelimeyi aynen kullandığı için doğru göründüğü",
    inference: "Kelime benzerliği, bir seçeneğin doğru olduğunu tek başına kanıtlamaz."
  },
  {
    title: "Not alarak okuma",
    text: "Bir metni okurken kenara küçük işaretler koymak, öğrencinin dikkatini canlı tutar. Ancak her cümlenin altını çizmek bu yöntemi etkisizleştirir; çünkü önemli olanla ayrıntı birbirine karışır. İyi bir okur, yalnız metnin yönünü değiştiren, örnek veren ya da sonuç bildiren bölümleri işaretler.",
    topic: "seçici not alarak okuma",
    main: "Not alarak okuma, yalnız önemli noktalar seçildiğinde işe yarar.",
    detail: "Her cümlenin altını çizmenin yöntemi etkisizleştirdiği",
    inference: "İşaretleme yaparken amaç çok çizmek değil doğru yeri seçmektir."
  },
  {
    title: "Deneme sonrası konuşma",
    text: "Deneme sınavından sonra öğrenciler yalnız kaç doğru yaptıklarını söylemekle yetinmedi. Hangi soruda acele ettiklerini, hangi metinde dikkatlerinin dağıldığını ve hangi seçeneği neden elediklerini tartıştılar. Bu konuşma, sonucun arkasındaki çözüm sürecini görmelerini sağladı.",
    topic: "deneme sonrası çözüm sürecini değerlendirme",
    main: "Deneme değerlendirmesi, yalnız doğru sayısını değil çözüm sürecini de incelemelidir.",
    detail: "Öğrencilerin hangi seçeneği neden elediklerini tartıştığı",
    inference: "Sınavdan sonra yapılan nitelikli değerlendirme, sonraki çalışmalar için yol gösterir."
  },
  {
    title: "Okuma ortamı",
    text: "Bir öğrenci, aynı metni kalabalık bir odada okuduğunda sık sık başa döndüğünü fark etti. Daha sessiz bir ortamda ise cümleleri daha kolay takip etti. Bu durum, okuduğunu anlamanın yalnız metnin zorluğuyla değil, okuma ortamının dikkat üzerindeki etkisiyle de ilgili olduğunu gösterir.",
    topic: "okuma ortamının anlama üzerindeki etkisi",
    main: "Okuma ortamı, öğrencinin metni takip etme ve anlama becerisini etkileyebilir.",
    detail: "Öğrencinin kalabalık odada sık sık başa döndüğü",
    inference: "Anlama güçlüğünün nedeni her zaman metnin zor olması değildir."
  },
  {
    title: "Soru türünü tanıma",
    text: "Bir paragraf sorusunda öğrencinin önce ne istendiğini belirlemesi gerekir. Konu sorusu metnin ne hakkında olduğunu, ana düşünce sorusu ise yazarın vermek istediği temel mesajı arar. Bu iki soru türü karıştırıldığında öğrenci doğru metni okusa bile yanlış seçeneğe yönelebilir.",
    topic: "konu ve ana düşünce sorularını ayırt etme",
    main: "Soru türünü doğru tanımak, paragraf çözümünde doğru cevaba ulaşmayı kolaylaştırır.",
    detail: "Konu sorusunun ne hakkında olduğunu, ana düşünce sorusunun temel mesajı aradığı",
    inference: "Metni anlamak kadar soru kökünün istediğini doğru belirlemek de önemlidir."
  },
  {
    title: "Okuma hedefi",
    text: "Bir metni her okuyuşumuzda aynı amaçla okumayız. Bazen bilgi edinmek, bazen yazarın tutumunu anlamak, bazen de iki düşünce arasındaki ilişkiyi bulmak isteriz. Okuma amacı değiştiğinde metinde dikkat edeceğimiz yerler de değişir. Bu yüzden başarılı okur, metne başlamadan önce ne aradığını bilir.",
    topic: "okuma amacının dikkati yönlendirmesi",
    main: "Okuma amacı, metinde hangi bilgilere dikkat edileceğini belirler.",
    detail: "Okuma amacı değiştiğinde dikkat edilecek yerlerin de değiştiği",
    inference: "Aynı metin, farklı amaçlarla okunduğunda farklı yönleriyle değerlendirilebilir."
  },
  {
    title: "Metindeki kanıt",
    text: "Bir seçenek kulağa mantıklı gelebilir; fakat paragraf sorularında önemli olan seçeneğin metinle desteklenmesidir. Öğrenci, cevabı işaretlemeden önce metinde bu yargıyı karşılayan cümleyi ya da ipucunu bulmalıdır. Metnin kanıtlamadığı bir düşünce, genel olarak doğru olsa bile o sorunun cevabı olmayabilir.",
    topic: "seçeneği metindeki kanıtla doğrulama",
    main: "Paragraf sorularında doğru seçenek, metindeki kanıtla desteklenmelidir.",
    detail: "Metnin kanıtlamadığı bir düşüncenin genel olarak doğru olsa bile cevap olmayabileceği",
    inference: "Cevap verirken kişisel bilgi değil metnin sunduğu kanıt esas alınmalıdır."
  },
  {
    title: "Dikkat dağıtan ayrıntı",
    text: "Uzun metinlerde bazı ayrıntılar, öğrencinin ilgisini çeker ancak sorunun cevabıyla doğrudan ilgili değildir. Bu ayrıntılar metni zenginleştirir fakat ana düşüncenin yerine geçmez. Öğrenci, soru kökünün istediği bilgiye döndüğünde hangi ayrıntının önemli, hangisinin yardımcı olduğunu daha kolay ayırt eder.",
    topic: "ana düşünce ile ayrıntıyı ayırt etme",
    main: "Paragraf çözümünde ayrıntılar, soru kökünün istediği bilgiye göre değerlendirilmelidir.",
    detail: "Bazı ayrıntıların metni zenginleştirdiği fakat ana düşüncenin yerine geçmediği",
    inference: "Her ilgi çekici ayrıntı sorunun cevabını belirlemez."
  },
  {
    title: "Eleştirel okuma",
    text: "Eleştirel okumak, metne sürekli karşı çıkmak anlamına gelmez. Okur, yazarın hangi düşünceyi savunduğunu, bu düşünceyi hangi örneklerle desteklediğini ve nerede yorum yaptığını fark etmeye çalışır. Böyle okuyan biri, metindeki bilgiyi ezberlemek yerine düşüncenin nasıl kurulduğunu görür.",
    topic: "eleştirel okumanın metni çözümlemedeki rolü",
    main: "Eleştirel okuma, metindeki düşüncenin nasıl kurulduğunu anlamayı sağlar.",
    detail: "Okurun yazarın düşünceyi hangi örneklerle desteklediğini fark etmeye çalıştığı",
    inference: "Eleştirel okuma, metni reddetmek değil metnin yapısını sorgulayarak anlamaktır."
  },
  {
    title: "Paragraf tekrarı",
    text: "Aynı tür sorudan arka arkaya çözmek kısa sürede pratik kazandırabilir; fakat öğrenci hep aynı kalıpla karşılaşırsa gerçek sınavdaki farklı metinlerde zorlanabilir. Bu nedenle çalışma planında konu tekrarı yapılırken metin türleri ve soru biçimleri değiştirilmelidir. Öğrenme, aynı beceriyi farklı durumlarda kullanabildiğimizde güçlenir.",
    topic: "farklı metinlerle paragraf becerisini geliştirme",
    main: "Paragraf çalışmasında aynı beceri farklı metin ve soru biçimleriyle pekiştirilmelidir.",
    detail: "Konu tekrarı yapılırken metin türleri ve soru biçimlerinin değiştirilmesi gerektiği",
    inference: "Sürekli aynı kalıptaki sorular, öğrenciyi gerçek sınav çeşitliliğine yeterince hazırlamayabilir."
  },
  {
    title: "Sonuç cümlesi",
    text: "Birçok paragrafta yazar asıl düşüncesini doğrudan ilk cümlede vermez. Önce örnekler sunar, sonra bu örneklerden ulaşılacak sonucu belirtir. Bu nedenle özellikle ana düşünce sorularında paragrafın son bölümü dikkatle okunmalıdır. Sonuç cümlesi, metnin dağınık gibi görünen ayrıntılarını bir araya getirebilir.",
    topic: "sonuç cümlesinin ana düşünceyi belirlemedeki rolü",
    main: "Sonuç cümlesi, paragrafın ana düşüncesini bulmada güçlü bir ipucu olabilir.",
    detail: "Yazarın önce örnekler sunup sonra sonucu belirtebildiği",
    inference: "Ana düşünce her zaman ilk cümlede açıkça verilmez."
  },
  {
    title: "Okuma sabrı",
    text: "Bazı öğrenciler uzun metin görünce soruyu daha okumadan zorlanacağını düşünür. Bu düşünce, metinden önce öğrencinin kendisini yenmesine neden olur. Oysa metin parça parça takip edildiğinde çoğu zaman beklenenden daha anlaşılırdır. Okuma sabrı, uzun paragrafın göz korkutan görüntüsünü yönetmeyi sağlar.",
    topic: "uzun metin karşısında okuma sabrı",
    main: "Uzun metinlerde sabırlı ve parça parça okuma, anlamayı kolaylaştırır.",
    detail: "Öğrencinin uzun metni görür görmez zorlanacağını düşünmesi",
    inference: "Metnin uzunluğu, onun mutlaka anlaşılamaz olduğu anlamına gelmez."
  },
  {
    title: "Çözüm sırası",
    text: "Bazı öğrenciler paragraf sorularını sırayla çözmek zorunda olduğunu düşünür. Ancak sınavda çok zaman alan bir soruya takılıp kalmak, diğer sorular için ayrılan süreyi azaltabilir. Zorlanılan soruyu işaretleyip sonra dönmek, hem zamanı korur hem de zihnin aynı soruya sıkışmasını önler.",
    topic: "sınavda çözüm sırasını yönetme",
    main: "Zorlanılan soruya gerektiğinde sonra dönmek, zamanı daha verimli kullanmayı sağlar.",
    detail: "Çok zaman alan soruya takılıp kalmanın diğer soruların süresini azaltabileceği",
    inference: "Her soruyu ilk karşılaşıldığı anda bitirmeye çalışmak doğru bir zaman yönetimi olmayabilir."
  }
];

function gradeEightSkillQuestion(topic, index, difficulty, number) {
  const passage = mebGradeEightPassages[index % mebGradeEightPassages.length];
  const passageCycle = Math.floor(index / gradeEightPassages.length);
  const passageAdditions = [
    "",
    " Öğretmen bu metni değerlendirirken öğrencilerden yalnız sonucu değil, düşüncenin hangi gerekçelerle kurulduğunu da göstermelerini istemiştir.",
    " Çalışmanın ikinci aşamasında öğrenciler, metindeki ana yargıyı destekleyen cümleleri ayrı renkle işaretlemiştir."
  ];
  const passageText = `${passage.text}${passageAdditions[passageCycle % passageAdditions.length]}`;
  const letters = ["A", "B", "C", "D"];
  const common = {
    grade: 8,
    topic,
    difficulty,
    outcome: `${topic} kazanımına uygun özgün soru ${number}.`,
    text: passageText,
    strategy: "Önce soru kökünün istediğini belirle, sonra metindeki kanıtla seçenekleri karşılaştır.",
    hint: "Metnin yalnız ilk cümlesine değil, sonuç bölümüne de bak."
  };
  if (topic === "Zaman yönetimi") {
    const timeText = "Deneme sonunda öğrenciler yalnız doğru sayılarını değil, hangi soruda ne kadar oyalandıklarını da inceledi. Bazı öğrencilerin uzun paragraflarda metni birkaç kez okuduğu, bazılarının ise soru kökünü tam anlamadan seçeneklere geçtiği görüldü. Öğretmen, sürenin iyi kullanılmasının metni aceleyle geçmek anlamına gelmediğini; soru kökünü, metindeki kanıtı ve kalan süreyi birlikte düşünmek gerektiğini belirtti.";
    return buildQuestion({
      ...common,
      text: timeText,
      stem: "Bu metne göre paragraf çözümünde zaman yönetimi için en uygun davranış hangisidir?",
      options: [
        "Uzun paragraf gördüğünde metni okumadan seçeneklerden birini işaretlemek",
        "Soru kökünü, metindeki kanıtı ve kalan süreyi birlikte kontrol etmek",
        "Doğru sayısına bakıp hangi soruda zaman kaybedildiğini hiç incelememek",
        "Acele etmek için metindeki ayrıntıları birbirinden ayırmadan okumak"
      ],
      answer: "B",
      solution: "Metin, zamanı yönetmenin acele etmek değil; soru kökü, kanıt ve süreyi birlikte değerlendirmek olduğunu vurgular."
    });
  }
  const byTopic = {
    "Konu bulma": {
      stem: "Bu metnin konusu aşağıdakilerden hangisidir?",
      options: mebCloseOptions(passage, "topic", passage.topic, 0),
      answer: "A",
      solution: `Metin ${passage.topic} çevresinde kurulmuştur; diğer seçenekler metnin merkezinde değildir.`
    },
    "Ana düşünce": {
      stem: "Bu metnin ana düşüncesi aşağıdakilerden hangisidir?",
      options: mebCloseOptions(passage, "main", passage.main, 1),
      answer: "B",
      solution: `Metnin örnekleri ve sonuç bölümü '${passage.main}' düşüncesini destekler.`
    },
    "Yardımcı düşünce": {
      stem: "Bu metinde aşağıdakilerden hangisine değinilmiştir?",
      options: mebCloseOptions(passage, "detail", passage.detail, 1),
      answer: "B",
      solution: `Metinde '${passage.detail}' bilgisine açıkça yer verilmiştir.`
    },
    "Çıkarım yapma": {
      stem: "Bu metinden aşağıdakilerden hangisi çıkarılabilir?",
      options: mebCloseOptions(passage, "inference", passage.inference, 1),
      answer: "B",
      solution: `Metindeki açıklamalar '${passage.inference}' çıkarımını destekler.`
    },
    "Zaman yönetimi": {
      stem: "Bu metne göre paragraf çözümünde zaman yönetimi için en uygun davranış hangisidir?",
      options: ["Zorlanılan soruda süreyi tamamen unutmak", "Soru kökünü, metindeki kanıtı ve ayrılan süreyi birlikte kontrol etmek", "Her soruyu yalnız ilk cümleye göre cevaplamak", "Uzun metinleri okumadan boş bırakmak"],
      answer: "B",
      solution: "Metnin vurgusu, çözüm sürecini bilinçli yönetmek ve süreyi anlamdan koparmamaktır."
    }
  };
  if (topic === "Metinler arası karşılaştırma") {
    const other = mebGradeEightPassages[(index + 3) % mebGradeEightPassages.length];
    const otherText = `${other.text}${passageAdditions[passageCycle % passageAdditions.length]}`;
    return buildQuestion({
      ...common,
      text: `I. metin: ${passageText}\n\nII. metin: ${otherText}`,
      stem: "Bu iki metin için aşağıdakilerden hangisi söylenebilir?",
      options: [
        `I. metin ${passage.topic} üzerinde dururken II. metin ${other.topic} üzerinde durur.`,
        `İki metin de aynı biçimde yalnız ${passage.topic} konusunu işler.`,
        `I. metinde ${other.topic}, II. metinde ${passage.topic} öne çıkar.`,
        "İki metinde de konu, kişiler arasındaki karşılıklı konuşmalarla ilerler."
      ],
      answer: "A",
      solution: `I. metnin odağı ${passage.topic}, II. metnin odağı ise ${other.topic} konusudur.`
    });
  }
  if (topic === "LGS tarzı yeni nesil paragraf soruları") {
    return mebLgsQuestion(common, index);
  }
  if (topic === "Tablo-grafik-görsel okuma") {
    const dataSets = [
      { title: "Okuma çalışması", rows: [["Ana fikir", "%72", "68 sn"], ["Yardımcı fikir", "%61", "82 sn"], ["Görsel okuma", "%80", "65 sn"], ["Sözel mantık", "%49", "118 sn"]], answer: "Sözel mantık", reason: "doğru oranı en düşük, süre en yüksektir" },
      { title: "Kütüphane kullanımı", rows: [["Roman", "42", "8 gün"], ["Bilgi kitabı", "31", "10 gün"], ["Şiir", "16", "5 gün"], ["Deneme", "24", "7 gün"]], answer: "Roman", reason: "ödünç alma sayısı en fazladır" },
      { title: "Çalışma planı", rows: [["Konu tekrarı", "35 dk", "Orta"], ["Paragraf", "50 dk", "Yüksek"], ["Sözel mantık", "25 dk", "Düşük"], ["Kontrol", "15 dk", "Orta"]], answer: "Paragraf", reason: "en uzun süre ve yüksek öncelik bu alandadır" },
      { title: "Deneme değerlendirmesi", rows: [["Boş bırakma", "%6", "Az"], ["Acele hatası", "%18", "Orta"], ["Yanlış çıkarım", "%27", "Yüksek"], ["Kodlama hatası", "%4", "Az"]], answer: "Yanlış çıkarım", reason: "oranı ve risk düzeyi en yüksek başlıktır" }
    ];
    const data = dataSets[index % dataSets.length];
    return buildQuestion({
      ...common,
      text: `<p>${passage.title} çalışmasıyla bağlantılı olarak "${data.title}" için hazırlanan tablo aşağıda verilmiştir.</p>${stimulusTable(["Alan", "Değer", "Not"], data.rows)}<p>Tablo yalnız görünen değerlerden hareketle yorumlanmalıdır; tabloda olmayan bilgiler doğru kabul edilmemelidir.</p>`,
      stem: "Bu tabloya göre aşağıdakilerden hangisi kesin olarak söylenebilir?",
      options: [
        `${data.answer} öne çıkan alandır çünkü ${data.reason}.`,
        "Bütün alanların değerleri birbirine eşittir.",
        "Tablodaki en düşük değer her zaman en başarılı alanı gösterir.",
        "Tabloda öğrencilerin adları verildiği için kişisel sıralama yapılabilir."
      ],
      answer: "A",
      solution: `Tablodaki değerler karşılaştırıldığında ${data.answer} için verilen bilgi doğrudan desteklenir.`
    });
  }
  if (topic === "Sözel mantık destekli paragraf soruları") {
    const sets = [
      { names: ["Arda", "Beril", "Cem", "Duru"], fixed: "Duru son sıradadır.", relation: "Arda, Cem'den hemen önce sunum yapar.", extra: "Beril ilk sırada değildir.", answer: "Beril - Arda - Cem - Duru" },
      { names: ["Ela", "Fırat", "Gizem", "Hakan"], fixed: "Gizem ikinci sıradadır.", relation: "Ela, Hakan'dan önce; Fırat'tan sonra gelir.", extra: "Hakan son sıradadır.", answer: "Fırat - Gizem - Ela - Hakan" },
      { names: ["İrem", "Kaan", "Lale", "Mert"], fixed: "Kaan ilk sırada değildir.", relation: "Lale ile Mert arasında bir kişi vardır.", extra: "İrem ilk sıradadır ve Mert son sırada değildir.", answer: "İrem - Mert - Kaan - Lale" },
      { names: ["Nehir", "Ozan", "Pelin", "Rüzgar"], fixed: "Pelin üçüncü sıradadır.", relation: "Ozan, Nehir'den hemen sonra gelir.", extra: "Rüzgar ilk sırada değildir.", answer: "Nehir - Ozan - Pelin - Rüzgar" }
    ];
    const set = sets[index % sets.length];
    return buildQuestion({
      ...common,
      text: `<p>${passage.title} etkinliğinin sonunda ${set.names.join(", ")} adlı dört öğrenci sırayla görev alacaktır.</p>${stimulusList([set.fixed, set.relation, set.extra])}<p>Bu bilgiler birlikte kullanıldığında yalnız bir sıralama tüm koşulları sağlar.</p>`,
      stem: "Bu bilgilere göre doğru sıralama aşağıdakilerden hangisidir?",
      options: [set.answer, set.names.join(" - "), [...set.names].reverse().join(" - "), `${set.names[1]} - ${set.names[0]} - ${set.names[3]} - ${set.names[2]}`],
      answer: "A",
      solution: "Kesin yer bilgisi ve hemen önce/sonra koşulu birlikte yerleştirildiğinde yalnız A seçeneği tüm koşulları sağlar."
    });
  }
  const selected = byTopic[topic];
  if (!selected) return null;
  const answerIndex = letters.indexOf(selected.answer);
  selected.options = selected.options.map((option, optionIndex) => optionIndex === answerIndex ? option : option);
  return buildQuestion({ ...common, ...selected });
}

function variedNewGenerationQuestion(grade, topic, index, difficulty, number) {
  const isVisual = topic === "Tablo-grafik-görsel okuma";
  const isLogic = topic === "Sözel mantık destekli paragraf soruları";
  if (!isVisual && !isLogic) return null;
  const common = {
    grade,
    topic,
    difficulty,
    outcome: `${topic} kazanımına uygun özgün soru ${number}.`,
    strategy: "Verilen bilgileri tek tek işaretle, sonra seçenekleri yalnız bu bilgilere göre değerlendir.",
    hint: "Tabloda ya da koşullarda doğrudan verilen bilgiyi ara."
  };
  if (isVisual) {
    const contexts = [
      { title: "Kitap kulübü", item: "tür", rows: ["Hikâye", "Masal", "Şiir", "Bilgi kitabı"], unit: "kitap", note: "en çok seçilen tür" },
      { title: "Bahçe çalışması", item: "fidan", rows: ["Elma", "Erik", "Çam", "Ihlamur"], unit: "fidan", note: "en fazla dikilen fidan" },
      { title: "Geri dönüşüm", item: "atık", rows: ["Kâğıt", "Plastik", "Cam", "Metal"], unit: "kg", note: "en çok toplanan atık" },
      { title: "Okuma saati", item: "gün", rows: ["Pazartesi", "Salı", "Çarşamba", "Perşembe"], unit: "dk", note: "en uzun okuma süresi" },
      { title: "Kulüp tercihi", item: "kulüp", rows: ["Satranç", "Drama", "Resim", "Robotik"], unit: "öğrenci", note: "en çok tercih edilen kulüp" },
      { title: "Sağlıklı yaşam", item: "etkinlik", rows: ["Yürüyüş", "Bisiklet", "Yüzme", "Jimnastik"], unit: "kişi", note: "en fazla katılım olan etkinlik" }
    ];
    const context = contexts[(index + grade) % contexts.length];
    const cycle = Math.floor(index / contexts.length);
    const base = 10 + ((index * 7 + grade) % 18) + (cycle * 2);
    const values = [base + 9, base - 2, base + 3, base + 6];
    const rows = context.rows.map((label, rowIndex) => [label, `${values[rowIndex]} ${context.unit}`, rowIndex === 0 ? "En yüksek" : rowIndex === 1 ? "En düşük" : "Orta"]);
    return buildQuestion({
      ...common,
      text: `<p>${grade}. sınıf öğrencileri "${context.title}" konusunda bir tablo hazırlamıştır. Tablo yalnız verilen sayılara göre yorumlanacaktır.</p>${stimulusTable([context.item, "Sayı", "Not"], rows)}<p>Öğrencilerden, tabloda açıkça verilen bilgiden hareketle kesin bir sonuca ulaşmaları istenmiştir.</p>`,
      stem: "Bu tabloya göre aşağıdakilerden hangisi kesin olarak söylenebilir?",
      options: [
        `${context.rows[0]}, ${context.note} olarak görünmektedir.`,
        `${context.rows[1]}, ${context.rows[0]}'dan daha fazladır.`,
        "Tablodaki bütün değerler birbirine eşittir.",
        "Tabloda öğrencilerin adları verildiği için kişisel başarı sıralaması yapılabilir."
      ],
      answer: "A",
      solution: `Tabloda ${context.rows[0]} için verilen değer en yüksektir; bu bilgi doğrudan tablodan çıkarılır.`,
      wrong: "Yanlış seçenekler tablodaki sayılarla desteklenmez ya da tabloda verilmeyen bir bilgiye dayanır."
    });
  }
  const nameSets = [
    ["Ece", "Mert", "Deniz", "Zeynep"],
    ["Ada", "Bora", "Cem", "Duru"],
    ["Ela", "Fırat", "Gizem", "Hakan"],
    ["İrem", "Kaan", "Lale", "Mert"],
    ["Nehir", "Ozan", "Pelin", "Rüzgar"],
    ["Selin", "Tunç", "Umut", "Yaren"],
    ["Ayça", "Berk", "Ceren", "Doruk"],
    ["Elif", "Kerem", "Mina", "Doruk"]
  ];
  const activities = ["kitap tanıtımı", "proje sunumu", "şiir okuma", "deney anlatımı", "pano görevi", "kulüp konuşması"];
  const names = nameSets[index % nameSets.length];
  const activity = activities[Math.floor(index / nameSets.length) % activities.length];
  return buildQuestion({
    ...common,
    text: `<p>${names.join(", ")} adlı dört öğrenci ${activity} için sıraya girecektir.</p>${stimulusList([`${names[0]}, ${names[2]}'den hemen önce görev alacaktır.`, `${names[1]} ilk sırada değildir.`, `${names[3]} son sıradadır.`, `${names[1]} ikinci sıradadır.`])}<p>Bu koşulların tamamını sağlayan sıralama seçilecektir.</p>`,
    stem: "Bu bilgilere göre doğru sıralama aşağıdakilerden hangisidir?",
    options: [`${names[1]} - ${names[0]} - ${names[2]} - ${names[3]}`, `${names[0]} - ${names[1]} - ${names[2]} - ${names[3]}`, `${names[1]} - ${names[2]} - ${names[0]} - ${names[3]}`, `${names[2]} - ${names[1]} - ${names[0]} - ${names[3]}`],
    answer: "A",
    solution: `${names[1]} ikinci sıradadır. ${names[0]}, ${names[2]}'den hemen önce olmalı ve ${names[3]} son sırada yer almalıdır. Bu koşulları A seçeneği sağlar.`,
    wrong: "Diğer seçenekler ikinci sıra, hemen önce ya da son sıra koşullarından en az birini bozar."
  });
}

function newGenerationQuestion(grade, topic, index, seed, note, difficulty, number) {
  const isVisual = topic === "Tablo-grafik-görsel okuma";
  const isLogic = topic === "Sözel mantık destekli paragraf soruları";
  const isLgs = topic === "LGS tarzı yeni nesil paragraf soruları";
  if (!isVisual && !isLogic && !isLgs) return null;

  if (isVisual && grade === 5) {
    const variants = [
      {
        text: `<p>5/A sınıfı, okul kitaplığındaki kitapları türlerine göre saymıştır. Öğrenciler, tabloyu inceleyip hangi türde kaç kitap olduğunu not etmişlerdir.</p>${stimulusTable(["Tür", "Kitap sayısı", "Raf etiketi"], [["Hikâye", "28", "Mavi"], ["Masal", "19", "Sarı"], ["Şiir", "12", "Yeşil"], ["Bilgi kitabı", "24", "Turuncu"]])}<p>Öğretmen, en çok kitabın bulunduğu türden başlayarak kitaplık düzenini yeniden planlamalarını istemiştir.</p>`,
        stem: "Bu tabloya göre aşağıdakilerden hangisi kesin olarak söylenebilir?",
        options: ["En çok hikâye kitabı vardır.", "Şiir kitapları masal kitaplarından fazladır.", "Bilgi kitapları yeşil etikette durmaktadır.", "Masal ve şiir kitaplarının sayısı eşittir."],
        answer: "A",
        solution: "Tabloda hikâye kitabı 28'dir ve bu sayı diğer türlerden fazladır."
      },
      {
        text: `<p>Bir okul bahçesinde dikilen fidanlarla ilgili kısa bilgi kartı hazırlanmıştır.</p>${stimulusTable(["Fidan", "Sulama aralığı", "Gölge isteği", "Meyve verir mi?"], [["Elma", "2 günde bir", "Az", "Evet"], ["Çam", "4 günde bir", "Orta", "Hayır"], ["Erik", "2 günde bir", "Az", "Evet"], ["Ihlamur", "3 günde bir", "Orta", "Hayır"]])}<p>Bahçe kulübü, aynı sulama aralığına sahip fidanları yan yana dikmeyi planlamaktadır.</p>`,
        stem: "Bu bilgilere göre hangi iki fidan aynı sulama aralığına sahiptir?",
        options: ["Elma ve erik", "Çam ve ıhlamur", "Elma ve çam", "Erik ve ıhlamur"],
        answer: "A",
        solution: "Elma ve erik fidanlarının sulama aralığı tabloda '2 günde bir' olarak verilmiştir."
      }
    ];
    const selected = variants[index % variants.length];
    return buildQuestion({ grade, topic, difficulty, outcome: "Tablo ve bilgi kartından doğrudan çıkarım yapar.", strategy: "Önce başlığı ve sütunları oku, sonra seçenekleri tablodaki sayılarla karşılaştır.", hint: "En büyük ya da eşit olan değerleri işaretle.", wrong: "Yanlış seçenekler tablodaki sayı ya da etiketlerle uyuşmaz.", ...selected });
  }

  if (isLogic && grade === 5) {
    const names = ["Ece", "Mert", "Deniz", "Zeynep"];
    return buildQuestion({
      grade, topic, difficulty, outcome: "Basit koşullardan sıralama yapar.",
      text: `<p>${names.join(", ")} adlı dört öğrenci okuma saatinde sırayla kitap tanıtacaktır.</p>${stimulusList([`${names[1]}, ${names[0]}'den hemen sonra tanıtım yapacaktır.`, `${names[2]} ilk sırada değildir.`, `${names[3]} son sırada tanıtım yapacaktır.`, `${names[0]} ilk sıradadır.`])}`,
      stem: "Bu bilgilere göre doğru sıralama aşağıdakilerden hangisidir?",
      options: [`${names[0]} - ${names[1]} - ${names[2]} - ${names[3]}`, `${names[1]} - ${names[0]} - ${names[2]} - ${names[3]}`, `${names[0]} - ${names[2]} - ${names[1]} - ${names[3]}`, `${names[2]} - ${names[0]} - ${names[1]} - ${names[3]}`],
      answer: "A",
      solution: `${names[0]} ilk sıradadır, ${names[1]} hemen ardından gelir, ${names[3]} son sıradadır. Geriye ${names[2]} üçüncü sıraya kalır.`,
      strategy: "Kesin yeri verilen kişileri önce yerleştir, sonra kalan boşluğu tamamla.",
      hint: "İlk ve son sırayı önce bul.",
      wrong: "Diğer seçenekler ya ilk sırayı ya da hemen sonra koşulunu bozar."
    });
  }

  if (isVisual && grade === 6) {
    const variants = [
      {
        text: `<p>Bir araştırmada öğrencilerin günlük okuma süreleri ve haftalık kitap değerlendirme notları karşılaştırılmıştır.</p>${stimulusTable(["Öğrenci", "Günlük okuma", "Haftalık not"], [["Ada", "20 dk", "3 sayfa"], ["Bora", "35 dk", "5 sayfa"], ["Cem", "15 dk", "2 sayfa"], ["Duru", "30 dk", "4 sayfa"]])}<p>Tablodaki bilgiler yalnızca öğrencilerin bir haftalık gözlemine dayanmaktadır.</p>`,
        stem: "Bu tabloya göre aşağıdaki sonuçlardan hangisine ulaşılabilir?",
        options: ["En uzun okuma süresi Bora'ya aittir.", "Cem haftada hiç not tutmamıştır.", "Ada'nın notu Duru'dan fazladır.", "Tüm öğrenciler eşit süre okumuştur."],
        answer: "A",
        solution: "Günlük okuma süresi en yüksek olan öğrenci 35 dakika ile Bora'dır."
      },
      {
        text: `<p>Okul kantininde sağlıklı ara öğün haftası için ürün özelliklerini gösteren bir bilgi tablosu hazırlanmıştır:</p>${stimulusTable(["Ürün", "Meyve içerir", "Şeker eklenmiş", "Saklama"], [["Yoğurtlu kase", "Evet", "Hayır", "Soğuk"], ["Kuru meyve paketi", "Evet", "Hayır", "Kuru"], ["Çikolatalı bar", "Hayır", "Evet", "Kuru"], ["Meyveli içecek", "Evet", "Evet", "Soğuk"]])}<p>Öğrencilerden meyve içeren ama şeker eklenmemiş ürünleri seçmeleri istenmiştir.</p>`,
        stem: "Bu koşula uyan ürünler aşağıdakilerin hangisinde birlikte verilmiştir?",
        options: ["Yoğurtlu kase ve kuru meyve paketi", "Çikolatalı bar ve meyveli içecek", "Yoğurtlu kase ve çikolatalı bar", "Kuru meyve paketi ve meyveli içecek"],
        answer: "A",
        solution: "Meyve içeren ve şeker eklenmemiş olan ürünler yoğurtlu kase ile kuru meyve paketidir."
      }
    ];
    const selected = variants[index % variants.length];
    return buildQuestion({ grade, topic, difficulty, outcome: "Tablodaki verileri karşılaştırarak sonuç çıkarır.", strategy: "Her seçeneği tabloda iki ayrı sütunla kontrol et.", hint: "Koşul birden fazlaysa hepsini aynı anda sağlayan satırı ara.", wrong: "Yanlış seçenekler tablodaki koşullardan en az birini sağlamaz.", ...selected });
  }

  if (isLogic && grade === 6) {
    return buildQuestion({
      grade, topic, difficulty, outcome: "Koşullara göre doğru çıkarım yapar.",
      text: `<p>Bir sözcük oluşturma etkinliğinde öğrenciler, kutulardaki heceleri birleştirerek anlamlı sözcükler bulacaktır. Her sözcük birinci, ikinci ve üçüncü kutudaki hecelerin sırasıyla birleşmesiyle oluşur.</p>${stimulusTable(["1. kutu", "2. kutu", "3. kutu"], [["YA", "?", "MUR"], ["KA", "?", "LEM"], ["SE", "?", "PET"], ["DE", "?", "NİZ"]])}<p>Eksik heceler yerleştirildiğinde yağmur, kalem, sepet ve deniz sözcükleri oluşacaktır.</p>`,
      stem: "Buna göre ikinci kutulardan birine aşağıdakilerden hangisi yazılamaz?",
      options: ["Ğ", "L", "P", "RE"],
      answer: "D",
      solution: "Yağmur için Ğ, kalem için L, sepet için P gerekir. Deniz için eksik bölüm Nİ'dir; RE hiçbir sözcüğü tamamlamaz.",
      strategy: "Her satırı ayrı sözcük gibi düşün ve eksik parçayı tamamla.",
      hint: "Seçenekleri satır satır dene.",
      wrong: "A, B ve C seçenekleri verilen sözcüklerden birini tamamlar."
    });
  }

  if (isVisual && grade === 7) {
    const rows = [
      ["Pazartesi", "Kitap kulübü", "Robotik", "Drama"],
      ["Salı", "Satranç", "Kitap kulübü", "Resim"],
      ["Çarşamba", "Drama", "Resim", "Robotik"],
      ["Perşembe", "Robotik", "Satranç", "Kitap kulübü"]
    ];
    return buildQuestion({
      grade, topic, difficulty, outcome: "Çizelgeden hareketle kesin bilgi belirler.",
      text: `<p>7. sınıf öğrencileri, öğle arası kulüp çalışmalarına katılacaktır. Çizelgede günlere göre yapılacak çalışmalar verilmiştir.</p>${stimulusTable(["Gün", "1. salon", "2. salon", "3. salon"], rows)}<p>Ela yalnız kitap kulübüne, Kuzey yalnız robotiğe, Nisa ise drama ya da resim çalışmalarından birine katılacaktır.</p>`,
      stem: "Bu bilgilere göre aşağıdakilerden hangisi kesin olarak doğrudur?",
      options: ["Ela pazartesi 1. salona gidebilir.", "Kuzey salı günü robotiğe katılabilir.", "Nisa perşembe günü dramaya katılabilir.", "Kitap kulübü her gün aynı salondadır."],
      answer: "A",
      solution: "Pazartesi 1. salonda kitap kulübü vardır; Ela yalnız kitap kulübüne katıldığı için bu bilgi kesin olarak uygundur.",
      strategy: "Kişinin koşulunu çizelgede ilgili gün ve salonla eşleştir.",
      hint: "Önce öğrencinin katılabileceği kulübü bul.",
      wrong: "B'de salı robotik yoktur, C'de perşembe drama yoktur, D'de kitap kulübünün salonu değişir."
    });
  }

  if (isLogic && grade === 7) {
    return buildQuestion({
      grade, topic, difficulty, outcome: "Birden çok koşulu birlikte değerlendirir.",
      text: `<p>Bir okul dergisinde röportaj sırası için Aylin, Baran, Cenk, Defne ve Eren seçilmiştir. Sıralamayla ilgili bilgiler şöyledir:</p>${stimulusList(["Defne üçüncü sıradadır.", "Aylin, Baran'dan önce; Cenk'ten sonra röportaj verecektir.", "Eren ilk ya da son sırada değildir.", "Baran, Defne'den sonra röportaj verecektir."])}<p>Bu bilgilerden hareketle öğrenciler sıralamayı belirlemeye çalışmıştır.</p>`,
      stem: "Buna göre aşağıdakilerden hangisi kesinlikle yanlıştır?",
      options: ["Cenk birinci sırada olabilir.", "Aylin ikinci sırada olabilir.", "Baran dördüncü sırada olabilir.", "Eren beşinci sırada olabilir."],
      answer: "D",
      solution: "Eren ilk ya da son sırada değildir. Bu nedenle Eren'in beşinci sırada olması kesinlikle yanlıştır.",
      strategy: "Olumsuz koşulları ayrı işaretle; kesinlikle yanlış sorularında bu koşullar çok belirleyicidir.",
      hint: "Eren'in olamayacağı yerlere bak.",
      wrong: "A, B ve C verilen koşullara göre ihtimal olarak kalabilir."
    });
  }

  if (grade === 8 && (isVisual || isLgs)) {
    const variants = [
      {
        text: `<p>Bir okulun paragraf denemesi sonrası hazırlanan konu başarı tablosu aşağıdaki gibidir.</p>${stimulusTable(["Konu", "Doğru oranı", "Boş oranı", "Ortalama süre"], [["Ana fikir", "%68", "%4", "72 sn"], ["Yardımcı fikir", "%54", "%8", "84 sn"], ["Görsel okuma", "%76", "%3", "69 sn"], ["Sözel mantık", "%41", "%12", "118 sn"]])}<p>Öğretmen, öğrencilerin yalnız doğru oranına değil boş oranı ve süreye de bakarak çalışma planı yapmasını istemiştir.</p>`,
        stem: "Bu bilgilere göre çalışma planında öncelik verilmesi gereken konu hangisidir?",
        options: ["Ana fikir", "Yardımcı fikir", "Görsel okuma", "Sözel mantık"],
        answer: "D",
        solution: "Sözel mantıkta doğru oranı en düşük, boş oranı ve ortalama süre en yüksektir. Bu nedenle öncelik bu konudadır."
      },
      {
        text: `<p>Bir bilgilendirme metninde okul gezisi için kayıt koşulları verilmiştir.</p>${stimulusCards([{ title: "Müze", text: "En fazla 24 öğrenci, rehber zorunlu." }, { title: "Bilim merkezi", text: "En fazla 30 öğrenci, deney atölyesi var." }, { title: "Tiyatro", text: "En fazla 20 öğrenci, sessiz izleme kuralı var." }, { title: "Doğa parkı", text: "En fazla 28 öğrenci, kapalı ayakkabı zorunlu." }])}<p>8/A sınıfında 26 öğrenci vardır. Öğretmen, sınıfı bölmeden ve ek ücret gerektirmeden gezi yapmak istemektedir.</p>`,
        stem: "Buna göre 8/A sınıfı hangi yerlere sınıfı bölmeden gidebilir?",
        options: ["Bilim merkezi ve doğa parkı", "Müze ve tiyatro", "Tiyatro ve bilim merkezi", "Müze ve doğa parkı"],
        answer: "A",
        solution: "26 öğrenci, 30 kişilik bilim merkezi ve 28 kişilik doğa parkı sınırına uygundur; müze ve tiyatro kapasitesi yetersizdir."
      }
    ];
    const selected = variants[index % variants.length];
    return buildQuestion({ grade, topic, difficulty, outcome: "Çoklu veri ve koşullardan sonuç çıkarır.", strategy: "Tabloyu yalnız tek sütuna göre değil, tüm koşulları birlikte okuyarak değerlendir.", hint: "En zayıf alanı bulurken doğru, boş ve süre verilerini birlikte düşün.", wrong: "Yanlış seçenekler verilerden yalnız birini dikkate alır ya da kapasite koşulunu bozar.", ...selected });
  }

  if (isLogic && grade === 8) {
    const symbols = stimulusTable(["Harf", "İşaret", "Harf", "İşaret", "Harf", "İşaret"], [["A", "▲", "E", "●", "K", "◆"], ["L", "■", "M", "◇", "N", "★"], ["R", "□", "T", "△", "Y", "○"]]);
    return buildQuestion({
      grade, topic, difficulty, outcome: "Kod tablosu ve koşulları birlikte yorumlar.",
      text: `<p>Bir etkinlikte öğrenciler, aşağıdaki işaret tablosunu kullanarak sözcükleri şifrelemiştir. Sözcükler soldan sağa okunmaktadır.</p>${symbols}<p>Öğretmen, "KARTAL" sözcüğünü doğru şifreleyen öğrencinin kodunu seçmelerini istemiştir.</p>`,
      stem: "Buna göre KARTAL sözcüğünün doğru şifrelenmiş biçimi aşağıdakilerden hangisidir?",
      options: ["◆ ▲ □ △ ▲ ■", "◆ ▲ △ □ ▲ ■", "■ ▲ □ △ ▲ ◆", "◆ ● □ △ ▲ ■"],
      answer: "A",
      solution: "K=◆, A=▲, R=□, T=△, A=▲, L=■ olduğundan doğru sıra A seçeneğindedir.",
      strategy: "Kod sorularında her harfi sırayla tabloya götür ve işareti aynı sırada yaz.",
      hint: "Önce K harfinin işaretini bul.",
      wrong: "Diğer seçeneklerde R-T sırası, ilk harf ya da ikinci harf yanlış kodlanmıştır."
    });
  }

  return null;
}

function gradeFiveGeneratedText(seed, note, extension, index) {
  const variants = [
    `${seed.person}, ${seed.place} içinde her gün gördüğü ama pek dikkat etmediği bir ayrıntıyı fark etti. ${seed.detail} konusunda küçük bir aksaklık yaşanınca önce durumu gözlemledi, sonra arkadaşlarıyla konuşup ne yapılabileceğini düşündü. Çalışma ilerledikçe herkesin fikrinin işe yaradığı görüldü. ${seed.person}, ${note}; ${extension}`,
    `${seed.place} o sabah her zamankinden daha hareketliydi. ${seed.person}, ${seed.detail} ile ilgili hazırlık yapılırken bazı şeylerin eksik kaldığını gördü. Acele etmek yerine sırayla ne yapılacağını belirledi ve arkadaşlarından destek istedi. İş bittiğinde ortaya çıkan düzen, planlı davranmanın ne kadar önemli olduğunu gösterdi. ${extension}`,
    `${seed.person}, bir süre ${seed.place} çevresini sessizce izledi. Önce gözden kaçan küçük ayrıntıları fark etti, sonra ${seed.detail} için yapılacakları zihninde sıraya koydu. Arkadaşları da ona katılınca çalışma daha kolay ilerledi. Bu durum, dikkatli bakmanın ve birlikte hareket etmenin sonucu değiştirebileceğini gösterdi.`,
    `${seed.place} için yapılan hazırlıkta herkes farklı bir işle ilgileniyordu. ${seed.person}, ${seed.detail} konusunun unutulmaması gerektiğini söyleyince çalışma daha düzenli yürüdü. Başta küçük görünen bu ayrıntı, sonucun daha iyi olmasını sağladı. ${note}. ${extension}`,
    `${seed.person}, ${seed.place} ile ilgili bir konuşmada herkesin aynı şeyi fark etmediğini gördü. Kimi yalnız sonuca bakıyor, kimi de ${seed.detail} gibi ayrıntıların neden gerekli olduğunu anlatıyordu. Konuşma ilerledikçe öğrenciler, bir işi anlamak için yalnız ne yapıldığına değil, niçin yapıldığına da bakmak gerektiğini fark etti.`,
    `${seed.place} sessizleştiğinde ${seed.person} etrafına daha dikkatli baktı. Düzenli duran yerlerin daha kolay kullanıldığını, dağınık kalan bölümlerde ise zaman kaybedildiğini gördü. Bu yüzden ${seed.detail} üzerinde durdu ve arkadaşlarına fikrini anlattı. Anlatılanlar, küçük ayrıntıların büyük kolaylıklar sağlayabileceğini düşündürdü.`,
    `Bir gün ${seed.person}, ${seed.place} hakkında kısa bir gözlem yazısı hazırladı. Yazısında önce ne gördüğünü anlattı, sonra ${seed.detail} ile ilgili düşüncelerini örneklerle açıkladı. Arkadaşları yazıyı okuyunca aynı yere farklı gözlerle bakabileceklerini fark etti. Böylece metin, gözlem yapmanın anlamayı güçlendirdiğini gösterdi.`,
    `${seed.person}, ${seed.place} için yapılan çalışmada en çok dinlemenin işe yaradığını düşündü. Çünkü herkes kendi fikrini söyleyince ${seed.detail} konusunda daha doğru bir yol bulundu. Kimse tek başına karar vermedi; önce konuşuldu, sonra uygulandı. Bu da ortak düşünmenin çalışmayı kolaylaştırdığını ortaya koydu.`,
    `${seed.place} ile ilgili sorun ilk bakışta çok büyük görünmüyordu. Ancak ${seed.person}, ${seed.detail} yapılmadığında işlerin karışabileceğini fark etti. Bunun üzerine arkadaşlarıyla birlikte kısa bir plan hazırladı. Plan uygulandığında hem zaman kazanıldı hem de herkes ne yapacağını daha iyi anladı.`,
    `${seed.person}, ${seed.place} hakkında anlatılanları dikkatle dinledi. Anlatılanlarda özellikle ${seed.detail} üzerinde duruluyordu. Çünkü bu ayrıntı olmadan yapılan çalışma eksik kalabilirdi. Dersin sonunda öğrenciler, metindeki önemli bilgiyi ayırt etmenin doğru sonuca ulaşmayı kolaylaştırdığını gördü.`,
    `${seed.place} bir süre sonra eskisinden daha düzenli görünmeye başladı. Bunda ${seed.person}'in ${seed.detail} konusuna dikkat çekmesinin payı vardı. Arkadaşları önce bu ayrıntının gerekli olup olmadığını tartıştı, sonra denediklerinde işe yaradığını gördüler. Böylece küçük bir uyarının bile davranışları değiştirebileceği anlaşıldı.`,
    `${seed.person}, ${seed.place} ile ilgili çalışmayı anlatırken yalnız sonucu söylemekle yetinmedi. Önce nasıl düşündüğünü, sonra ${seed.detail} için hangi yolu seçtiğini açıkladı. Arkadaşları onu dinlerken kendi davranışlarını da değerlendirdi. Bu anlatım, yapılan işin arkasındaki düşünceyi görmenin önemini ortaya koydu. ${extension}`
  ];
  return variants[index % variants.length];
}

function generatedQuestion(grade, topic, index) {
  const seed = passageSeeds[grade][index % passageSeeds[grade].length];
  const difficulty = index % 5 < 2 ? "Kolay" : index % 5 < 4 ? "Orta" : "Zor";
  const number = index + 1;
  const variantNotes = {
    5: ["öğretmen kısa bir değerlendirme yaptı", "arkadaşları kendi gözlemlerini de anlattı", "sınıf panosuna küçük bir not asıldı", "öğrenciler yaptıkları seçimin nedenini açıkladı"],
    6: ["öğrenciler sonucu defterlerine iki maddeyle yazdı", "öğretmen benzer bir günlük yaşam örneği verdi", "sınıf, neden ve sonucu birlikte tartıştı", "çalışmanın sonunda kısa bir özet çıkarıldı"],
    7: ["öğrenciler metindeki anahtar sözcükleri işaretledi", "sınıfta farklı yorumlar karşılaştırıldı", "öğretmen konu dışı ayrıntıları ayıklamalarını istedi", "metnin giriş ve sonuç cümleleri ayrıca incelendi"],
    8: ["öğrenciler sürelerini tabloya işledi", "yanlış seçeneklerin neden güçlü çeldirici olduğu tartışıldı", "soru kökü önce okunarak çözüm yolu belirlendi", "verilerden kesin yargı ile yorum ayrıldı"]
  };
  const note = variantNotes[grade][Math.floor(index / passageSeeds[grade].length) % variantNotes[grade].length];
  const extension = paragraphExtension(grade, seed, note, index);
  const gradeEightQuestion = grade === 8 ? gradeEightSkillQuestion(topic, index, difficulty, number) : null;
  if (gradeEightQuestion) return gradeEightQuestion;
  const variedNewGen = variedNewGenerationQuestion(grade, topic, index, difficulty, number);
  if (variedNewGen) return variedNewGen;
  const newGenQuestion = newGenerationQuestion(grade, topic, index, seed, note, difficulty, number);
  if (newGenQuestion) return newGenQuestion;

  if (grade === 5) {
    const text = gradeFiveGeneratedText(seed, note, extension, index);
    const map = {
      "Konu bulma": {
        stem: "Bu metnin konusu aşağıdakilerden hangisidir?",
        options: [`${seed.person}'in bütün işi tek başına bitirmesi`, `${seed.person}'in ${seed.detail} ile ilgili çalışması`, `${seed.place} için yapılan hazırlığın tamamen bırakılması`, "Arkadaşların konu hakkında hiçbir şey yapmaması"],
        answer: "B",
        solution: `Metnin bütününde ${seed.person}'in ${seed.detail} ile ilgili yaptığı çalışma anlatılır.`
      },
      "Ana düşünce": {
        stem: "Bu metnin ana düşüncesi aşağıdakilerden hangisidir?",
        options: ["Bir işi tamamlamak için yalnız hızlı davranmak yeterlidir.", seed.message, "Yardımlaşmak yapılan işi her zaman zorlaştırır.", "Planlı çalışma küçük görevlerde işe yaramaz."],
        answer: "B",
        solution: `Metin, olay üzerinden '${seed.message}' düşüncesini verir.`
      },
      "Başlık bulma": {
        stem: "Bu metne en uygun başlık hangisidir?",
        options: ["Birlikte Bulunan Çözüm", seed.title, "Yarım Kalan Hazırlık", `${seed.place} İçin Yeni Bir Plan`],
        answer: "B",
        solution: `Başlık metnin tamamını kapsamalıdır. Metin ${seed.title.toLowerCase()} çevresinde gelişir.`
      },
      "Yardımcı düşünce": {
        stem: "Bu metinde aşağıdakilerden hangisine değinilmiştir?",
        options: [`Çalışmanın ${seed.place} dışında yapıldığına`, seed.detail, `${seed.person}'in arkadaşlarından hiç yardım almadığına`, "Çalışmanın herkes tarafından gereksiz görüldüğüne"],
        answer: "B",
        solution: `Metinde ${seed.detail} açıkça belirtilmiştir.`
      },
      "Hikâye unsurları": {
        stem: "Bu metinde olayın geçtiği yer aşağıdakilerden hangisidir?",
        options: ["Sınıf dışındaki başka bir yer", seed.place, "Evdeki çalışma masası", "Şehir dışındaki bir kamp"],
        answer: "B",
        solution: `Olayın geçtiği yer metinde ${seed.place} olarak verilir.`
      },
      "Çıkarım yapma": {
        stem: "Bu metinden aşağıdakilerden hangisi çıkarılabilir?",
        options: [`${seed.person}'in çalışmayı tek başına bitirdiği`, seed.inference, "Yapılan işin arkadaşlar tarafından fark edilmediği", "Metindeki asıl amacın yarış kazanmak olduğu"],
        answer: "B",
        solution: `Metindeki değişim ve sonuç, '${seed.inference}' çıkarımını destekler.`
      }
    };
    return buildQuestion({ grade, topic, difficulty, outcome: `${topic} kazanımına uygun soru ${number}.`, text, strategy: "Metindeki tekrar eden ipuçlarını ve sonuç cümlesini birlikte değerlendir.", hint: "Metnin başı ve sonu sana yön verir.", ...map[topic] });
  }

  if (grade === 6) {
    const text = `${seed.title} çalışmasında öğrenciler önce durumu gözlemledi. ${seed.cause} ${seed.result}. Öğretmen, ${seed.detail} konusunun yalnızca o gün için değil, sonraki çalışmalar için de önemli olduğunu söyledi. Bu örnek, öğrencilerin günlük yaşamda daha planlı davranmasına yardımcı oldu; ayrıca ${note}. ${extension}`;
    const map = {
      "Konu bulma": {
        stem: "Bu metnin konusu aşağıdakilerden hangisidir?",
        options: [`${seed.title} çalışmasının yalnız ilk aşaması`, `${seed.title} çalışmasında ${seed.detail}`, `${seed.detail} konusunun çalışmadan bağımsız kalması`, "Öğrencilerin sonucu değerlendirmeden çalışmayı bitirmesi"],
        answer: "B",
        solution: `Metnin tamamında ${seed.title.toLowerCase()} çalışması ve ${seed.detail} üzerinde durulur. Bu yüzden konu B seçeneğidir.`
      },
      "Ana düşünce": {
        stem: "Bu metnin ana düşüncesi aşağıdakilerden hangisidir?",
        options: ["Bir çalışmada yalnız sonucu görmek yeterlidir.", seed.message, "Gözlem yapmak öğrencilerin günlük yaşamla bağ kurmasını engeller.", "Planlı davranmak yalnızca okul dışındaki işler için önemlidir."],
        answer: "B",
        solution: `Metin ${seed.detail} üzerinden '${seed.message}' düşüncesini anlatır.`
      },
      "Yardımcı düşünce": {
        stem: "Bu metinde aşağıdakilerden hangisine değinilmiştir?",
        options: ["Çalışmanın gözlem yapılmadan tamamlandığına", seed.detail, "Öğretmenin konuyu başka bir çalışmaya çevirdiğine", "Öğrencilerin sonuç üzerinde hiç durmadığına"],
        answer: "B",
        solution: `Metinde ${seed.detail} yardımcı bilgi olarak kullanılmıştır.`
      },
      "Metnin amacı": {
        stem: "Bu metnin yazılış amacı aşağıdakilerden hangisidir?",
        options: ["Bir yeri betimlemek", seed.purpose, "Bir kişiyi eleştirmek", "Bir masal kahramanını tanıtmak"],
        answer: "B",
        solution: `Metin okuru ${seed.purpose} amacıyla bilgilendirir.`
      },
      "Neden-sonuç": {
        stem: "Metindeki neden-sonuç ilişkisi aşağıdakilerden hangisidir?",
        options: ["Öğrenciler konuştuğu için çalışma bitti.", `${seed.cause} ${seed.result}.`, "Öğretmen gelmediği için konu işlendi.", "Plan yapılmadığı için düzen sağlandı."],
        answer: "B",
        solution: `'${seed.cause}' bölümü nedeni, '${seed.result}' bölümü sonucu gösterir.`
      },
      "Karşılaştırma": {
        stem: "Bu metne göre karşılaştırılan iki durum hangisidir?",
        options: ["Yaz ve kış", `${seed.compareA} ile ${seed.compareB}`, "Roman ve şiir", "Okul ve ev"],
        answer: "B",
        solution: `Metin ${seed.compareA} ile ${seed.compareB} arasındaki farkı düşündürür.`
      },
      "Paragraf tamamlama": {
        stem: "Bu metin aşağıdakilerden hangisiyle tamamlanırsa anlam bütünlüğü sağlanır?",
        options: ["bu nedenle hiçbir öğrenci sorumluluk almamalıdır.", "bu alışkanlık sonraki çalışmalarda da başarıyı artırır.", "konuyla ilgisi olmayan bir gezi planı yapılır.", "bütün kurallar unutulmalıdır."],
        answer: "B",
        solution: "Metin planlı ve doğru davranışın olumlu sonucunu anlattığı için B seçeneği uygundur."
      }
    };
    return buildQuestion({ grade, topic, difficulty, outcome: `${topic} kazanımına uygun soru ${number}.`, text, strategy: "Seçenekleri metindeki neden, amaç ve sonuç ipuçlarıyla eşleştir.", hint: "Metindeki sonuç cümlesi cevabı daraltır.", ...map[topic] });
  }

  if (grade === 7) {
    const baseText = `${seed.title} konusunda yapılan konuşmada öğretmen, ${seed.idea} düşüncesini öne çıkardı. ${seed.example}. Bu durum, öğrencilerin yalnızca sonucu değil, sonuca götüren yolu da değerlendirmesi gerektiğini gösterdi. Son bölümde ${note}. ${extension}`;
    const map = {
      "Konu bulma": {
        text: baseText,
        stem: "Bu metnin konusu aşağıdakilerden hangisidir?",
        options: [`${seed.title} konusunda yalnız sonuçların sıralanması`, `${seed.title} üzerinden ${seed.idea}`, `${seed.idea} düşüncesinin örneklerden bağımsız anlatılması`, "Öğrencilerin konu dışı bir etkinliği değerlendirmesi"],
        answer: "B",
        solution: `Metinde ${seed.title.toLowerCase()} ve ${seed.idea} düşüncesi birlikte işlenir; konu bu ortak çizgide toplanır.`
      },
      "Ana düşünce": {
        text: baseText,
        stem: "Bu metnin ana düşüncesi aşağıdakilerden hangisidir?",
        options: ["Sonuca ulaşmak için izlenen yolun değerlendirilmesine gerek yoktur.", seed.hidden, "Ayrıntılar doğru seçildiğinde bile düşünceyi zayıflatır.", "Öğrenme, örnekler üzerinde düşünmeden gerçekleşir."],
        answer: "B",
        solution: `Metindeki örnek ve sonuç bölümü '${seed.hidden}' düşüncesini destekler.`
      },
      "Yardımcı düşünce": {
        text: baseText,
        stem: "Bu metinde aşağıdakilerden hangisine değinilmiştir?",
        options: ["Öğrencilerin örnekleri değerlendirmeden sonuca ulaştığına", seed.example, "Konuşmanın konudan tamamen uzaklaştığına", "Sonucun rastlantıyla ortaya çıktığının özellikle vurgulandığına"],
        answer: "B",
        solution: `Metinde '${seed.example}' ifadesi destekleyici bilgi olarak yer alır.`
      },
      "Örtülü anlam": {
        text: baseText,
        stem: "Bu metinden çıkarılabilecek örtülü anlam aşağıdakilerden hangisidir?",
        options: ["Sonuç her zaman rastlantıyla oluşur.", seed.hidden, "Öğrenmede süreç önemsizdir.", "Öğrenciler hiçbir zaman plan yapmaz."],
        answer: "B",
        solution: `Metin açıkça söylemese de '${seed.hidden}' düşüncesine ulaştırır.`
      },
      "Yorumlama": {
        text: baseText,
        stem: "Bu metne göre aşağıdaki yorumlardan hangisi yapılabilir?",
        options: ["Ayrıntılar her zaman gereksizdir.", seed.hidden, "Örnekler konuyu belirsizleştirir.", "Öğretmen konu dışına çıkmıştır."],
        answer: "B",
        solution: `Metnin verdiği örnek, '${seed.hidden}' yorumunu destekler.`
      },
      "Cümle sıralama": {
        text: `(I) Sonunda öğrenciler ${seed.idea} düşüncesini daha iyi kavradı. (II) Öğretmen önce sınıfa kısa bir örnek verdi ve ${note}. (III) Daha sonra öğrenciler bu örnekten yola çıkarak kendi cümlelerini yazdı. (IV) Derste ${seed.title.toLowerCase()} konusu işlendi.`,
        stem: "Numaralanmış cümlelerle anlamlı bir paragraf oluşturulduğunda sıralama nasıl olmalıdır?",
        options: ["IV-II-III-I", "II-I-IV-III", "I-III-II-IV", "III-IV-I-II"],
        answer: "A",
        solution: "Önce konu verilir, sonra öğretmenin örneği, öğrencilerin çalışması ve sonuç gelir."
      },
      "Düşüncenin akışını bozan cümle": {
        text: `(I) ${seed.title} öğrencilerin dikkatini çeken bir konuydu. (II) Öğretmen ${seed.idea} üzerinde durdu ve ${note}. (III) ${seed.odd} (IV) Verilen örnekler konunun daha iyi anlaşılmasını sağladı.`,
        stem: "Numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?",
        options: ["I", "II", "III", "IV"],
        answer: "C",
        solution: "III. cümle metnin konusu ile ilgili değildir ve anlam akışını bozar."
      },
      "Anlatım biçimleri": {
        text: `${seed.example}. Metinde ayrıntılar, düşünceyi okurun zihninde belirginleştirmek için seçilmiştir. Yazar, konuyu doğrudan bilgi vererek ve örnekle destekleyerek anlatır. Bu bölümde ayrıca ${note}.`,
        stem: "Bu metinde ağır basan anlatım biçimi hangisidir?",
        options: ["Olay çevresinde gelişen öyküleyici anlatım", seed.style, "Coşkulu söyleyişe dayalı destansı anlatım", "Olağanüstü kişilere dayalı masalsı anlatım"],
        answer: "B",
        solution: `Metnin kuruluşu ${seed.style} özelliği gösterir.`
      },
      "Düşünceyi geliştirme yolları": {
        text: `${seed.idea} çoğu zaman somut bir örnekle daha kolay anlaşılır. Örneğin ${seed.example}. Bu örnek, anlatılan düşüncenin günlük yaşamda nasıl karşılık bulduğunu gösterir. Öğretmen bu bölümde ${note}. ${extension}`,
        stem: "Bu metinde düşünceyi geliştirmek için hangi yola başvurulmuştur?",
        options: ["Tanık gösterme", "Örneklendirme", "Sayısal verilerden yararlanma", "Karşıt görüş çürütme"],
        answer: "B",
        solution: "Yazar düşüncesini somut bir durumla desteklediği için örneklendirme kullanmıştır."
      }
    };
    return buildQuestion({ grade, topic, difficulty, outcome: `${topic} kazanımına uygun soru ${number}.`, strategy: "Önce metnin konusu ve düşünce yönünü bul, sonra seçenekleri buna göre ele.", hint: "Konu dışına çıkan ya da metnin desteklemediği seçenekleri ele.", ...map[topic] });
  }

  const lgsText = `${seed.title} üzerine yapılan bir değerlendirmede öğrencilerin yalnızca doğru sayısına bakmasının yeterli olmadığı vurgulandı. Öğrencinin hangi soru tipinde yavaşladığını, hangi seçeneği neden elediğini ve kalan süresini nasıl kullandığını görmesi gerekir. Çünkü paragraf sorularında başarı, metni anlamak kadar zamanı ve dikkati yönetmeye de bağlıdır. Değerlendirme sırasında ${note}. ${extension}`;
  const map = {
    "Konu bulma": {
      text: lgsText,
      stem: "Bu metnin konusu aşağıdakilerden hangisidir?",
      options: ["Paragraf sorularında yalnız doğru sayısını yeterli görme", "Paragraf sorularında çözüm sürecini değerlendirme", "Uzun metinlerde yalnız okuma hızını artırma", "Seçenek eleme yapmadan soruları bitirme"],
      answer: "B",
      solution: "Metnin tamamında paragraf sorularında doğru sayısı, süre, seçenek eleme ve çözüm sürecini değerlendirme üzerinde durulur."
    },
    "Ana düşünce": {
      text: lgsText,
      stem: "Bu metnin ana düşüncesi aşağıdakilerden hangisidir?",
      options: ["Paragraf sorularında yalnızca hızlı okumak yeterlidir.", "Paragraf başarısı, anlama ile birlikte seçenek eleme ve zaman yönetimini de gerektirir.", "Yanlış seçenekleri incelemek gereksizdir.", "Uzun metinlerde soru kökü okunmadan cevap bulunmalıdır."],
      answer: "B",
      solution: "Metin, başarıyı yalnızca doğru sayısına değil; anlama, eleme ve zamanı yönetme becerilerine bağlar."
    },
    "Yardımcı düşünce": {
      text: lgsText,
      stem: "Bu metinde aşağıdakilerden hangisine değinilmiştir?",
      options: ["Paragraf sorularında sürenin hiç önemsenmemesi gerektiğine", "Öğrencinin hangi soru tipinde yavaşladığını fark etmesi gerektiğine", "Bütün soruların aynı yöntemle çözüldüğüne", "Seçeneklerin metinden bağımsız değerlendirileceğine"],
      answer: "B",
      solution: "Metinde öğrencinin hangi soru tipinde yavaşladığını görmesi gerektiği açıkça belirtilmiştir."
    },
    "LGS tarzı yeni nesil paragraf soruları": {
      text: lgsText,
      stem: "Bu metne göre yeni nesil paragraf sorularında başarı için aşağıdakilerden hangisi gereklidir?",
      options: ["Yalnızca hızlı okumak", "Anlama, seçenek eleme ve zamanı birlikte yönetmek", "Metnin tamamını ezberlemek", "Soru kökünü hiç okumamak"],
      answer: "B",
      solution: "Metin anlama, seçenek eleme ve zaman yönetimini birlikte vurgular."
    },
    "Metinler arası karşılaştırma": {
      text: `I. metin: ${seed.message}\n\nII. metin: ${seed.comparison}`,
      stem: "Bu iki metnin ortak yönü aşağıdakilerden hangisidir?",
      options: ["Okuma sürecinde bilinçli davranmayı önemsemeleri", "Ezberi tek yöntem olarak göstermeleri", "Süre kullanımını gereksiz bulmaları", "Metinleri yalnızca uzunluklarına göre değerlendirmeleri"],
      answer: "A",
      solution: "İki metin de okuma ya da çalışma sürecinde bilinçli davranmayı öne çıkarır."
    },
    "Tablo-grafik-görsel okuma": {
      text: `Bir deneme analizinde başarı oranları şöyledir: ${seed.data}.`,
      stem: "Bu verilere göre aşağıdakilerden hangisi kesin olarak söylenebilir?",
      options: ["En düşük oran her zaman ana düşüncededir.", "Veriler arasında en yüksek ve en düşük başarı alanları belirlenebilir.", "Tüm alanlarda başarı oranı eşittir.", "Öğrenci hiçbir konuda başarılı değildir."],
      answer: "B",
      solution: "Veriler farklı oranlar verdiği için en yüksek ve en düşük alanlar karşılaştırılarak belirlenebilir."
    },
    "Sözel mantık destekli paragraf soruları": {
      text: `${seed.logic.join(", ")} adlı dört öğrenci sunum yapacaktır. Birinci sırada ${seed.logic[1]} yoktur. ${seed.logic[0]}, ${seed.logic[2]}'den hemen önce sunum yapar. ${seed.logic[3]} son sıradadır. ${seed.logic[1]} ikinci sıradadır.`,
      stem: "Bu bilgilere göre doğru sıralama aşağıdakilerden hangisidir?",
      options: [`${seed.logic[1]} - ${seed.logic[0]} - ${seed.logic[2]} - ${seed.logic[3]}`, `${seed.logic[0]} - ${seed.logic[1]} - ${seed.logic[2]} - ${seed.logic[3]}`, `${seed.logic[1]} - ${seed.logic[2]} - ${seed.logic[0]} - ${seed.logic[3]}`, `${seed.logic[2]} - ${seed.logic[1]} - ${seed.logic[0]} - ${seed.logic[3]}`],
      answer: "A",
      solution: `${seed.logic[1]} ikinci sıradadır; ${seed.logic[0]} ve ${seed.logic[2]} yan yana olmalıdır; ${seed.logic[3]} son sıradadır. Bu koşulları A sağlar.`
    },
    "Çıkarım yapma": {
      text: lgsText,
      stem: "Bu metinden aşağıdakilerden hangisi çıkarılabilir?",
      options: ["Paragraf başarısı yalnızca şansa bağlıdır.", "Öğrenci kendi çözüm sürecini analiz ederse gelişebilir.", "Süre kontrolü paragraf sorularında önemsizdir.", "Yanlış seçenekleri incelemek zaman kaybıdır."],
      answer: "B",
      solution: "Metin öğrencinin yavaşladığı yerleri, eleme nedenlerini ve süre kullanımını incelemesini önerir."
    },
    "Zaman yönetimi": {
      text: `Bir öğrenci deneme sırasında paragraf sorularına ayırdığı süreyi not etti. ${seed.data}. Öğretmeni, yalnızca toplam süreye değil, hangi soru tipinin daha çok zaman aldığını görmesine dikkat çekti.`,
      stem: "Bu metne göre zaman yönetimi için en doğru davranış hangisidir?",
      options: ["Tüm sorulara rastgele süre ayırmak", "Zaman alan soru tiplerini belirleyip çalışma planını buna göre düzenlemek", "Kontrol süresini tamamen kaldırmak", "Süreyi hiç takip etmemek"],
      answer: "B",
      solution: "Metin, süreyi soru tiplerine göre analiz edip plan yapmayı önerir."
    }
  };
  return buildQuestion({ grade, topic, difficulty, outcome: `${topic} kazanımına uygun soru ${number}.`, strategy: "LGS sorularında kesin bilgiyi, tablo verisini ve çıkarım cümlesini birlikte değerlendir.", hint: "Önce kesin bilgileri işaretle, sonra seçenekleri ele.", ...map[topic] });
}

function buildQuestion(question) {
  return {
    answer: "B",
    wrong: "A, C ve D seçenekleri metindeki ana ipucunu ya eksik karşılar ya da metinde söylenmeyen bir yargı içerir.",
    ...question
  };
}

function makeQuestionId(question) {
  const raw = `${question.grade}|${question.topic}|${question.text}|${question.stem}`;
  let hash = 0;
  for (let i = 0; i < raw.length; i += 1) hash = ((hash << 5) - hash + raw.charCodeAt(i)) | 0;
  return `q${question.grade}_${Math.abs(hash)}`;
}

function moveAnswerToLetter(question, targetLetter) {
  const letters = ["A", "B", "C", "D"];
  const currentIndex = letters.indexOf(question.answer);
  const targetIndex = letters.indexOf(targetLetter);
  if (!Array.isArray(question.options) || question.options.length !== 4 || currentIndex < 0 || targetIndex < 0 || currentIndex === targetIndex) {
    return { ...question, answer: targetLetter };
  }
  const options = [...question.options];
  const [correctOption] = options.splice(currentIndex, 1);
  options.splice(targetIndex, 0, correctOption);
  return { ...question, options, answer: targetLetter };
}

function distributeAnswersEvenly(questions) {
  const letters = ["A", "B", "C", "D"];
  const counters = { 5: 0, 6: 0, 7: 0, 8: 0 };
  const answerPatterns = {
    5: ["B", "D", "A", "C", "C", "A", "D", "B", "A", "C", "B", "D", "D", "B", "C", "A"],
    6: ["C", "A", "D", "B", "B", "D", "A", "C", "D", "B", "C", "A", "A", "C", "B", "D"],
    7: ["D", "B", "C", "A", "A", "C", "D", "B", "C", "A", "B", "D", "B", "D", "A", "C"],
    8: ["C", "A", "D", "B", "A", "D", "B", "C", "D", "B", "A", "C", "B", "C", "D", "A"]
  };
  return questions.map((question) => {
    if (question.keepOptionOrder) return question;
    const grade = Number(question.grade);
    const index = counters[grade] || 0;
    counters[grade] = index + 1;
    const pattern = answerPatterns[grade] || letters;
    return moveAnswerToLetter(question, pattern[index % pattern.length]);
  });
}

function balanceQuestionBank(baseQuestions) {
  const balanced = [];
  const weightedTargets = {
    5: {
      "Konu bulma": 80,
      "Ana düşünce": 90,
      "Yardımcı düşünce": 75,
      "Başlık bulma": 30,
      "Hikâye unsurları": 20,
      "Çıkarım yapma": 55,
      "Tablo-grafik-görsel okuma": 25,
      "Sözel mantık destekli paragraf soruları": 25
    },
    6: {
      "Konu bulma": 60,
      "Ana düşünce": 85,
      "Yardımcı düşünce": 85,
      "Metnin amacı": 40,
      "Neden-sonuç": 25,
      "Karşılaştırma": 20,
      "Paragraf tamamlama": 35,
      "Tablo-grafik-görsel okuma": 25,
      "Sözel mantık destekli paragraf soruları": 25,
      "MEB 6. sınıf Türkçe çalışma soruları": 100
    },
    7: {
      "Konu bulma": 50,
      "Ana düşünce": 70,
      "Yardımcı düşünce": 70,
      "Örtülü anlam": 40,
      "Yorumlama": 35,
      "Cümle sıralama": 20,
      "Düşüncenin akışını bozan cümle": 20,
      "Anlatım biçimleri": 20,
      "Düşünceyi geliştirme yolları": 25,
      "Tablo-grafik-görsel okuma": 25,
      "Sözel mantık destekli paragraf soruları": 25,
      "MEB 7. sınıf Türkçe çalışma soruları": 100,
      "7. sınıf paragraf ek seti - Konu, başlık ve ana düşünce": 40,
      "7. sınıf paragraf ek seti - Yardımcı düşünce ve çıkarım": 30,
      "7. sınıf paragraf ek seti - Paragraf yapısı ve tamamlama": 25,
      "7. sınıf paragraf ek seti - Anlatım biçimleri ve metin türleri": 25,
      "7. sınıf paragraf ek seti - Görsel okuma ve sözel mantık": 30
    },
    8: {
      "Konu bulma": 45,
      "Ana düşünce": 65,
      "Yardımcı düşünce": 65,
      "LGS tarzı yeni nesil paragraf soruları": 60,
      "Metinler arası karşılaştırma": 30,
      "Tablo-grafik-görsel okuma": 40,
      "Sözel mantık destekli paragraf soruları": 40,
      "Çıkarım yapma": 35,
      "Zaman yönetimi": 20,
      "8. sınıf paragraf ek seti - Parçada anlam": 50,
      "8. sınıf paragraf ek seti - Metin türleri": 35,
      "8. sınıf paragraf ek seti - Görsel ve grafik okuma": 35,
      "8. sınıf paragraf ek seti - Sözel mantık": 30
    }
  };
  [5, 6, 7, 8].forEach((grade) => {
    Object.entries(weightedTargets[grade]).forEach(([topic, topicTarget]) => {
      const existing = baseQuestions.filter((question) => question.grade === grade && question.topic === topic).slice(0, topicTarget);
      const group = [...existing];
      let index = 0;
      while (group.length < topicTarget) {
        group.push(generatedQuestion(grade, topic, index + existing.length));
        index += 1;
      }
      balanced.push(...group);
    });
  });
  return balanced;
}

questionBank = [
  ...(Array.isArray(window.DEFINE5_QUESTIONS) ? window.DEFINE5_QUESTIONS : []),
  ...(Array.isArray(window.PARAGRAPH6_QUESTIONS) ? window.PARAGRAPH6_QUESTIONS : []),
  ...(Array.isArray(window.PARAGRAPH7_QUESTIONS) ? window.PARAGRAPH7_QUESTIONS : []),
  ...(Array.isArray(window.PARAGRAPH7_FINAL_QUESTIONS) ? window.PARAGRAPH7_FINAL_QUESTIONS : []),
  ...(Array.isArray(window.PARAGRAPH7_TURKCE_QUESTIONS) ? window.PARAGRAPH7_TURKCE_QUESTIONS : []),
  ...(Array.isArray(window.PARAGRAPH8_QUESTIONS) ? window.PARAGRAPH8_QUESTIONS : []),
  ...(Array.isArray(window.PARAGRAPH8_MEB_QUESTIONS) ? window.PARAGRAPH8_MEB_QUESTIONS : [])
]
  .map((question) => ({ ...question, id: makeQuestionId(question) }));
const baseQuestionIds = new Set(questionBank.map((question) => question.id));

const CONTENT_VERSION = 12;
let state = loadState();
let selectedCount = 5;
let activeTopic = topics[0];
let activePracticeId = null;
let practiceAnswersVisible = false;
let practiceJustCompleted = false;
let pendingGrade = state.grade;
let quiz = null;
let syncInProgress = false;
const QUESTION_BANK_PASSWORD = "KOCU2026";
let questionBankUnlocked = false;
let editingQuestionId = null;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
const remoteConfig = window.PARAGRAF_KOCU_SUPABASE || {};
let remoteDb = null;

function getRemoteDb() {
  if (!remoteDb && remoteConfig.url && remoteConfig.key && window.supabase) {
    remoteDb = window.supabase.createClient(remoteConfig.url, remoteConfig.key);
  }
  return remoteDb;
}

function isRemoteReady() {
  return Boolean(getRemoteDb());
}

function setSyncStatus(message, type = "info") {
  const node = $("#syncStatus");
  if (!node) return;
  node.textContent = message;
  node.classList.toggle("is-ok", type === "ok");
  node.classList.toggle("is-warn", type === "warn");
}

async function remoteTry(task, fallback = null) {
  if (!isRemoteReady()) return fallback;
  try {
    const result = await Promise.race([
      task(),
      new Promise((_, reject) => setTimeout(() => reject(new Error("Supabase zaman aşımı")), 7000))
    ]);
    if (result?.error) throw result.error;
    return result;
  } catch (error) {
    console.warn("Supabase bağlantısı:", error);
    setSyncStatus("Yerel kayıt aktif; Supabase bağlantısı bekliyor.", "warn");
    return fallback;
  }
}

function ensureSyncQueue() {
  if (!Array.isArray(state.syncQueue)) state.syncQueue = [];
  return state.syncQueue;
}

function pendingSyncCount() {
  return ensureSyncQueue().length;
}

function persistStateOnly() {
  localStorage.setItem("paragrafKocuState", JSON.stringify(state));
}

function updatePendingSyncStatus() {
  const count = pendingSyncCount();
  if (count > 0) setSyncStatus(`Yerel kayıt aktif; ${count} kayıt Supabase için bekliyor.`, "warn");
}

function queueSync(type, payload, key) {
  const queue = ensureSyncQueue();
  const itemKey = key || `${type}:${Date.now()}:${Math.random().toString(36).slice(2)}`;
  const existing = queue.find((item) => item.key === itemKey);
  if (existing) {
    existing.payload = payload;
    existing.queuedAt = new Date().toISOString();
  } else {
    queue.push({ type, key: itemKey, payload, queuedAt: new Date().toISOString() });
  }
  persistStateOnly();
  updatePendingSyncStatus();
}

async function syncQueuedRecords() {
  const queue = ensureSyncQueue();
  if (syncInProgress || !isRemoteReady() || !queue.length) {
    updatePendingSyncStatus();
    return 0;
  }
  syncInProgress = true;
  let synced = 0;
  const remaining = [];
  for (const item of queue) {
    const ok = await pushQueuedRecord(item);
    if (ok) synced += 1;
    else remaining.push(item);
  }
  state.syncQueue = remaining;
  persistStateOnly();
  syncInProgress = false;
  if (synced > 0 && remaining.length === 0) setSyncStatus(`${synced} kayıt senkronize edildi.`, "ok");
  else if (synced > 0) setSyncStatus(`${synced} kayıt gönderildi; ${remaining.length} kayıt bekliyor.`, "warn");
  else updatePendingSyncStatus();
  return synced;
}

async function pushQueuedRecord(item) {
  if (!isRemoteReady()) return false;
  if (item.type === "student") {
    return Boolean(await sendStudentPayload(item.payload));
  }
  if (item.type === "attempt") {
    return Boolean(await remoteTry(() => remoteDb.from("attempts").insert(item.payload), null));
  }
  if (item.type === "mistake") {
    return Boolean(await remoteTry(() => remoteDb.from("mistakes").upsert(item.payload, { onConflict: "student_key,question_id" }), null));
  }
  if (item.type === "customQuestion") {
    return Boolean(await remoteTry(() => remoteDb.from("custom_questions").upsert(item.payload), null));
  }
  if (item.type === "deleteQuestion") {
    return Boolean(await remoteTry(() => remoteDb.from("custom_questions").upsert(item.payload), null));
  }
  if (item.type === "class") {
    return Boolean(await remoteTry(() => remoteDb.from("classes").upsert(item.payload, { onConflict: "class_code" }), null));
  }
  return true;
}

async function remoteUpsertClassLegacy() {
  if (!isRemoteReady()) return;
  await remoteTry(() => remoteDb.from("classes").upsert({
    class_code: state.teacherClassCode,
    teacher_name: "Öğretmen"
  }, { onConflict: "class_code" }));
}

async function remoteUpsertClass() {
  if (!isRemoteReady()) return;
  const payload = {
    class_code: state.teacherClassCode,
    teacher_name: "Öğretmen",
    daily_task: state.dailyTask || null
  };
  const result = await remoteTry(() => remoteDb.from("classes").upsert(payload, { onConflict: "class_code" }), null);
  if (!result) queueSync("class", payload, `class:${payload.class_code}`);
}

async function remoteLoadDailyTask(code = state.classCode || state.teacherClassCode) {
  if (!isRemoteReady() || !code) return null;
  const result = await remoteTry(() => remoteDb.from("classes").select("daily_task").eq("class_code", code).maybeSingle(), null);
  const task = result?.data?.daily_task;
  if (!task) return null;
  state.dailyTask = task;
  persistStateOnly();
  return task;
}

async function remoteUpsertStudent() {
  if (!state.studentName?.trim()) return;
  const payload = buildCurrentStudentPayload();
  if (!isRemoteReady()) {
    queueSync("student", payload, `student:${payload.student_key}`);
    return;
  }
  const result = await sendStudentPayload(payload);
  if (result) {
    state.syncQueue = ensureSyncQueue().filter((item) => item.key !== `student:${payload.student_key}`);
    persistStateOnly();
    setSyncStatus("Supabase bağlantısı aktif.", "ok");
    syncQueuedRecords();
  } else {
    queueSync("student", payload, `student:${payload.student_key}`);
  }
}

function buildCurrentStudentPayload() {
  const code = state.classCode || state.teacherClassCode;
  return {
    student_key: studentKey(state.studentName, code),
    class_code: code,
    name: state.studentName.trim(),
    grade: Number(state.grade),
    stats: { ...state.stats, practiceCompleted: state.practiceCompleted || [] },
    topic_stats: state.topicStats,
    mistake_book: state.mistakeBook || [],
    question_times: state.questionTimes || [],
    assignments: state.assignments || [],
    updated_at: new Date().toISOString()
  };
}

async function sendStudentPayload(payload) {
  if (!isRemoteReady()) return null;
  return remoteTry(() => remoteDb.from("students").upsert(payload, { onConflict: "student_key" }), null);
}

function buildStudentPayloadFromProfile(student, key, code) {
  return {
    student_key: key,
    class_code: code,
    name: (student.name || "").trim(),
    grade: Number(student.grade || state.grade),
    stats: { ...(student.stats || { solved: 0, correct: 0, wrong: 0, blank: 0, seconds: 0, streak: 0 }), practiceCompleted: student.practiceCompleted || student.stats?.practiceCompleted || [] },
    topic_stats: student.topicStats || {},
    mistake_book: student.mistakeBook || [],
    question_times: student.questionTimes || [],
    assignments: student.assignments || [],
    updated_at: new Date().toISOString()
  };
}

async function remoteUpsertStudentProfile(student, key, code) {
  const payload = buildStudentPayloadFromProfile(student, key, code);
  if (!isRemoteReady()) {
    queueSync("student", payload, `student:${key}`);
    return;
  }
  const result = await sendStudentPayload(payload);
  if (!result) queueSync("student", payload, `student:${key}`);
}

async function remoteLoadStudent(name, code) {
  if (!isRemoteReady()) return null;
  const result = await remoteTry(() => remoteDb.from("students").select("*").eq("student_key", studentKey(name, code)).maybeSingle(), null);
  const data = result?.data;
  if (!data) return null;
  const attemptsResult = await remoteTry(() => remoteDb.from("attempts").select("*").eq("student_key", studentKey(name, code)).order("created_at", { ascending: true }), { data: [] });
  return {
    name: data.name,
    grade: String(data.grade),
    stats: data.stats || {},
    topicStats: data.topic_stats || {},
    mistakeBook: data.mistake_book || [],
    questionTimes: data.question_times || [],
    answers: attemptsToAnswers(attemptsResult?.data || []),
    assignments: data.assignments || [],
    practiceCompleted: data.stats?.practiceCompleted || []
  };
}

async function remoteSaveAttempt(record) {
  if (!state.studentName?.trim()) return;
  const code = state.classCode || state.teacherClassCode;
  const payload = {
    student_key: studentKey(state.studentName, code),
    class_code: code,
    name: state.studentName.trim(),
    grade: record.grade,
    topic: record.topic,
    question_id: record.id,
    is_correct: record.correct,
    is_blank: record.blank,
    spent_seconds: record.spent
  };
  const key = `attempt:${payload.student_key}:${record.id}:${record.at}`;
  if (!isRemoteReady()) {
    queueSync("attempt", payload, key);
    return;
  }
  const result = await remoteTry(() => remoteDb.from("attempts").insert(payload), null);
  if (!result) queueSync("attempt", payload, key);
  else syncQueuedRecords();
}

async function remoteUpsertMistake(item) {
  if (!state.studentName?.trim()) return;
  const code = state.classCode || state.teacherClassCode;
  const payload = {
    student_key: studentKey(state.studentName, code),
    class_code: code,
    question_id: item.id,
    grade: item.grade,
    topic: item.topic,
    status: item.status,
    miss_count: item.missCount || 1,
    question: item,
    updated_at: new Date().toISOString()
  };
  const key = `mistake:${payload.student_key}:${item.id}`;
  if (!isRemoteReady()) {
    queueSync("mistake", payload, key);
    return;
  }
  const result = await remoteTry(() => remoteDb.from("mistakes").upsert(payload, { onConflict: "student_key,question_id" }), null);
  if (!result) queueSync("mistake", payload, key);
  else syncQueuedRecords();
}

async function remoteLoadClassroom(code = state.teacherClassCode) {
  if (!isRemoteReady()) return [];
  const result = await remoteTry(() => remoteDb.from("students").select("*").eq("class_code", code).order("updated_at", { ascending: false }), { data: [] });
  const data = result?.data || [];
  const attemptsResult = await remoteTry(() => remoteDb.from("attempts").select("*").eq("class_code", code).order("created_at", { ascending: true }), { data: [] });
  const attemptsByStudent = (attemptsResult?.data || []).reduce((groups, attempt) => {
    groups[attempt.student_key] = groups[attempt.student_key] || [];
    groups[attempt.student_key].push(attempt);
    return groups;
  }, {});
  return (data || []).map((student) => ({
    name: student.name,
    grade: String(student.grade),
    stats: { ...(student.stats || {}), practiceCompleted: student.practiceCompleted || student.stats?.practiceCompleted || [] },
    topicStats: student.topic_stats || {},
    mistakeBook: student.mistake_book || [],
    questionTimes: student.question_times || [],
    answers: attemptsToAnswers(attemptsByStudent[student.student_key] || []),
    assignments: student.assignments || [],
    practiceCompleted: student.stats?.practiceCompleted || []
  }));
}

function attemptsToAnswers(attempts) {
  return (attempts || []).map((attempt) => ({
    id: attempt.question_id,
    grade: attempt.grade,
    topic: attempt.topic,
    correct: Boolean(attempt.is_correct),
    blank: Boolean(attempt.is_blank),
    answer: attempt.is_blank ? null : "",
    spent: attempt.spent_seconds || 0,
    at: attempt.created_at
  }));
}

async function remoteSaveCustomQuestion(question) {
  const payload = {
    id: question.id,
    class_code: state.teacherClassCode,
    grade: question.grade,
    topic: question.topic,
    difficulty: question.difficulty,
    outcome: question.outcome,
    text: question.text,
    stem: question.stem,
    options: question.options,
    answer: question.answer,
    solution: question.solution,
    wrong: question.wrong,
    strategy: question.strategy,
    hint: question.hint
  };
  const key = `customQuestion:${question.id}`;
  if (!isRemoteReady()) {
    queueSync("customQuestion", payload, key);
    return;
  }
  const result = await remoteTry(() => remoteDb.from("custom_questions").upsert(payload), null);
  if (!result) queueSync("customQuestion", payload, key);
  else syncQueuedRecords();
}

async function remoteSaveCustomPracticePassage(passage) {
  const payload = {
    id: passage.id,
    class_code: state.teacherClassCode,
    grade: passage.grade,
    topic: passage.focus,
    difficulty: passage.difficulty,
    outcome: "__practice_passage__",
    text: passage.text,
    stem: passage.title,
    options: ["-", "-", "-", "-"],
    answer: "A",
    solution: JSON.stringify({ prompts: passage.prompts, source: passage.source || "Öğretmen" }),
    wrong: "",
    strategy: "Öğretmen tarafından eklenen alıştırma paragrafı",
    hint: ""
  };
  const key = `customPractice:${passage.id}`;
  if (!isRemoteReady()) {
    queueSync("customQuestion", payload, key);
    return;
  }
  const result = await remoteTry(() => remoteDb.from("custom_questions").upsert(payload), null);
  if (!result) queueSync("customQuestion", payload, key);
  else syncQueuedRecords();
}

async function remoteSaveDeletedQuestion(question) {
  const payload = {
    id: `delete_${question.id}`,
    class_code: state.teacherClassCode,
    grade: Number(question.grade || state.grade || 5),
    topic: "__SILINDI__",
    difficulty: "Silindi",
    outcome: "Öğretmen tarafından silinen soru",
    text: question.id,
    stem: "Silinen soru",
    options: ["-", "-", "-", "-"],
    answer: "A",
    solution: "Bu soru öğretmen tarafından havuzdan kaldırıldı.",
    wrong: "",
    strategy: "",
    hint: ""
  };
  const key = `deleteQuestion:${question.id}`;
  if (!isRemoteReady()) {
    queueSync("deleteQuestion", payload, key);
    return;
  }
  const result = await remoteTry(() => remoteDb.from("custom_questions").upsert(payload), null);
  if (!result) queueSync("deleteQuestion", payload, key);
  else syncQueuedRecords();
}

async function remoteLoadCustomQuestions() {
  if (!isRemoteReady()) return;
  const codes = [state.teacherClassCode, state.classCode].filter(Boolean);
  if (!codes.length) return;
  const result = await remoteTry(() => remoteDb.from("custom_questions").select("*").in("class_code", codes), { data: [] });
  const data = result?.data || [];
  const deletedIds = new Set(state.deletedQuestionIds || []);
  const remoteQuestions = [];
  const remotePracticePassages = [];
  (data || []).forEach((item) => {
    if (String(item.id || "").startsWith("delete_")) {
      deletedIds.add(String(item.id).slice("delete_".length));
      return;
    }
    if (item.outcome === "__practice_passage__") {
      let details = {};
      try {
        details = JSON.parse(item.solution || "{}");
      } catch {
        details = {};
      }
      remotePracticePassages.push({
        id: item.id,
        grade: item.grade,
        focus: item.topic,
        difficulty: item.difficulty,
        title: item.stem,
        text: item.text,
        prompts: details.prompts || [
          ["Bu paragrafın konusu nedir?", "Öğretmen örnek cevabı eklemiştir."],
          ["Ana fikir nedir?", "Öğretmen örnek cevabı eklemiştir."],
          ["Bu metne hangi başlık uygun olur?", item.stem],
          ["Hangi anlatım biçimi kullanılmıştır?", "Öğretmen örnek cevabı eklemiştir."],
          ["Metinden hangi çıkarıma ulaşılabilir?", "Öğretmen örnek cevabı eklemiştir."]
        ],
        source: details.source || "Öğretmen"
      });
      return;
    }
    remoteQuestions.push({
    id: item.id,
    grade: item.grade,
    topic: item.topic,
    difficulty: item.difficulty,
    outcome: item.outcome,
    text: item.text,
    stem: item.stem,
    options: item.options,
    answer: item.answer,
    solution: item.solution,
    wrong: item.wrong,
    strategy: item.strategy,
    hint: item.hint
    });
  });
  const merged = new Map((state.customQuestions || []).map((question) => [question.id, question]));
  remoteQuestions.forEach((question) => merged.set(question.id, question));
  state.deletedQuestionIds = Array.from(deletedIds);
  state.customQuestions = Array.from(merged.values()).filter((question) => !deletedIds.has(question.id));
  if (remotePracticePassages.length) {
    const practiceMerged = new Map((state.customPracticePassages || []).map((passage) => [passage.id, passage]));
    remotePracticePassages.forEach((passage) => practiceMerged.set(passage.id, passage));
    state.customPracticePassages = Array.from(practiceMerged.values());
  }
  persistStateOnly();
}

function loadState() {
  const fallback = {
    contentVersion: CONTENT_VERSION,
    grade: "5",
    studentName: "",
    classCode: "",
    teacherClassCode: "PK2026",
    classrooms: {},
    customQuestions: [],
    customPracticePassages: [],
    deletedQuestionIds: [],
    mistakeBook: [],
    questionTimes: [],
    stats: { solved: 0, correct: 0, wrong: 0, blank: 0, seconds: 0, streak: 0 },
    topicStats: {},
    answers: [],
    syncQueue: [],
    dailyTask: null,
    assignments: [],
    practiceNotes: {},
    practiceCompleted: []
  };

  try {
    const saved = JSON.parse(localStorage.getItem("paragrafKocuState") || "{}");
    if (saved.contentVersion !== CONTENT_VERSION) return fallback;
    return { ...fallback, ...saved };
  } catch {
    return fallback;
  }
}

function saveState() {
  syncCurrentStudent();
  localStorage.setItem("paragrafKocuState", JSON.stringify(state));
  remoteUpsertStudent();
}

function gradeQuestions(grade = state.grade) {
  return [...questionBank, ...(state.customQuestions || [])].filter((question) => question.grade === Number(grade));
}

function normalizePracticeFocus(focus = "") {
  const value = String(focus);
  const fixes = new Map([
    ["??kar?m yapma", "Çıkarım yapma"],
    ["Ana d???nce", "Ana düşünce"],
    ["Ba?l?k bulma", "Başlık bulma"],
    ["Yard?mc? d???nce", "Yardımcı düşünce"],
    ["Betimleyici anlat?m", "Betimleyici anlatım"],
    ["Hik?ye unsurlar?", "Hikâye unsurları"],
    ["Metnin amac?", "Metnin amacı"],
    ["Anlat?m bi?imleri", "Anlatım biçimleri"],
    ["D???nceyi geli?tirme yollar?", "Düşünceyi geliştirme yolları"],
    ["Paragraf?n yap?s?", "Paragrafın yapısı"],
    ["Tart??mac? anlat?m", "Tartışmacı anlatım"],
    ["Metinler aras? kar??la?t?rma", "Metinler arası karşılaştırma"],
    ["Dil ve anlat?m", "Dil ve anlatım"]
  ]);
  if (fixes.has(value)) return fixes.get(value);
  if (value.includes("kar") && value.includes("m yapma")) return "Çıkarım yapma";
  if (value.includes("Ana d")) return "Ana düşünce";
  if (value.includes("Ba") && value.includes("l") && value.includes("bulma")) return "Başlık bulma";
  if (value.includes("Yard")) return "Yardımcı düşünce";
  if (value.includes("Betimleyici")) return "Betimleyici anlatım";
  if (value.includes("Hik")) return "Hikâye unsurları";
  if (value.includes("amac")) return "Metnin amacı";
  if (value.includes("Anlat")) return "Anlatım biçimleri";
  if (value.includes("geli")) return "Düşünceyi geliştirme yolları";
  if (value.includes("Paragraf")) return "Paragrafın yapısı";
  if (value.includes("Tart")) return "Tartışmacı anlatım";
  if (value.includes("Metinler")) return "Metinler arası karşılaştırma";
  if (value.includes("Dil")) return "Dil ve anlatım";
  return value;
}

function allPracticePassages() {
  return [...practicePassages, ...(state.customPracticePassages || [])].map((passage) => ({
    ...passage,
    focus: normalizePracticeFocus(passage.focus)
  }));
}

function practicePassagesForGrade(grade = state.grade) {
  return allPracticePassages().filter((passage) => passage.grade === Number(grade));
}

function shuffleQuestions(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function questionIdFor(question) {
  return question?.id || makeQuestionId(question);
}

function solvedQuestionIdsForGrade(grade = state.grade) {
  return new Set((state.answers || [])
    .filter((answer) => String(answer.grade) === String(grade))
    .map((answer) => answer.id)
    .filter(Boolean));
}

function onlyUnsolvedQuestions(pool, grade = state.grade) {
  const solvedIds = solvedQuestionIdsForGrade(grade);
  return pool.filter((question) => !solvedIds.has(questionIdFor(question)));
}

function sampleQuestionForTopic(topic) {
  const gradePool = gradeQuestions(state.grade);
  return pickQuestions({ count: 1, topic })[0]
    || gradePool.find((question) => question.topic === topic || question.topic.includes(topic))
    || gradePool[0];
}

function pickQuestions({ count = 5, grade = state.grade, topic = null, difficulty = null } = {}) {
  const gradePool = gradeQuestions(grade);
  let pool = gradePool;
  if (topic) {
    const topicPool = pool.filter((question) => question.topic === topic || question.topic.includes(topic));
    pool = topicPool.length ? topicPool : gradePool;
  }
  if (difficulty) {
    const difficultyPool = pool.filter((question) => question.difficulty === difficulty);
    pool = difficultyPool.length ? difficultyPool : pool;
  }
  if (!pool.length) return [];
  const freshPool = onlyUnsolvedQuestions(pool, grade);
  if (!freshPool.length) return [];
  return shuffleQuestions(freshPool).slice(0, count);
}

function pickBalancedQuestions({ count = 10, grade = state.grade, topics: preferredTopics = null } = {}) {
  const gradePool = onlyUnsolvedQuestions(gradeQuestions(grade), grade);
  const topicNames = preferredTopics?.length ? preferredTopics : [...new Set(gradePool.map((question) => question.topic))];
  const buckets = topicNames
    .map((topic) => [topic, shuffleQuestions(gradePool.filter((question) => question.topic === topic))])
    .filter(([, bucket]) => bucket.length);
  if (!buckets.length) return [];

  const selected = [];
  let bucketIndex = Math.floor(Math.random() * buckets.length);
  while (selected.length < count) {
    const [, bucket] = buckets[bucketIndex % buckets.length];
    if (bucket.length) selected.push(bucket.shift());
    bucketIndex += 1;
    if (buckets.every(([, bucket]) => !bucket.length)) break;
  }
  return selected;
}

function availableTopicsForGrade(grade = state.grade) {
  return [...new Set(gradeQuestions(grade).map((question) => question.topic))];
}

function studentKey(name = state.studentName, code = state.classCode || state.teacherClassCode) {
  return `${code || "SINIFSIZ"}::${(name || "").trim().toLocaleLowerCase("tr-TR")}`;
}

function ensureClassroom(code = state.teacherClassCode) {
  if (!state.classrooms[code]) state.classrooms[code] = { code, students: {} };
  return state.classrooms[code];
}

function syncCurrentStudent() {
  if (!state.studentName?.trim()) return;
  const code = state.classCode || state.teacherClassCode;
  const room = ensureClassroom(code);
  room.students[studentKey(state.studentName, code)] = {
    name: state.studentName.trim(),
    grade: state.grade,
    stats: state.stats,
    topicStats: state.topicStats,
    mistakeBook: state.mistakeBook || [],
    questionTimes: state.questionTimes || [],
    answers: state.answers || [],
    assignments: state.assignments || [],
    practiceNotes: state.practiceNotes || {},
    practiceCompleted: state.practiceCompleted || [],
    updatedAt: new Date().toLocaleString("tr-TR")
  };
}

function resetStudentProgress(grade = state.grade) {
  state.grade = String(grade || state.grade || "5");
  state.stats = { solved: 0, correct: 0, wrong: 0, blank: 0, seconds: 0, streak: 0 };
  state.topicStats = {};
  state.mistakeBook = [];
  state.questionTimes = [];
  state.answers = [];
  state.assignments = [];
  state.practiceNotes = {};
  state.practiceCompleted = [];
}

function applyStudentProfile(source) {
  if (source) {
    state.grade = String(source.grade || state.grade);
    state.stats = source.stats || state.stats;
    state.topicStats = source.topicStats || {};
    state.mistakeBook = source.mistakeBook || [];
    state.questionTimes = source.questionTimes || [];
    state.answers = source.answers || state.answers || [];
    state.assignments = source.assignments || [];
    state.practiceNotes = source.practiceNotes || {};
    state.practiceCompleted = source.practiceCompleted || [];
  }
}

function loadStudentProfile(name, code, targetGrade = state.grade) {
  const cleanName = name.trim();
  const cleanCode = code.trim().toUpperCase();
  if (state.studentName?.trim()) syncCurrentStudent();
  const room = ensureClassroom(cleanCode);
  const profile = room?.students?.[studentKey(cleanName, cleanCode)];
  const selectedGrade = targetGrade || state.grade;
  state.studentName = cleanName;
  state.classCode = cleanCode;
  state.teacherClassCode = cleanCode;
  if (profile) applyStudentProfile(profile);
  else resetStudentProgress(selectedGrade);
  syncCurrentStudent();
  localStorage.setItem("paragrafKocuState", JSON.stringify(state));
  setSyncStatus(`${cleanName} ${cleanCode} sınıfına katıldı.`, "ok");

  remoteLoadDailyTask(cleanCode).then(() => renderDashboard());
  remoteLoadStudent(cleanName, cleanCode).then((remoteProfile) => {
    if (studentKey(state.studentName, state.classCode) !== studentKey(cleanName, cleanCode)) return;
    if (remoteProfile) {
      applyStudentProfile(remoteProfile);
      syncCurrentStudent();
      saveState();
      renderAll();
      return;
    }
    remoteUpsertStudent();
  });
}

function smartRecommendations() {
  const weak = weakestTopic();
  if (!weak) return [`Bugün ${gradePlan[state.grade].focus[0]} konusundan 10 soru çöz.`, "İlk yanlışlarından sonra özel çalışma planın oluşacak."];
  const secondary = gradePlan[state.grade].focus.find((topic) => topic !== weak) || weak;
  return [`Bugün 10 ${weak} sorusu + 5 ${secondary} tekrarı çöz.`, `${weak} için strateji kartını oku ve yanlış defterindeki soruları tekrar çöz.`];
}

function setView(view) {
  $$(".view").forEach((node) => node.classList.remove("is-visible"));
  $(`#${view}View`).classList.add("is-visible");
  $$(".nav-item").forEach((button) => button.classList.toggle("is-active", button.dataset.view === view));
  const titles = {
    dashboard: "Bugünkü Görevin",
    topics: "Konu Çalış",
    practice: "Alıştırma",
    strategies: "Stratejiler",
    mistakes: "Yanlışlarım",
    report: "Gelişim Raporum",
    questionBank: "Soru Havuzu",
    teacher: "Öğretmen Paneli"
  };
  $("#viewTitle").textContent = titles[view];
}

function activeDailyTask() {
  const task = state.dailyTask || {};
  if (!task.title?.trim() && !task.text?.trim()) return null;
  return task;
}

function syncCountButtons(count) {
  const targetCount = Number(count) || selectedCount;
  selectedCount = targetCount;
  $$(".segmented").forEach((button) => {
    button.classList.toggle("is-selected", Number(button.dataset.count) === targetCount);
  });
}

function renderDashboard() {
  const plan = gradePlan[state.grade];
  const teacherTask = activeDailyTask();
  $("#dailyHeadline").textContent = teacherTask?.title || plan.headline;
  $("#dailySubline").textContent = teacherTask?.text || plan.subline;
  const pill = document.querySelector(".hero-copy .pill");
  if (pill) pill.textContent = teacherTask ? "Öğretmen duyurusu" : "Bugün";
  if (teacherTask?.count) syncCountButtons(teacherTask.count);
  const accuracy = state.stats.solved ? Math.round((state.stats.correct / state.stats.solved) * 100) : 0;
  const avgTime = state.stats.solved ? Math.round(state.stats.seconds / state.stats.solved) : 0;

  $("#quickStats").innerHTML = [
    ["Çözülen", state.stats.solved],
    ["Doğru", state.stats.correct],
    ["Yanlış", state.stats.wrong],
    ["Doğruluk", `${accuracy}%`]
  ].map(([label, value]) => `<div class="stat-card"><span>${label}</span><strong>${value}</strong></div>`).join("");

  $("#weeklyRecommendations").innerHTML = smartRecommendations().map((item) => `<li>${item}</li>`).join("");

  const badges = [];
  if (state.stats.streak >= 5) badges.push("5 Gün Üst Üste Paragraf Çözdün");
  if ((state.topicStats["Ana düşünce"]?.correct || 0) >= 3) badges.push("Ana Düşünce Ustası");
  if (avgTime && avgTime <= 55) badges.push("Hızlı Okuyucu");
  if (state.grade === "8" && state.stats.correct >= 5) badges.push("LGS Paragraf Kahramanı");
  if (!badges.length) badges.push("İlk Antrenman Hazır");
  $("#badgeList").innerHTML = badges.map((badge) => `<span class="badge"><i data-lucide="medal"></i>${badge}</span>`).join("");
}

function renderTopics() {
  const filter = $("#topicFilter");
  const gradeTopics = availableTopicsForGrade(state.grade);
  if (!gradeTopics.includes(activeTopic)) activeTopic = gradeTopics[0];
  const previousFilter = filter.value || "Tüm konular";
  filter.innerHTML = ["Tüm konular", ...gradeTopics].map((topic) => `<option>${topic}</option>`).join("");
  filter.value = [...filter.options].some((option) => option.value === previousFilter) ? previousFilter : "Tüm konular";
  const visibleTopics = filter.value !== "Tüm konular" ? gradeTopics.filter((topic) => topic === filter.value) : gradeTopics;

  $("#topicList").innerHTML = visibleTopics.map((topic) => {
    const stat = state.topicStats[topic] || { correct: 0, wrong: 0 };
    const total = stat.correct + stat.wrong;
    const percent = total ? Math.round((stat.correct / total) * 100) : 0;
    return `<button class="topic-card ${topic === activeTopic ? "is-active" : ""}" data-topic="${topic}">
      <strong>${topic}</strong><span>${total ? `${percent}% başarı` : "Çalışma bekliyor"}</span>
    </button>`;
  }).join("");

  renderTopicDetail(activeTopic);
}

function renderTopicDetail(topic) {
  const sample = sampleQuestionForTopic(topic);
  if (!sample) {
    $("#topicDetail").innerHTML = `<div class="empty-state">Bu konu için gösterilecek soru bulunamadı.</div>`;
    return;
  }
  $("#topicDetail").innerHTML = `
    <p class="eyebrow">${state.grade}. sınıf</p>
    <h2>${topic}</h2>
    <p>${topic} çalışmasında önce soru kökündeki hedefi belirlersin, sonra metindeki ipucu ifadelerini işaretleyerek seçenekleri elersin. ${gradePlan[state.grade].subline}</p>
    <div class="question-field"><small>Örnek çözümlü soru</small><strong>${sample.stem}</strong></div>
    <div class="paragraph-text">${sample.text}</div>
    <div class="solution-box"><strong>Çözüm stratejisi:</strong> ${sample.strategy}<br><strong>Ayrıntılı çözüm:</strong> ${sample.solution}</div>
    <div class="lesson-grid">
      <button class="lesson-button" data-difficulty="Kolay">Kolay test</button>
      <button class="lesson-button" data-difficulty="Orta">Orta test</button>
      <button class="lesson-button" data-difficulty="Zor">Zor test</button>
    </div>
  `;
}

function practiceFilters() {
  return {
    grade: $("#practiceGradeFilter")?.value || String(state.grade),
    focus: $("#practiceFocusFilter")?.value || "Tüm konular"
  };
}

function filteredPracticePassages() {
  const { grade, focus } = practiceFilters();
  return allPracticePassages().filter((passage) => {
    if (grade !== "all" && String(passage.grade) !== grade) return false;
    if (focus !== "Tüm konular" && passage.focus !== focus) return false;
    return true;
  });
}

function completedPracticeSet() {
  if (!Array.isArray(state.practiceCompleted)) state.practiceCompleted = [];
  return new Set(state.practiceCompleted);
}

function availablePracticePassages() {
  const completed = completedPracticeSet();
  return filteredPracticePassages().filter((passage) => !completed.has(passage.id));
}

function renderPracticeFilters() {
  const gradeFilter = $("#practiceGradeFilter");
  const focusFilter = $("#practiceFocusFilter");
  if (!gradeFilter || !focusFilter) return;

  const previousGrade = gradeFilter.value || String(state.grade);
  gradeFilter.innerHTML = `
    <option value="${state.grade}">${state.grade}. sınıf</option>
    <option value="all">Tüm sınıflar</option>
    <option value="5">5. sınıf</option>
    <option value="6">6. sınıf</option>
    <option value="7">7. sınıf</option>
    <option value="8">8. sınıf</option>
  `;
  const gradeValues = Array.from(gradeFilter.options).map((option) => option.value);
  gradeFilter.value = gradeValues.includes(previousGrade) ? previousGrade : String(state.grade);

  const currentFocus = focusFilter.value || "Tüm konular";
  const focusSet = new Set(allPracticePassages()
    .filter((passage) => gradeFilter.value === "all" || String(passage.grade) === gradeFilter.value)
    .map((passage) => passage.focus));
  const focusOptions = ["Tüm konular", ...Array.from(focusSet).sort((a, b) => a.localeCompare(b, "tr"))];
  focusFilter.innerHTML = focusOptions.map((focus) => `<option>${escapeHtml(focus)}</option>`).join("");
  focusFilter.value = focusOptions.includes(currentFocus) ? currentFocus : "Tüm konular";
}

function selectPracticePassage(id) {
  activePracticeId = id;
  practiceAnswersVisible = false;
  practiceJustCompleted = false;
  renderPractice();
}

function renderPractice() {
  const readerNode = $("#practiceReader");
  if (!readerNode) return;
  renderPracticeFilters();
  const allPassages = filteredPracticePassages();
  const available = availablePracticePassages();
  const completed = completedPracticeSet();
  const completedInFilter = allPassages.filter((passage) => completed.has(passage.id)).length;
  if (!available.some((passage) => passage.id === activePracticeId)) {
    activePracticeId = available[0]?.id || null;
    practiceAnswersVisible = false;
    practiceJustCompleted = false;
  }
  const selected = available.find((passage) => passage.id === activePracticeId);

  if (!allPassages.length) {
    readerNode.innerHTML = `<div class="empty-state">Bu seçime uygun paragraf bulunamadı.</div>`;
    return;
  }

  if (!selected) {
    readerNode.innerHTML = `
      <div class="practice-complete">
        <span class="pill">Tamamlandı</span>
        <h2>Bu bölümdeki tüm paragrafları bitirdin.</h2>
        <p>${allPassages.length} paragrafın tamamı çalışıldı. İstersen bu sınıf/konu için alıştırmaları yeniden başlatabilirsin.</p>
        <button class="secondary-action" id="resetPracticeSet" type="button"><i data-lucide="rotate-ccw"></i><span>Bu bölümü yeniden başlat</span></button>
      </div>
    `;
    window.lucide?.createIcons();
    return;
  }

  const notes = state.practiceNotes?.[selected.id] || {};
  readerNode.innerHTML = `
    <div class="practice-reader-head">
      <div>
        <span class="pill">${selected.grade}. sınıf</span>
        <h2>${escapeHtml(selected.title)}</h2>
        <p>${escapeHtml(selected.focus)} · ${escapeHtml(selected.difficulty)} · ${completedInFilter}/${allPassages.length} tamamlandı</p>
      </div>
      <div class="practice-progress-pill">${available.length} paragraf kaldı</div>
    </div>
    ${practiceJustCompleted ? `<div class="practice-done-note">Paragraf tamamlandı. Sıradaki paragraf hazır.</div>` : ""}
    <div class="practice-text">${escapeHtml(selected.text)}</div>
    <div class="practice-prompt-grid">
      ${selected.prompts.map(([question, sample], index) => `
        <label class="practice-answer-box">
          <span>${escapeHtml(question)}</span>
          <textarea data-practice-note="${index}" rows="3" placeholder="Kendi cevabını yaz">${escapeHtml(notes[index] || "")}</textarea>
          <em class="practice-sample ${practiceAnswersVisible ? "is-visible" : ""}">Örnek cevap: ${escapeHtml(sample)}</em>
        </label>
      `).join("")}
    </div>
    <div class="practice-actions">
      <button class="primary-action" id="togglePracticeAnswers" type="button"><i data-lucide="${practiceAnswersVisible ? "eye-off" : "eye"}"></i><span>${practiceAnswersVisible ? "Örnek cevapları gizle" : "Örnek cevapları göster"}</span></button>
      <button class="primary-action" id="completePracticePassage" type="button"><i data-lucide="check"></i><span>Paragrafı tamamladım</span></button>
      <button class="secondary-action" id="clearPracticeNotes" type="button"><i data-lucide="eraser"></i><span>Cevaplarımı temizle</span></button>
    </div>
  `;
  window.lucide?.createIcons();
}

function savePracticeNote(passageId, index, value) {
  if (!state.practiceNotes) state.practiceNotes = {};
  if (!state.practiceNotes[passageId]) state.practiceNotes[passageId] = {};
  state.practiceNotes[passageId][index] = value;
  persistStateOnly();
}

function clearPracticeNotes() {
  if (!activePracticeId) return;
  if (!state.practiceNotes) state.practiceNotes = {};
  state.practiceNotes[activePracticeId] = {};
  persistStateOnly();
  renderPractice();
}

function completePracticePassage() {
  if (!activePracticeId) return;
  if (!Array.isArray(state.practiceCompleted)) state.practiceCompleted = [];
  if (!state.practiceCompleted.includes(activePracticeId)) state.practiceCompleted.push(activePracticeId);
  syncCurrentStudent();
  persistStateOnly();
  remoteUpsertStudent();
  const next = availablePracticePassages()[0];
  activePracticeId = next?.id || null;
  practiceAnswersVisible = false;
  practiceJustCompleted = Boolean(next);
  renderPractice();
}

function resetPracticeSet() {
  const ids = new Set(filteredPracticePassages().map((passage) => passage.id));
  state.practiceCompleted = (state.practiceCompleted || []).filter((id) => !ids.has(id));
  activePracticeId = null;
  practiceAnswersVisible = false;
  practiceJustCompleted = false;
  syncCurrentStudent();
  persistStateOnly();
  remoteUpsertStudent();
  renderPractice();
}

function pickRandomPractice() {
  const passages = availablePracticePassages();
  if (!passages.length) return;
  const otherPassages = passages.filter((passage) => passage.id !== activePracticeId);
  const pool = otherPassages.length ? otherPassages : passages;
  const next = pool[Math.floor(Math.random() * pool.length)];
  selectPracticePassage(next.id);
}

function weakestTopic() {
  let weakest = null;
  let score = Infinity;
  Object.entries(state.topicStats).forEach(([topic, stat]) => {
    const total = stat.correct + stat.wrong;
    if (total > 0) {
      const percent = stat.correct / total;
      if (percent < score) {
        score = percent;
        weakest = topic;
      }
    }
  });
  return weakest;
}

function renderMistakes() {
  const entries = Object.entries(state.topicStats).sort((a, b) => (b[1].wrong || 0) - (a[1].wrong || 0));
  const cards = (entries.length ? entries : gradePlan[state.grade].focus.map((topic) => [topic, { correct: 0, wrong: 0 }])).slice(0, 6);
  $("#mistakeAnalysis").innerHTML = cards.map(([topic, stat]) => {
    const total = stat.correct + stat.wrong;
    const wrongRate = total ? Math.round((stat.wrong / total) * 100) : 0;
    const feedback = total === 0
      ? `${topic} için henüz veri yok.`
      : wrongRate >= 50
        ? `${topic} sorularında gelişmen gerekiyor.`
        : `${topic} sorularında iyi ilerliyorsun.`;
    return `<div class="analysis-card">
      <span>${feedback}</span>
      <strong>${topic}</strong>
      <div class="meter"><span style="width:${wrongRate}%"></span></div>
    </div>`;
  }).join("");
  renderMistakeBook();
}

function renderMistakeBook() {
  const items = (state.mistakeBook || []).filter((item) => item.status !== "Öğrenildi");
  $("#mistakeBook").innerHTML = items.length ? items.map((item, index) => `
    <article class="mistake-entry">
      <strong>${item.topic}</strong>
      <p>${item.stem}</p>
      <span>${item.grade}. sınıf · ${item.status}</span>
      <button class="secondary-action retry-mistake" data-index="${index}"><i data-lucide="play"></i><span>Tekrar çöz</span></button>
    </article>
  `).join("") : `<article class="mistake-entry"><strong>Yanlış defterin boş</strong><p>Yanlış yaptığın sorular burada birikir.</p></article>`;
}

function renderStrategies() {
  const gradeTopics = availableTopicsForGrade(state.grade);
  const displayTopics = ["Konu bulma", "Ana fikir", ...gradeTopics.filter((topic) => !["Konu bulma", "Ana düşünce"].includes(topic))];
  $("#strategyGrid").innerHTML = displayTopics.map((topic) => `
    <article class="strategy-card">
      ${strategyCard(topic)}
    </article>
  `).join("");
}

function strategyCard(topic) {
  const strategy = strategyDetails(topic);
  return `
    <div class="strategy-head">
      <span>${strategy.tag}</span>
      <strong>${topic}</strong>
    </div>
    <p>${strategy.summary}</p>
    <div class="strategy-block">
      <b>Çözüm yolu</b>
      <ol>${strategy.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
    </div>
    <div class="strategy-note">
      <b>Dikkat:</b> ${strategy.trap}
    </div>
  `;
}

function strategyDetails(topic) {
  const library = {
    "Konu bulma": {
      tag: "Temel beceri",
      summary: "Metnin etrafında döndüğü ortak varlığı, olayı veya durumu bul.",
      steps: ["Soru kökünde senden konunun istendiğini gör.", "Metinde tekrar eden kişi, olay ve kavramları işaretle.", "Bu tekrarların hangi ortak başlıkta toplandığını söyle.", "Seçeneklerden metnin tamamını kapsayanı seç."],
      trap: "Tek bir ayrıntıyı konu sanma; konu metnin tamamını kapsamalıdır.",
      example: "Metinde Elif'in fidanı sulaması, toprağını kontrol etmesi ve yaprak çıkmasına sevinmesi anlatılıyorsa konu Elif'in fidan bakımıdır. Okul bahçesi sadece yer bilgisidir."
    },
    "Ana fikir": {
      tag: "Ana mesaj",
      summary: "Metnin okura vermek istediği temel dersi, düşünceyi veya sonucu bul.",
      steps: ["Önce metnin konusunu kısaca belirle.", "Yazar bu konuda ne demek istiyor, kendine sor.", "Son cümledeki sonuç veya öğüt bildiren ifadeye bak.", "Seçeneğin sadece ayrıntı değil, metnin genel mesajı olmasına dikkat et."],
      trap: "Ana fikir konu değildir. Konu 'kitap okumak' olabilir; ana fikir 'kitap okumak insanın düşünce dünyasını geliştirir' gibi yargı bildirir.",
      example: "Metin, kitap okuyan kişinin farklı hayatları tanıdığını ve kelime hazinesinin geliştiğini söylüyorsa ana fikir 'Kitap okumak insanı düşünce ve dil yönünden geliştirir.' olur."
    },
    "Ana düşünce": {
      tag: "Mesaj bulma",
      summary: "Yazarın okura vermek istediği asıl mesajı yakala.",
      steps: ["Önce metnin konusunu kısaca belirle.", "Son cümleye ve sonuç bildiren ifadelere bak.", "Metnin hangi düşünceyi desteklediğini bul.", "Seçeneğin bütün paragrafı kapsayıp kapsamadığını kontrol et."],
      trap: "Sadece konu söyleyen seçenek ana düşünce değildir; ana düşünce bir yargı bildirir.",
      example: "Konu 'düzenli çalışmak' olabilir; ana düşünce 'Düzenli çalışan öğrenci zor konuları zamanla başarabilir.' biçiminde mesaj verir."
    },
    "Yardımcı düşünce": {
      tag: "Kanıt kontrolü",
      summary: "Metinde açıkça bulunan destekleyici bilgileri ayırt et.",
      steps: ["Her seçeneği metindeki bir cümleyle eşleştir.", "Metinde karşılığı olmayan seçeneği ele.", "Değinilmemiştir sorularında özellikle olmayan bilgiyi ara."],
      trap: "Doğru görünen ama metinde geçmeyen bilgi çeldiricidir.",
      example: "Metin bisikletin çevreye katkısını söylüyorsa bu yardımcı düşüncedir; yarış kuralları geçmiyorsa değildir."
    },
    "Başlık bulma": {
      tag: "Kapsam seçimi",
      summary: "Metnin tamamını kısa ve doğru biçimde kapsayan ifadeyi seç.",
      steps: ["Metnin konusunu bul.", "Başlığın çok dar mı çok genel mi olduğunu denetle.", "Metnin ana olayını veya ana düşüncesini karşılayan başlığı seç."],
      trap: "Metindeki ilginç bir ayrıntı başlık gibi görünse de tüm metni kapsamayabilir.",
      example: "Sadece 'Teneffüs' değil, 'Düzenlenen Sınıf Kitaplığı' daha kapsayıcı olabilir."
    },
    "Hikâye unsurları": {
      tag: "Kim, nerede?",
      summary: "Olay, kişi, yer ve zaman bilgilerini düzenli biçimde çıkar.",
      steps: ["Kim var? sorusunu sor.", "Olay nerede ve ne zaman geçiyor, bul.", "Kişinin ne yaptığına bakarak olayı özetle."],
      trap: "Mekânı, sadece adı geçen ama olayın geçmediği yerle karıştırma.",
      example: "Ayşe dedesiyle köy yolundaysa yer köy yoludur."
    },
    "Çıkarım yapma": {
      tag: "İpucu okuma",
      summary: "Metinde yazmayan ama ipuçlarıyla kesinleşen sonucu bul.",
      steps: ["Metindeki davranış ve değişimleri işaretle.", "Bu davranışın ne gösterdiğini düşün.", "Aşırı kesin veya metne aykırı seçenekleri ele."],
      trap: "Tahmin ile çıkarımı karıştırma; çıkarım metinden destek almalıdır.",
      example: "Kutular başta boşken sonra doluyorsa öğrencilerin bilinçlendiği çıkarılabilir."
    },
    "Metnin amacı": {
      tag: "Yazar niyeti",
      summary: "Yazarın bilgilendirmek, uyarmak, ikna etmek veya düşündürmek isteyip istemediğini bul.",
      steps: ["Metindeki emir, öneri ve uyarı ifadelerini ara.", "Yazar okurdan bir davranış bekliyor mu, kontrol et.", "Amaç seçeneğini metnin tonu ile eşleştir."],
      trap: "Konu ile amacı karıştırma; konu ne anlatıldığı, amaç neden anlatıldığıdır.",
      example: "Koridorda koşmanın tehlikesi anlatılıyorsa amaç uyarmaktır."
    },
    "Neden-sonuç": {
      tag: "Bağ kurma",
      summary: "Bir olayın sebebini ve ortaya çıkan sonucu ayır.",
      steps: ["Çünkü, için, bu yüzden, dolayısıyla gibi bağlaçları işaretle.", "Neden? sorusuna cevap veren bölümü bul.", "Sonuç cümlesiyle karıştırmadığından emin ol."],
      trap: "Sonradan yapılan davranış neden olmayabilir; önce sebep, sonra sonuç gelir.",
      example: "Çantasını acele hazırladığı için defterini unutmuştur."
    },
    "Karşılaştırma": {
      tag: "Benzer-farklı",
      summary: "İki varlık, durum veya düşüncenin hangi yönlerden yan yana getirildiğini gör.",
      steps: ["Metindeki iki unsuru belirle.", "Daha, ise, kadar, farklı olarak gibi ipuçlarını ara.", "Seçenekte iki unsurun da bulunmasına dikkat et."],
      trap: "Sadece bir unsurdan söz eden seçenek karşılaştırmayı karşılamaz.",
      example: "Elektronik kitap ve basılı kitap özellikleri birlikte verilmişse karşılaştırılanlar bunlardır."
    },
    "Paragraf tamamlama": {
      tag: "Akış tamamlama",
      summary: "Boşluktan önceki düşüncenin yönünü koruyan cümleyi seç.",
      steps: ["Boşluktan önce olumlu mu olumsuz mu ilerliyor, belirle.", "Cümlenin özne ve konu zincirine uyup uymadığını kontrol et.", "Son cümle gibi davranıyorsa sonuç anlamı taşımalı."],
      trap: "Dil olarak güzel ama akışa uymayan cümle doğru değildir.",
      example: "Bağ kurulmadığında ifadesinden sonra olumsuz bir sonuç beklenir."
    },
    "Örtülü anlam": {
      tag: "Saklı mesaj",
      summary: "Doğrudan söylenmeyen anlamı davranış ve sonuçlardan çıkar.",
      steps: ["Kişinin ne yaptığına bak.", "Bu davranışın hangi duyguyu veya düşünceyi gösterdiğini bul.", "Metnin söylemediği kesin yargılardan kaçın."],
      trap: "Hiç, herkes, daima gibi kesin ifadeler çoğu zaman tuzaktır.",
      example: "Sınav öncesi tekrar yapan ve sakin kalan öğrencinin başarısında hazırlık etkilidir."
    },
    "Yorumlama": {
      tag: "Metne bağlı kal",
      summary: "Metinden destek alan yorumu seç, metni aşan genellemeleri ele.",
      steps: ["Seçenekteki yargının metinde dayanağını ara.", "Aşırı genelleme var mı kontrol et.", "Yazarın tutumuyla çelişmeyen seçeneği seç."],
      trap: "Kendi düşünceni değil, metnin izin verdiği yorumu seçmelisin.",
      example: "Bir örnekten bütün insanlar hakkında kesin sonuç çıkarılamaz."
    },
    "Cümle sıralama": {
      tag: "Paragraf kurma",
      summary: "Giriş, gelişme ve sonuç cümlelerini mantıklı sıraya koy.",
      steps: ["Tanıtıcı/giriş cümlesini bul.", "Sonra işlem veya olay basamaklarını sırala.", "Sonuç bildiren cümleyi sona yerleştir."],
      trap: "Sonuç cümlesini başa almak paragrafı bozar.",
      example: "Önce çalışma konusu, sonra hazırlık, en son sergi oluşması gelir."
    },
    "Düşüncenin akışını bozan cümle": {
      tag: "Konu zinciri",
      summary: "Metnin konu zincirinden kopan cümleyi belirle.",
      steps: ["Her cümlenin ortak konuya bağlanıp bağlanmadığını kontrol et.", "Farklı alana geçen cümleyi işaretle.", "Önceki ve sonraki cümleyle bağ kurmayanı seç."],
      trap: "Bilgi doğru olsa bile paragrafın konusu dışındaysa akışı bozar.",
      example: "Komşuluk metninde güneş paneli cümlesi konu dışıdır."
    },
    "Anlatım biçimleri": {
      tag: "Metin tonu",
      summary: "Metnin anlatma, betimleme, açıklama veya tartışma amacı taşıdığını ayırt et.",
      steps: ["Metin sahne mi çiziyor, bilgi mi veriyor, görüş mü savunuyor?", "Duyulara seslenen ayrıntıları ara.", "Yazar karşı görüşe cevap veriyorsa tartışma olabilir."],
      trap: "Her olay anlatımı öyküleme değildir; olay akışı belirgin olmalıdır.",
      example: "Sis, sazlar, kuş sesleri gibi ayrıntılar betimleyici anlatımı gösterir."
    },
    "Düşünceyi geliştirme yolları": {
      tag: "Destek bulma",
      summary: "Yazarın düşüncesini nasıl güçlendirdiğini belirle.",
      steps: ["Örnek varsa örneklendirme olabilir.", "Sayı, oran, yüzde varsa sayısal veri aranır.", "Uzman veya tanınmış kişi sözü varsa tanık gösterme olabilir."],
      trap: "Tanım cümlesi ile örnek cümlesini karıştırma.",
      example: "Yüzde 60 ifadesi sayısal veriden yararlanmadır."
    },
    "LGS tarzı yeni nesil paragraf soruları": {
      tag: "Uzun metin",
      summary: "Uzun metinde önce aradığın bilgiyi belirle, sonra metni hedefli oku.",
      steps: ["Soru kökünü önce oku.", "Metinde kişi, zaman, koşul, karşılaştırma gibi anahtarları işaretle.", "Seçenekleri tek tek metne geri dönerek ele."],
      trap: "Metni bir kez okuyup hafızadan cevaplamak uzun sorularda hata yaptırır.",
      example: "Grafik, metin ve seçenek birlikteyse önce soru kökünün istediği bilgiyi bul."
    },
    "Metinler arası karşılaştırma": {
      tag: "İki metin",
      summary: "Her metnin ana düşüncesini ayrı çıkar, sonra ortak ve farklı yönleri karşılaştır.",
      steps: ["Birinci metnin mesajını kısa yaz.", "İkinci metnin mesajını kısa yaz.", "Seçeneklerde ortak/farklı yönün doğru verilip verilmediğini kontrol et."],
      trap: "Bir metinde olan bilgiyi diğer metinde de varmış gibi kabul etme.",
      example: "İki metin de doğa sevgisini anlatabilir ama biri bilgi, diğeri duygu ağırlıklı olabilir."
    },
    "Tablo-grafik-görsel okuma": {
      tag: "Veri okuma",
      summary: "Görseldeki verileri metne çevirmeden yorum yapma.",
      steps: ["Başlık ve birimleri oku.", "En yüksek, en düşük, eşit ve değişen değerleri belirle.", "Seçenekleri veriye göre doğrula."],
      trap: "Grafikte olmayan yorumu doğru kabul etme.",
      example: "En çok kitap okunan ay mayıssa seçenek bunu farklı söylüyorsa yanlıştır."
    },
    "Sözel mantık destekli paragraf soruları": {
      tag: "Koşul yerleştirme",
      summary: "Kesin bilgileri yerleştir, ihtimalleri sırayla dene.",
      steps: ["Kesin ifadeleri tabloya yaz.", "Olumsuz koşulları ayrı işaretle.", "Seçenekleri kalan ihtimallere göre ele."],
      trap: "Bir ihtimali kesin bilgi gibi yerleştirme.",
      example: "Ali pazartesi değilse önce pazartesi seçeneğinden çıkar, sonra diğer koşulları dene."
    },
    "Zaman yönetimi": {
      tag: "Sınav temposu",
      summary: "Zorlandığın soru tipinde süreyi fark et ve ikinci tur stratejisi kullan.",
      steps: ["Soru kökünü hızlıca oku.", "İlk 40-50 saniyede yön bulamadıysan işaretleyip geç.", "Dönüşte metindeki anahtar yerleri tekrar kontrol et."],
      trap: "Tek soruya uzun süre takılmak toplam doğru sayısını düşürür.",
      example: "Uzun metinde önce soru kökü, sonra ilgili paragraf bölümü okunur."
    }
  };
  return library[topic] || {
    tag: "Genel strateji",
    summary: "Soru kökünü önce oku, metindeki kanıtı işaretle ve seçenekleri metne bağlı kalarak ele.",
    steps: ["Soru kökünün istediği bilgiyi belirle.", "Metinde anahtar kelimeleri işaretle.", "Seçenekleri metindeki kanıtla karşılaştır."],
    trap: "Metinde bulunmayan bilgiyi doğru kabul etme.",
    example: "Seçeneği seçmeden önce metinde hangi cümleye dayandığını bul."
  };
}

function renderReport() {
  ensureReportDetails();
  syncCurrentStudent();
  const accuracy = state.stats.solved ? Math.round((state.stats.correct / state.stats.solved) * 100) : 0;
  const avgTime = state.stats.solved ? Math.round(state.stats.seconds / state.stats.solved) : 0;
  const avgEightTime = (state.questionTimes || []).length ? Math.round(state.questionTimes.reduce((sum, item) => sum + item.spent, 0) / state.questionTimes.length) : 0;
  $("#reportGrid").innerHTML = [
    ["Toplam soru", state.stats.solved],
    ["Doğruluk oranı", `${accuracy}%`],
    ["Boş sayısı", state.stats.blank],
    [state.grade === "8" ? "8. sınıf süre ort." : "Ortalama süre", `${state.grade === "8" ? avgEightTime || avgTime : avgTime} sn`]
  ].map(([label, value]) => `<div class="report-card"><span>${label}</span><strong>${value}</strong></div>`).join("");

  $("#reportIdentity").innerHTML = `
    <strong>${state.studentName || "Öğrenci adı yok"}</strong>
    <span>${state.classCode || state.teacherClassCode || "Sınıf kodu yok"} · ${state.grade}. sınıf · Son kayıt: ${formatReportDate(new Date().toISOString())}</span>
  `;

  const bars = Object.entries(state.topicStats);
  $("#topicBars").innerHTML = (bars.length ? bars : gradePlan[state.grade].focus.map((topic) => [topic, { correct: 0, wrong: 0 }])).map(([topic, stat]) => {
    const total = stat.correct + stat.wrong;
    const percent = total ? Math.round((stat.correct / total) * 100) : 0;
    return `<div class="topic-bar"><strong>${topic}</strong><div class="bar-track"><span style="width:${percent}%"></span></div><span>${percent}%</span></div>`;
  }).join("");

  const students = currentClassStudents();
  $("#classSummaryRows").innerHTML = students.length ? students.map((student) => `
    <tr>
      <td>${student.name || "Adsız öğrenci"}</td>
      <td>${student.grade || "-"}. sınıf</td>
      <td>${student.stats?.solved || 0}</td>
      <td>${student.stats?.correct || 0}</td>
      <td>${student.stats?.wrong || 0}</td>
      <td>${student.stats?.blank || 0}</td>
      <td>${wrongTopicSummary(student)}</td>
    </tr>
  `).join("") : `<tr><td colspan="7">Bu sınıf koduna bağlı öğrenci kaydı henüz yok.</td></tr>`;
}

function ensureReportDetails() {
  const reportGrid = $("#reportGrid");
  const topicBars = $("#topicBars");
  if (!reportGrid || !topicBars) return;
  const reportToolbar = $("#reportView .toolbar div");
  if (reportToolbar && !$("#reportVersionNote")) {
    reportToolbar.insertAdjacentHTML("beforeend", `<p class="report-version-note" id="reportVersionNote">Sınıf özeti aktif</p>`);
  }
  if (!$("#reportIdentity")) {
    reportGrid.insertAdjacentHTML("afterend", `<div class="report-identity" id="reportIdentity"></div>`);
  }
  const oldRows = $("#answerRows");
  if (oldRows && !$("#classSummaryRows")) oldRows.id = "classSummaryRows";
  if ($("#classSummaryRows")) {
    const panel = $("#classSummaryRows").closest(".chart-panel");
    const title = panel?.querySelector("h3");
    if (title) title.textContent = "Sınıf kayıtları";
    const header = panel?.querySelector("thead tr");
    if (header) {
      header.innerHTML = "<th>Öğrenci</th><th>Sınıf</th><th>Toplam</th><th>Doğru</th><th>Yanlış</th><th>Boş</th><th>Yanlış konuları</th>";
    }
    return;
  }
  const topicPanel = topicBars.closest(".chart-panel");
  const details = `
    <div class="chart-panel">
      <h3>Sınıf kayıtları</h3>
      <div class="student-table-wrap compact-table">
        <table class="student-table">
          <thead>
            <tr>
              <th>Öğrenci</th>
              <th>Sınıf</th>
              <th>Toplam</th>
              <th>Doğru</th>
              <th>Yanlış</th>
              <th>Boş</th>
              <th>Yanlış konuları</th>
            </tr>
          </thead>
          <tbody id="classSummaryRows"></tbody>
        </table>
      </div>
    </div>
  `;
  (topicPanel || reportGrid).insertAdjacentHTML("afterend", details);
}

function formatReportDate(value) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return date.toLocaleString("tr-TR", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" });
}

function currentClassStudents(code = state.classCode || state.teacherClassCode) {
  const room = ensureClassroom(code || state.teacherClassCode);
  return Object.values(room.students || {}).sort((a, b) => (a.name || "").localeCompare(b.name || "", "tr-TR"));
}

function currentClassStudentEntries(code = state.teacherClassCode) {
  const room = ensureClassroom(code || state.teacherClassCode);
  return Object.entries(room.students || {})
    .sort((a, b) => (a[1].name || "").localeCompare(b[1].name || "", "tr-TR"));
}

function wrongTopicSummary(student) {
  const wrongTopics = Object.entries(student.topicStats || {})
    .map(([topic, stat]) => ({ topic, wrong: stat?.wrong || 0 }))
    .filter((item) => item.wrong > 0)
    .sort((a, b) => b.wrong - a.wrong);
  if (!wrongTopics.length) return (student.stats?.solved || 0) ? "Yanlış yok" : "Veri yok";
  return wrongTopics.map((item) => `${item.topic} (${item.wrong})`).join(", ");
}

function assignmentTargetText(assignment) {
  if (assignment.target === "all") return "Tüm sınıf";
  return assignment.targetStudentName ? `${assignment.targetStudentName} için` : "Öğrenciye özel";
}

function renderAssignmentsLegacy() {
  $("#assignmentList").innerHTML = state.assignments.map((assignment, index) => `
    <article class="assignment-card">
      <strong>${assignment.topic}</strong>
      <span>${assignment.grade}. sınıf · ${assignment.count} soru · ${assignment.difficulty}</span>
      <span>${assignment.status}</span>
      <button class="secondary-action start-assignment" data-index="${index}"><i data-lucide="play"></i><span>Başla</span></button>
    </article>
  `).join("");
}

function renderAssignments() {
  const assignments = state.assignments || [];
  $("#assignmentList").innerHTML = assignments.length ? assignments.map((assignment, index) => `
    <article class="assignment-card">
      <strong>${assignment.topic}</strong>
      <span>${assignment.grade}. sınıf · ${assignment.count} soru · ${assignment.difficulty}</span>
      <span>${assignmentTargetText(assignment)}</span>
      <span>${assignment.status}</span>
      <button class="secondary-action start-assignment" data-index="${index}"><i data-lucide="play"></i><span>Başla</span></button>
    </article>
  `).join("") : `
    <article class="assignment-card">
      <strong>Henüz ödev yok</strong>
      <span>Öğretmen panelinden bu öğrenciye ödev atanınca burada görünür.</span>
    </article>
  `;
}

function createTeacherAssignment() {
  const selectedStudentKey = $("#assignStudent").value || "__all__";
  const room = ensureClassroom(state.teacherClassCode);
  const selectedStudent = selectedStudentKey !== "__all__" ? room.students[selectedStudentKey] : null;
  return {
    id: `odev-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    target: selectedStudentKey === "__all__" ? "all" : "student",
    targetStudentKey: selectedStudentKey === "__all__" ? null : selectedStudentKey,
    targetStudentName: selectedStudent?.name || "",
    classCode: state.teacherClassCode,
    topic: $("#assignTopic").value,
    grade: Number($("#assignGrade").value),
    count: Number($("#assignCount").value),
    difficulty: $("#assignDifficulty").value,
    status: "Yeni",
    createdAt: new Date().toISOString()
  };
}

function applyAssignmentToStudent(key, assignment) {
  const room = ensureClassroom(assignment.classCode || state.teacherClassCode);
  const student = room.students[key];
  if (!student) return false;
  const assignmentForStudent = {
    ...assignment,
    target: assignment.target === "all" ? "all" : "student",
    targetStudentKey: key,
    targetStudentName: student.name
  };
  student.assignments = [assignmentForStudent, ...(student.assignments || [])];
  if (studentKey(state.studentName, assignment.classCode) === key) {
    state.assignments = student.assignments;
  }
  remoteUpsertStudentProfile(student, key, assignment.classCode);
  return true;
}

function assignHomework() {
  syncCurrentStudent();
  const assignment = createTeacherAssignment();
  const entries = currentClassStudentEntries(assignment.classCode);
  if (!entries.length) {
    alert("Ödev atamak için önce öğrencinin sınıfa katılması gerekir.");
    return false;
  }
  const targetEntries = assignment.target === "all"
    ? entries
    : entries.filter(([key]) => key === assignment.targetStudentKey);
  targetEntries.forEach(([key]) => applyAssignmentToStudent(key, assignment));
  saveState();
  renderTeacher();
  renderAssignments();
  return true;
}

function textOnly(html) {
  const scratch = document.createElement("div");
  scratch.innerHTML = html || "";
  return scratch.textContent || scratch.innerText || "";
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatQuestionText(value = "") {
  return escapeHtml(value).replace(/\n/g, "<br>");
}

function reviewQuestionBank() {
  const deleted = new Set(state.deletedQuestionIds || []);
  const customById = new Map((state.customQuestions || [])
    .filter((question) => question?.id && !deleted.has(question.id))
    .map((question) => [question.id, question]));
  const builtInQuestions = questionBank
    .filter((question) => !deleted.has(question.id))
    .map((question) => {
      const edited = customById.get(question.id);
      return edited ? { ...edited, source: "Düzenlendi" } : { ...question, source: "Hazır" };
    });
  const teacherQuestions = (state.customQuestions || [])
    .filter((question) => question?.id && !deleted.has(question.id) && !baseQuestionIds.has(question.id))
    .map((question) => ({ ...question, source: "Öğretmen" }));
  return [...builtInQuestions, ...teacherQuestions];
}

function questionBankTopicsForGrade(gradeValue) {
  if (gradeValue === "all") {
    const topicSet = new Set(reviewQuestionBank().map((question) => question.topic));
    return ["Tüm konular", ...Array.from(topicSet).sort((a, b) => a.localeCompare(b, "tr"))];
  }
  return ["Tüm konular", ...availableTopicsForGrade(Number(gradeValue))];
}

function updateQuestionBankTopics() {
  const gradeSelect = $("#questionBankGrade");
  const topicSelect = $("#questionBankTopic");
  if (!gradeSelect || !topicSelect) return;
  const currentTopic = topicSelect.value || "Tüm konular";
  const topicsForGrade = questionBankTopicsForGrade(gradeSelect.value);
  topicSelect.innerHTML = topicsForGrade.map((topic) => `<option>${topic}</option>`).join("");
  topicSelect.value = topicsForGrade.includes(currentTopic) ? currentTopic : "Tüm konular";
}

function filteredQuestionBank() {
  const gradeValue = $("#questionBankGrade")?.value || "all";
  const topicValue = $("#questionBankTopic")?.value || "Tüm konular";
  const difficultyValue = $("#questionBankDifficulty")?.value || "all";
  const searchValue = ($("#questionBankSearch")?.value || "").trim().toLocaleLowerCase("tr-TR");
  return reviewQuestionBank().filter((question) => {
    if (gradeValue !== "all" && question.grade !== Number(gradeValue)) return false;
    if (topicValue !== "Tüm konular" && question.topic !== topicValue) return false;
    if (difficultyValue !== "all" && question.difficulty !== difficultyValue) return false;
    if (!searchValue) return true;
    const haystack = [
      question.topic,
      question.difficulty,
      textOnly(question.text),
      question.stem,
      ...(question.options || []),
      question.solution
    ].join(" ").toLocaleLowerCase("tr-TR");
    return haystack.includes(searchValue);
  });
}

function questionById(id) {
  return reviewQuestionBank().find((question) => question.id === id);
}

function renderQuestionEditForm(question, index) {
  const gradeTopics = Array.from(new Set([question.topic, ...availableTopicsForGrade(question.grade || state.grade)]));
  return `
    <article class="question-preview-card question-edit-card">
      <form class="question-edit-form" data-question-id="${escapeHtml(question.id)}">
        <div class="question-preview-head">
          <span class="pill">${question.grade}. sınıf</span>
          <strong>${index + 1}. Soruyu düzenle</strong>
          <span>${escapeHtml(question.source || "Soru")}</span>
        </div>
        <div class="form-grid">
          <label>Sınıf
            <select name="grade">
              ${[5, 6, 7, 8].map((grade) => `<option value="${grade}" ${Number(question.grade) === grade ? "selected" : ""}>${grade}. sınıf</option>`).join("")}
            </select>
          </label>
          <label>Konu
            <select name="topic">
              ${gradeTopics.map((topic) => `<option ${topic === question.topic ? "selected" : ""}>${escapeHtml(topic)}</option>`).join("")}
            </select>
          </label>
          <label>Zorluk
            <select name="difficulty">
              ${["Kolay", "Orta", "Zor"].map((difficulty) => `<option ${difficulty === question.difficulty ? "selected" : ""}>${difficulty}</option>`).join("")}
            </select>
          </label>
          <label>Doğru cevap
            <select name="answer">
              ${["A", "B", "C", "D"].map((letter) => `<option ${letter === question.answer ? "selected" : ""}>${letter}</option>`).join("")}
            </select>
          </label>
        </div>
        <label>Kazanım
          <input name="outcome" type="text" value="${escapeHtml(question.outcome || "")}">
        </label>
        <label>Paragraf metni
          <textarea name="text" rows="7" required>${escapeHtml(question.text || "")}</textarea>
        </label>
        <label>Soru kökü
          <input name="stem" type="text" value="${escapeHtml(question.stem || "")}" required>
        </label>
        <div class="form-grid">
          ${["A", "B", "C", "D"].map((letter, optionIndex) => `
            <label>${letter}
              <input name="option${letter}" type="text" value="${escapeHtml(question.options?.[optionIndex] || "")}" required>
            </label>
          `).join("")}
        </div>
        <label>Ayrıntılı çözüm
          <textarea name="solution" rows="3" required>${escapeHtml(question.solution || "")}</textarea>
        </label>
        <label>Çözüm stratejisi
          <input name="strategy" type="text" value="${escapeHtml(question.strategy || "")}">
        </label>
        <div class="question-edit-actions">
          <button class="primary-action" type="submit"><i data-lucide="save"></i><span>Kaydet</span></button>
          <button class="secondary-action cancel-question-edit" type="button"><i data-lucide="x"></i><span>Vazgeç</span></button>
        </div>
      </form>
    </article>
  `;
}

function questionFromEditForm(form) {
  const id = form.dataset.questionId;
  const original = questionById(id) || {};
  return {
    ...original,
    id,
    grade: Number(form.elements.grade.value),
    topic: form.elements.topic.value,
    difficulty: form.elements.difficulty.value,
    outcome: form.elements.outcome.value.trim() || `${form.elements.topic.value} kazanımı`,
    text: form.elements.text.value.trim(),
    stem: form.elements.stem.value.trim(),
    options: ["A", "B", "C", "D"].map((letter) => form.elements[`option${letter}`].value.trim()),
    answer: form.elements.answer.value,
    solution: form.elements.solution.value.trim(),
    strategy: form.elements.strategy.value.trim() || "Soru kökünü metindeki kanıtlarla birlikte değerlendir.",
    hint: original.hint || "Metindeki ipuçlarını işaretle.",
    wrong: original.wrong || "Yanlış seçenekler metindeki kapsamı daraltır ya da metinde söylenmeyen bir yargı içerir."
  };
}

function upsertManagedQuestion(question) {
  state.deletedQuestionIds = (state.deletedQuestionIds || []).filter((id) => id !== question.id);
  const existingIndex = (state.customQuestions || []).findIndex((item) => item.id === question.id);
  if (existingIndex >= 0) state.customQuestions[existingIndex] = question;
  else state.customQuestions.push(question);
  persistStateOnly();
  remoteSaveCustomQuestion(question);
}

function deleteManagedQuestion(question) {
  state.deletedQuestionIds = Array.from(new Set([...(state.deletedQuestionIds || []), question.id]));
  state.customQuestions = (state.customQuestions || []).filter((item) => item.id !== question.id);
  if (editingQuestionId === question.id) editingQuestionId = null;
  persistStateOnly();
  remoteSaveDeletedQuestion(question);
}

function renderQuestionBank() {
  const list = $("#questionBankList");
  const count = $("#questionBankCount");
  if (!list || !count) return;
  const lockPanel = $("#questionBankLock");
  const controls = $("#questionBankControls");
  if (!questionBankUnlocked) {
    count.textContent = "Kilitli";
    if (lockPanel) lockPanel.hidden = false;
    if (controls) controls.hidden = true;
    list.hidden = true;
    return;
  }
  if (lockPanel) lockPanel.hidden = true;
  if (controls) controls.hidden = false;
  list.hidden = false;
  updateQuestionBankTopics();
  const filtered = filteredQuestionBank();
  count.textContent = `${filtered.length} soru`;
  list.innerHTML = filtered.length ? filtered.map((question, index) => {
    if (editingQuestionId === question.id) return renderQuestionEditForm(question, index);
    const answerIndex = "ABCD".indexOf(question.answer);
    const answerText = answerIndex >= 0 ? question.options[answerIndex] : "";
    const previewContent = `
      ${question.text ? `<div class="question-preview-text">${formatQuestionText(question.text)}</div>` : ""}
      <div class="question-preview-stem">${formatQuestionText(question.stem)}</div>
      <ol class="question-preview-options" type="A">
        ${question.options.map((option, optionIndex) => `<li class="${optionIndex === answerIndex ? "is-answer" : ""}">${formatQuestionText(option)}</li>`).join("")}
      </ol>
    `;
    return `
      <article class="question-preview-card" data-question-id="${escapeHtml(question.id)}">
        <div class="question-preview-head">
          <span class="pill">${question.grade}. sınıf</span>
          <strong>${index + 1}. ${question.topic}</strong>
          <span>${question.difficulty}</span>
          <div class="question-card-actions">
            <button class="icon-button edit-question" type="button" title="Soruyu düzenle" aria-label="Soruyu düzenle"><i data-lucide="pencil"></i></button>
            <button class="icon-button delete-question" type="button" title="Soruyu sil" aria-label="Soruyu sil"><i data-lucide="trash-2"></i></button>
          </div>
        </div>
        ${previewContent}
        <div class="question-preview-solution">
          <strong>Doğru cevap: ${question.answer}${answerText ? ` - ${formatQuestionText(answerText)}` : ""}</strong>
          <p>${formatQuestionText(question.solution)}</p>
        </div>
      </article>
    `;
  }).join("") : `
    <article class="question-preview-card">
      <strong>Bu filtrelere uygun soru bulunamadı.</strong>
      <p>Arama kutusunu temizleyebilir ya da sınıf/konu filtresini değiştirebilirsin.</p>
    </article>
  `;
}

function mistakeToQuestion(item) {
  return {
    ...item,
    outcome: `${item.topic} yanlış defteri tekrarı`,
    id: item.id
  };
}

function generateClassCode() {
  return `PK${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}

function downloadStudentReport() {
  const accuracy = state.stats.solved ? Math.round((state.stats.correct / state.stats.solved) * 100) : 0;
  const weak = weakestTopic() || "Veri bekleniyor";
  const suggestions = smartRecommendations().map((item) => `<li>${item}</li>`).join("");
  const topicRows = Object.entries(state.topicStats || {}).map(([topic, stat]) => {
    const total = (stat.correct || 0) + (stat.wrong || 0);
    const percent = total ? Math.round(((stat.correct || 0) / total) * 100) : 0;
    return `<tr><td>${topic}</td><td>${stat.correct || 0}</td><td>${stat.wrong || 0}</td><td>${percent}%</td></tr>`;
  }).join("");
  const classRows = currentClassStudents().map((student) => `
    <tr>
      <td>${student.name || "Adsız öğrenci"}</td>
      <td>${student.grade || "-"}. sınıf</td>
      <td>${student.stats?.solved || 0}</td>
      <td>${student.stats?.correct || 0}</td>
      <td>${student.stats?.wrong || 0}</td>
      <td>${student.stats?.blank || 0}</td>
      <td>${wrongTopicSummary(student)}</td>
    </tr>
  `).join("");
  const timeRows = (state.questionTimes || []).slice(-20).map((item) => `<tr><td>${item.topic}</td><td>${item.spent} sn</td><td>${item.correct ? "Doğru" : "Yanlış"}</td></tr>`).join("");
  const report = window.open("", "_blank");
  report.document.write(`
    <html lang="tr"><head><title>Paragraf Koçu Raporu</title>
    <style>body{font-family:Arial,sans-serif;padding:24px;color:#182235} table{width:100%;border-collapse:collapse;margin-top:12px}td,th{border:1px solid #ddd;padding:8px;text-align:left} h1,h2{margin-bottom:6px}</style>
    </head><body>
      <h1>Paragraf Koçu Öğrenci Raporu</h1>
      <p><strong>Öğrenci:</strong> ${state.studentName || "Adsız öğrenci"} · <strong>Sınıf:</strong> ${state.grade}. sınıf · <strong>Sınıf kodu:</strong> ${state.classCode || "-"}</p>
      <p><strong>Toplam:</strong> ${state.stats.solved} · <strong>Doğru:</strong> ${state.stats.correct} · <strong>Yanlış:</strong> ${state.stats.wrong} · <strong>Boş:</strong> ${state.stats.blank} · <strong>Doğruluk:</strong> ${accuracy}%</p>
      <p><strong>Zorlandığı konu:</strong> ${weak}</p>
      <h2>Önerilen çalışma</h2><ul>${suggestions}</ul>
      <h2>Konu bazlı başarı</h2><table><thead><tr><th>Konu</th><th>Doğru</th><th>Yanlış</th><th>Başarı</th></tr></thead><tbody>${topicRows || "<tr><td colspan='4'>Veri yok</td></tr>"}</tbody></table>
      <h2>Sınıf kayıtları</h2><table><thead><tr><th>Öğrenci</th><th>Sınıf</th><th>Toplam</th><th>Doğru</th><th>Yanlış</th><th>Boş</th><th>Yanlış konuları</th></tr></thead><tbody>${classRows || "<tr><td colspan='7'>Sınıf kaydı yok</td></tr>"}</tbody></table>
      ${state.grade === "8" ? `<h2>8. sınıf süre takibi</h2><table><thead><tr><th>Konu</th><th>Süre</th><th>Sonuç</th></tr></thead><tbody>${timeRows || "<tr><td colspan='3'>Süre verisi yok</td></tr>"}</tbody></table>` : ""}
      <script>window.print();</script>
    </body></html>
  `);
  report.document.close();
}

function addCustomQuestion() {
  const question = {
    grade: Number($("#customGrade").value),
    topic: $("#customTopic").value,
    difficulty: $("#customDifficulty").value,
    outcome: $("#customOutcome").value || "Öğretmen tarafından eklenen kazanım",
    text: $("#customText").value.trim(),
    stem: $("#customStem").value.trim(),
    options: [$("#customA").value.trim(), $("#customB").value.trim(), $("#customC").value.trim(), $("#customD").value.trim()],
    answer: $("#customAnswer").value,
    solution: $("#customSolution").value.trim(),
    wrong: "Öğretmen tarafından eklenen soruda çeldiriciler sınıf içi değerlendirmeye göre açıklanır.",
    strategy: $("#customStrategy").value.trim(),
    hint: "Soru kökünü dikkatle oku ve metindeki ipuçlarını işaretle."
  };
  question.id = makeQuestionId(question);
  state.customQuestions.push(question);
  remoteSaveCustomQuestion(question);
  saveState();
  $("#customQuestionForm").reset();
  updateCustomTopics();
  renderAll();
}

function practiceFocusOptionsForGrade(grade = state.grade) {
  const focusSet = new Set(practicePassagesForGrade(grade).map((passage) => passage.focus));
  return Array.from(focusSet).sort((a, b) => a.localeCompare(b, "tr"));
}

function updateCustomPracticeFocus() {
  const grade = $("#customPracticeGrade")?.value || state.grade;
  const focusSelect = $("#customPracticeFocus");
  if (!focusSelect) return;
  const options = practiceFocusOptionsForGrade(grade);
  focusSelect.innerHTML = options.map((focus) => `<option>${escapeHtml(focus)}</option>`).join("");
}

function addCustomPracticePassage() {
  const grade = Number($("#customPracticeGrade").value);
  const title = $("#customPracticeTitle").value.trim();
  const text = $("#customPracticeText").value.trim();
  const titleAnswer = $("#customPracticeTitleAnswer").value.trim() || title;
  const passage = {
    id: `teacher-practice-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    grade,
    focus: $("#customPracticeFocus").value,
    difficulty: $("#customPracticeDifficulty").value,
    title,
    text,
    prompts: [
      ["Bu paragrafın konusu nedir?", $("#customPracticeTopicAnswer").value.trim()],
      ["Ana fikir nedir?", $("#customPracticeMainAnswer").value.trim()],
      ["Bu metne hangi başlık uygun olur?", titleAnswer],
      ["Hangi anlatım biçimi kullanılmıştır?", $("#customPracticeNarrationAnswer").value.trim()],
      ["Metinden hangi çıkarıma ulaşılabilir?", $("#customPracticeInferenceAnswer").value.trim()]
    ],
    source: "Öğretmen"
  };
  if (!passage.text || !passage.title || passage.prompts.some(([, answer]) => !answer)) {
    alert("Paragraf metni ve örnek cevapların tamamını doldurmalısın.");
    return;
  }
  if (!Array.isArray(state.customPracticePassages)) state.customPracticePassages = [];
  state.customPracticePassages.push(passage);
  remoteSaveCustomPracticePassage(passage);
  activePracticeId = null;
  syncCurrentStudent();
  persistStateOnly();
  $("#customPracticeForm").reset();
  updateCustomPracticeFocus();
  renderPractice();
  renderTeacher();
  setSyncStatus("Alıştırma paragrafı eklendi.", "ok");
}

function renderTeacher() {
  ensureTeacherDetails();
  syncCurrentStudent();
  const code = state.teacherClassCode;
  const room = ensureClassroom(code);
  const studentEntries = currentClassStudentEntries(code);
  const students = studentEntries.map(([, student]) => student);
  $("#teacherClassCode").textContent = code;
  $("#studentRows").innerHTML = students.length ? students.map((student) => {
    const weak = weakestTopicFor(student.topicStats || {});
    const correct = student.stats?.correct || 0;
    const wrong = student.stats?.wrong || 0;
    return `<tr><td>${student.name}</td><td>${student.grade}. sınıf</td><td>${student.stats?.solved || 0}</td><td>${correct}/${wrong}</td><td>${weak || "Veri bekliyor"}</td><td>${wrongTopicSummary(student)}</td></tr>`;
  }).join("") : `<tr><td colspan="6">Bu sınıf koduna bağlı öğrenci kaydı henüz yok.</td></tr>`;
  if ($("#assignStudent")) {
    $("#assignStudent").innerHTML = [`<option value="__all__">Tüm sınıf</option>`, ...studentEntries.map(([key, student]) => `<option value="${key}">${student.name}</option>`)].join("");
  }
  updateAssignmentTopics();
  updateCustomTopics();
  updateCustomPracticeFocus();
  renderPracticeTracking(students);
  renderDailyTaskForm();
  refreshRemoteTeacherPanel();
}

async function refreshRemoteTeacherPanel() {
  ensureTeacherDetails();
  const students = await remoteLoadClassroom(state.teacherClassCode);
  if (!students.length) return;
  const room = ensureClassroom(state.teacherClassCode);
  students.forEach((student) => {
    const key = studentKey(student.name, state.teacherClassCode);
    const existing = room.students[key] || {};
    room.students[key] = {
      ...student,
      practiceNotes: existing.practiceNotes || student.practiceNotes || {},
      practiceCompleted: existing.practiceCompleted || student.practiceCompleted || []
    };
  });
  $("#studentRows").innerHTML = students.map((student) => {
    const weak = weakestTopicFor(student.topicStats || {});
    const correct = student.stats?.correct || 0;
    const wrong = student.stats?.wrong || 0;
    return `<tr><td>${student.name}</td><td>${student.grade}. sınıf</td><td>${student.stats?.solved || 0}</td><td>${correct}/${wrong}</td><td>${weak || "Veri bekliyor"}</td><td>${wrongTopicSummary(student)}</td></tr>`;
  }).join("");
  const studentEntries = currentClassStudentEntries(state.teacherClassCode);
  if ($("#assignStudent")) {
    $("#assignStudent").innerHTML = [`<option value="__all__">Tüm sınıf</option>`, ...studentEntries.map(([key, student]) => `<option value="${key}">${student.name}</option>`)].join("");
  }
  renderPracticeTracking(currentClassStudents(state.teacherClassCode));
}

function ensureTeacherDetails() {
  const header = document.querySelector("#teacherView .student-table thead tr");
  if (!header) return;
  const cells = Array.from(header.children);
  const lastCell = cells[cells.length - 1];
  if (lastCell) lastCell.textContent = "Yanlış konuları";
}

function practiceStatsForStudent(student) {
  const grade = Number(student.grade || state.grade);
  const gradePassages = practicePassagesForGrade(grade);
  const passageMap = new Map(gradePassages.map((passage) => [passage.id, passage]));
  const completed = (student.practiceCompleted || []).filter((id) => passageMap.has(id));
  const total = gradePassages.length;
  const percent = total ? Math.round((completed.length / total) * 100) : 0;
  const lastId = completed[completed.length - 1];
  const lastPassage = lastId ? passageMap.get(lastId) : null;
  const status = completed.length === 0 ? "Başlamadı" : completed.length >= total ? "Tamamladı" : "Devam ediyor";
  return { completed: completed.length, total, percent, lastPassage, status };
}

function renderPracticeTracking(students = currentClassStudents(state.teacherClassCode)) {
  const rows = $("#practiceTrackingRows");
  if (!rows) return;
  rows.innerHTML = students.length ? students.map((student) => {
    const stats = practiceStatsForStudent(student);
    return `
      <tr>
        <td>${escapeHtml(student.name || "Adsız öğrenci")}</td>
        <td>${escapeHtml(student.grade || "-")}. sınıf</td>
        <td>${stats.completed}/${stats.total}</td>
        <td>${stats.percent}%</td>
        <td>${stats.lastPassage ? `${escapeHtml(stats.lastPassage.title)} · ${escapeHtml(stats.lastPassage.focus)}` : "Henüz yok"}</td>
        <td>${stats.status}</td>
      </tr>
    `;
  }).join("") : `<tr><td colspan="6">Bu sınıf kodunda alıştırma kaydı henüz yok.</td></tr>`;
}

function updateAssignmentTopics() {
  const grade = $("#assignGrade")?.value || state.grade;
  const gradeTopics = availableTopicsForGrade(grade);
  const topicSelect = $("#assignTopic");
  if (!topicSelect) return;
  topicSelect.innerHTML = gradeTopics.map((topic) => `<option>${topic}</option>`).join("");
}

function updateCustomTopics() {
  const grade = $("#customGrade")?.value || state.grade;
  $("#customTopic").innerHTML = availableTopicsForGrade(grade).map((topic) => `<option>${topic}</option>`).join("");
}

function renderDailyTaskForm() {
  const task = state.dailyTask || {};
  const titleInput = $("#dailyTaskTitle");
  const textInput = $("#dailyTaskText");
  const countInput = $("#dailyTaskCount");
  if (!titleInput || !textInput || !countInput) return;
  titleInput.value = task.title || "";
  textInput.value = task.text || "";
  countInput.value = task.count || 15;
}

function publishDailyTask() {
  const title = ($("#dailyTaskTitle")?.value || "").trim();
  const text = ($("#dailyTaskText")?.value || "").trim();
  const count = Number($("#dailyTaskCount")?.value || 15);
  if (!title && !text) {
    alert("Günün görevi için başlık ya da duyuru yazmalısın.");
    return;
  }
  state.dailyTask = {
    title: title || "Bugünkü paragraf görevi",
    text: text || `${count} paragraf sorusu çöz.`,
    count,
    classCode: state.teacherClassCode,
    updatedAt: new Date().toISOString()
  };
  persistStateOnly();
  remoteUpsertClass();
  renderDashboard();
  renderDailyTaskForm();
  setSyncStatus("Günün görevi yayınlandı.", "ok");
}

function clearDailyTask() {
  state.dailyTask = null;
  persistStateOnly();
  remoteUpsertClass();
  renderDashboard();
  renderDailyTaskForm();
  setSyncStatus("Günün görevi varsayılan plana döndü.", "ok");
}

function weakestTopicFor(topicStats) {
  let weakest = null;
  let score = Infinity;
  Object.entries(topicStats || {}).forEach(([topic, stat]) => {
    const total = (stat.correct || 0) + (stat.wrong || 0);
    if (total > 0) {
      const percent = (stat.correct || 0) / total;
      if (percent < score) {
        score = percent;
        weakest = topic;
      }
    }
  });
  return weakest;
}

function renderAll() {
  pendingGrade = state.grade;
  $("#studentNameInput").value = state.studentName || "";
  $("#classCodeInput").value = state.classCode || "";
  $("#gradeSelect").value = state.grade;
  renderDashboard();
  renderTopics();
  renderPractice();
  renderStrategies();
  renderMistakes();
  renderReport();
  renderQuestionBank();
  renderTeacher();
}

async function bootstrapRemoteData() {
  if (!isRemoteReady()) {
    updatePendingSyncStatus();
    return;
  }
  await remoteLoadDailyTask(state.classCode || state.teacherClassCode);
  await remoteUpsertClass();
  await syncQueuedRecords();
  await remoteLoadCustomQuestions();
  renderAll();
}

function startPracticeMode(mode) {
  const newGenerationTopics = [
    "Tablo-grafik-görsel okuma",
    "Sözel mantık destekli paragraf soruları",
    "LGS tarzı yeni nesil paragraf soruları"
  ];

  if (mode === "mixed") {
    startQuiz(pickBalancedQuestions({ count: 10, grade: state.grade }), "Karma Test", `${state.grade}. sınıf`);
    return;
  }

  if (mode === "exam") {
    startQuiz(pickBalancedQuestions({ count: 20, grade: state.grade }), "Deneme Tarzı", `${state.grade}. sınıf`);
    return;
  }

  if (mode === "newgen") {
    const available = availableTopicsForGrade(state.grade).filter((topic) => newGenerationTopics.includes(topic));
    startQuiz(pickBalancedQuestions({ count: 10, grade: state.grade, topics: available }), "Yeni Nesil Test", `${state.grade}. sınıf`);
    return;
  }

  if (mode === "weak") {
    const weak = weakestTopic() || gradePlan[state.grade].focus[0];
    startQuiz(pickQuestions({ count: 10, grade: state.grade, topic: weak }), "Zayıf Konu Testi", weak);
  }
}

function startQuiz(questions, title, meta) {
  if (!questions?.length) {
    alert("Bu sınıf ve çalışma için çözülmemiş soru kalmadı. Farklı konu seçebilir ya da öğretmen yeni soru ekleyebilir.");
    return;
  }
  quiz = { questions, index: 0, title, meta, correct: 0, wrong: 0, blank: 0, startedAt: Date.now(), questionStartedAt: Date.now(), locked: false };
  $("#quizDrawer").hidden = false;
  document.body.classList.add("quiz-open");
  renderQuestion();
}

function closeQuizDrawer() {
  $("#quizDrawer").hidden = true;
  document.body.classList.remove("quiz-open");
  quiz = null;
}

function renderQuestion() {
  const question = quiz.questions[quiz.index];
  const questionContent = `
    ${question.text ? `<div class="question-field">
      <small>Paragraf metni</small>
      <div class="paragraph-workbench">
        <div class="marking-tools" role="group" aria-label="Paragraf işaretleme araçları">
          <button class="marking-tool is-active" id="penTool" type="button">Kalem</button>
          <button class="marking-tool" id="eraserTool" type="button">Silgi</button>
          <button class="marking-tool" id="clearMarks" type="button">Temizle</button>
        </div>
        <div class="paragraph-mark-area">
          <div class="paragraph-text" id="paragraphText">${formatQuestionText(question.text)}</div>
          <canvas id="paragraphCanvas" aria-label="Paragraf üzerine işaretleme alanı"></canvas>
        </div>
      </div>
    </div>` : ""}
    <div class="question-field"><small>Soru kökü</small><strong>${formatQuestionText(question.stem)}</strong></div>
  `;
  $("#quizMeta").textContent = quiz.meta;
  $("#quizTitle").textContent = `${quiz.title} · ${quiz.index + 1}/${quiz.questions.length}`;
  $("#quizProgressBar").style.width = `${(quiz.index / quiz.questions.length) * 100}%`;
  $("#questionCard").innerHTML = `
    <div class="question-field"><small>Sınıf seviyesi</small><span>${question.grade}. sınıf</span></div>
    <div class="question-field"><small>Konu</small><span>${question.topic}</span></div>
    ${question.grade === 8 ? `<div class="question-field"><small>Süre takibi</small><span class="timer-chip">8. sınıf için süre kaydediliyor</span></div>` : ""}
    ${questionContent}
    <div class="option-list">
      ${question.options.map((option, index) => {
        const letter = String.fromCharCode(65 + index);
        const label = `${letter}) ${formatQuestionText(option)}`;
        return `<button class="option-button" data-answer="${letter}">${label}</button>`;
      }).join("")}
    </div>
    <div class="quiz-actions">
      <button class="secondary-action" id="showHint"><i data-lucide="lightbulb"></i><span>İpucu</span></button>
      <button class="secondary-action" id="blankQuestion"><i data-lucide="circle-dashed"></i><span>Boş bırak</span></button>
    </div>
    <div class="solution-box" id="hintBox" hidden><strong>Öğrenciye ipucu:</strong> ${question.hint}</div>
  `;
  quiz.questionStartedAt = Date.now();
  quiz.locked = false;
  initParagraphMarker();
}

function initParagraphMarker() {
  const canvas = $("#paragraphCanvas");
  if (!canvas) return;
  const context = canvas.getContext("2d");
  const penButton = $("#penTool");
  const eraserButton = $("#eraserTool");
  const clearButton = $("#clearMarks");
  let activeTool = "pen";
  let drawing = false;

  function resizeCanvas() {
    const area = canvas.parentElement;
    const rect = area.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    canvas.width = Math.max(1, Math.round(rect.width * ratio));
    canvas.height = Math.max(1, Math.round(rect.height * ratio));
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.lineCap = "round";
    context.lineJoin = "round";
  }


  function setTool(tool) {
    activeTool = tool;
    penButton?.classList.toggle("is-active", tool === "pen");
    eraserButton?.classList.toggle("is-active", tool === "eraser");
    canvas.classList.toggle("is-eraser", tool === "eraser");
  }

  function point(event) {
    const rect = canvas.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  }

  function startDrawing(event) {
    drawing = true;
    canvas.setPointerCapture?.(event.pointerId);
    const current = point(event);
    context.beginPath();
    context.moveTo(current.x, current.y);
  }

  function draw(event) {
    if (!drawing) return;
    const current = point(event);
    context.globalCompositeOperation = activeTool === "eraser" ? "destination-out" : "source-over";
    context.strokeStyle = "#102030";
    context.lineWidth = activeTool === "eraser" ? 18 : 2;
    context.lineTo(current.x, current.y);
    context.stroke();
  }

  function stopDrawing(event) {
    if (!drawing) return;
    drawing = false;
    canvas.releasePointerCapture?.(event.pointerId);
    context.closePath();
  }

  resizeCanvas();
  window.requestAnimationFrame(resizeCanvas);
  penButton?.addEventListener("click", () => setTool("pen"));
  eraserButton?.addEventListener("click", () => setTool("eraser"));
  clearButton?.addEventListener("click", () => context.clearRect(0, 0, canvas.width, canvas.height));
  canvas.addEventListener("pointerdown", startDrawing);
  canvas.addEventListener("pointermove", draw);
  canvas.addEventListener("pointerup", stopDrawing);
  canvas.addEventListener("pointercancel", stopDrawing);
}

function answerQuestion(answer) {
  if (quiz.locked) return;
  quiz.locked = true;
  const question = quiz.questions[quiz.index];
  const isBlank = answer === null;
  const isCorrect = answer === question.answer;
  const spent = Math.max(1, Math.round((Date.now() - quiz.questionStartedAt) / 1000));
  if (isBlank) quiz.blank += 1;
  else if (isCorrect) quiz.correct += 1;
  else quiz.wrong += 1;

  const record = {
    id: question.id || makeQuestionId(question),
    grade: question.grade,
    topic: question.topic,
    correct: isCorrect,
    blank: isBlank,
    answer,
    spent,
    at: new Date().toISOString()
  };
  state.answers.push(record);
  if (question.grade === 8) state.questionTimes.push({ id: record.id, topic: question.topic, spent, correct: isCorrect, at: record.at });
  updateMistakeBook(question, isCorrect, isBlank);
  remoteSaveAttempt(record);

  $$(".option-button").forEach((button) => {
    if (button.dataset.answer === question.answer) button.classList.add("is-correct");
    if (button.dataset.answer === answer && !isCorrect) button.classList.add("is-wrong");
    button.disabled = true;
  });

  $("#questionCard").insertAdjacentHTML("beforeend", `
    <div class="solution-box">
      <strong>Doğru cevap:</strong> ${question.answer}<br>
      <strong>Ayrıntılı çözüm:</strong> ${question.solution}<br>
      <strong>Neden diğer seçenekler yanlış?:</strong> ${question.wrong}<br>
      <strong>Çözüm stratejisi:</strong> ${question.strategy}
    </div>
    <div class="quiz-actions">
      <button class="primary-action" id="nextQuestion"><i data-lucide="arrow-right"></i><span>${quiz.index + 1 === quiz.questions.length ? "Değerlendirmeyi gör" : "Sonraki soru"}</span></button>
    </div>
  `);
}

function updateMistakeBook(question, isCorrect, isBlank) {
  const id = question.id || makeQuestionId(question);
  const existing = (state.mistakeBook || []).find((item) => item.id === id);
  if (isCorrect && existing) {
    existing.status = "Öğrenildi";
    existing.learnedAt = new Date().toISOString();
    remoteUpsertMistake(existing);
    return;
  }
  if (!isCorrect || isBlank) {
    if (existing) {
      existing.status = "Bekliyor";
      existing.missCount = (existing.missCount || 1) + 1;
      remoteUpsertMistake(existing);
      return;
    }
    const item = {
      id,
      grade: question.grade,
      topic: question.topic,
      difficulty: question.difficulty,
      text: question.text,
      stem: question.stem,
      options: question.options,
      answer: question.answer,
      solution: question.solution,
      wrong: question.wrong,
      strategy: question.strategy,
      hint: question.hint,
      status: "Bekliyor",
      missCount: 1
    };
    state.mistakeBook.unshift(item);
    remoteUpsertMistake(item);
  }
}

function finishQuiz() {
  const elapsed = Math.max(quiz.questions.length * 35, Math.round((Date.now() - quiz.startedAt) / 1000));
  state.stats.solved += quiz.questions.length;
  state.stats.correct += quiz.correct;
  state.stats.wrong += quiz.wrong;
  state.stats.blank += quiz.blank;
  state.stats.seconds += elapsed;
  state.stats.streak += 1;

  quiz.questions.forEach((question, index) => {
    const stat = state.topicStats[question.topic] || { correct: 0, wrong: 0 };
    const answer = state.answers[state.answers.length - quiz.questions.length + index];
    if (answer?.correct) stat.correct += 1;
    else stat.wrong += 1;
    state.topicStats[question.topic] = stat;
  });

  const weak = weakestTopic() || quiz.questions[0].topic;
  saveState();
  $("#quizProgressBar").style.width = "100%";
  $("#questionCard").innerHTML = `
    <div class="solution-box">
      <h2>Çalışma değerlendirmesi</h2>
      <p>Bugün ${quiz.questions.length} sorudan ${quiz.correct} doğru yaptın. ${weak} sorularında dikkatli ilerlemelisin. Bir sonraki çalışmanda ${weak} konusundan 10 soru çözmen önerilir.</p>
      <p>Doğru: ${quiz.correct} · Yanlış: ${quiz.wrong} · Boş: ${quiz.blank}</p>
      <button class="primary-action" id="finishClose"><i data-lucide="check"></i><span>Rapora işle</span></button>
    </div>
  `;
  renderAll();
}

function bindEvents() {
  $$(".nav-item").forEach((button) => button.addEventListener("click", () => setView(button.dataset.view)));
  $("#studentNameInput").addEventListener("change", (event) => {
    const name = event.target.value.trim();
    if (!name) return;
    loadStudentProfile(name, state.classCode || state.teacherClassCode, $("#gradeSelect").value || pendingGrade);
    saveState();
    renderAll();
  });
  const joinButton = $("#joinClass");
  joinButton.addEventListener("click", () => {
    const name = $("#studentNameInput").value.trim();
    const code = ($("#classCodeInput").value.trim() || state.teacherClassCode).toUpperCase();
    if (!name) {
      alert("Önce öğrenci adını yaz.");
      return;
    }
    joinButton.disabled = true;
    joinButton.textContent = "Katıldı";
    loadStudentProfile(name, code, $("#gradeSelect").value || pendingGrade);
    remoteLoadCustomQuestions().then(() => {
      saveState();
      renderAll();
    });
    saveState();
    setView("dashboard");
    renderAll();
    document.querySelector(".main-content")?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      joinButton.disabled = false;
      joinButton.textContent = "Katıl";
    }, 1800);
  });
  $("#classCodeInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") joinButton.click();
  });
  $("#gradeSelect").addEventListener("change", (event) => {
    pendingGrade = event.target.value;
    const typedName = $("#studentNameInput").value.trim();
    if (typedName && typedName.toLocaleLowerCase("tr-TR") !== (state.studentName || "").trim().toLocaleLowerCase("tr-TR")) {
      activeTopic = gradePlan[pendingGrade].focus[0];
      return;
    }
    state.grade = event.target.value;
    activeTopic = gradePlan[state.grade].focus[0];
    activePracticeId = null;
    practiceJustCompleted = false;
    const practiceGrade = $("#practiceGradeFilter");
    if (practiceGrade) practiceGrade.value = state.grade;
    saveState();
    renderAll();
  });
  $$(".segmented").forEach((button) => button.addEventListener("click", () => {
    $$(".segmented").forEach((item) => item.classList.remove("is-selected"));
    button.classList.add("is-selected");
    selectedCount = Number(button.dataset.count);
  }));
  $("#startDaily").addEventListener("click", () => startQuiz(pickQuestions({ count: selectedCount, grade: state.grade }), "Günlük Antrenman", `${state.grade}. sınıf`));
  $(".practice-mode-grid")?.addEventListener("click", (event) => {
    const card = event.target.closest(".practice-mode-card");
    if (!card) return;
    startPracticeMode(card.dataset.mode);
  });
  $("#closeQuiz").addEventListener("click", closeQuizDrawer);
  $("#resetProgress").addEventListener("click", () => {
    state.stats = { solved: 0, correct: 0, wrong: 0, blank: 0, seconds: 0, streak: 0 };
    state.topicStats = {};
    state.answers = [];
    saveState();
    renderAll();
  });
  $("#topicFilter").addEventListener("change", renderTopics);
  $("#practiceGradeFilter")?.addEventListener("change", () => {
    activePracticeId = null;
    practiceAnswersVisible = false;
    practiceJustCompleted = false;
    renderPractice();
  });
  $("#practiceFocusFilter")?.addEventListener("change", () => {
    activePracticeId = null;
    practiceAnswersVisible = false;
    practiceJustCompleted = false;
    renderPractice();
  });
  $("#practiceReader")?.addEventListener("input", (event) => {
    const textarea = event.target.closest("[data-practice-note]");
    if (!textarea || !activePracticeId) return;
    savePracticeNote(activePracticeId, textarea.dataset.practiceNote, textarea.value);
  });
  $("#practiceReader")?.addEventListener("click", (event) => {
    if (event.target.closest("#togglePracticeAnswers")) {
      practiceAnswersVisible = !practiceAnswersVisible;
      renderPractice();
      return;
    }
    if (event.target.closest("#clearPracticeNotes")) {
      clearPracticeNotes();
      return;
    }
    if (event.target.closest("#completePracticePassage")) {
      completePracticePassage();
      return;
    }
    if (event.target.closest("#resetPracticeSet")) {
      resetPracticeSet();
      return;
    }
    if (event.target.closest("#pickRandomPractice")) pickRandomPractice();
  });
  $("#questionBankGrade").addEventListener("change", () => {
    updateQuestionBankTopics();
    renderQuestionBank();
  });
  $("#questionBankTopic").addEventListener("change", renderQuestionBank);
  $("#questionBankDifficulty").addEventListener("change", renderQuestionBank);
  $("#questionBankSearch").addEventListener("input", renderQuestionBank);
  $("#unlockQuestionBank").addEventListener("click", () => {
    const password = ($("#questionBankPassword").value || "").trim();
    const message = $("#questionBankLockMessage");
    if (password !== QUESTION_BANK_PASSWORD) {
      if (message) message.textContent = "Şifre yanlış. Tekrar dene.";
      $("#questionBankPassword").value = "";
      $("#questionBankPassword").focus();
      return;
    }
    questionBankUnlocked = true;
    if (message) message.textContent = "Soru havuzu açıldı.";
    renderQuestionBank();
  });
  $("#questionBankPassword").addEventListener("keydown", (event) => {
    if (event.key === "Enter") $("#unlockQuestionBank").click();
  });
  $("#questionBankList").addEventListener("click", (event) => {
    const card = event.target.closest(".question-preview-card");
    if (!card) return;
    if (event.target.closest(".edit-question")) {
      editingQuestionId = card.dataset.questionId;
      renderQuestionBank();
      window.lucide?.createIcons();
      return;
    }
    if (event.target.closest(".cancel-question-edit")) {
      editingQuestionId = null;
      renderQuestionBank();
      window.lucide?.createIcons();
      return;
    }
    if (event.target.closest(".delete-question")) {
      const question = questionById(card.dataset.questionId);
      if (!question) return;
      const ok = confirm("Bu soru havuzdan silinsin mi? Aynı sınıf koduyla giren öğrenciler de bu soruyu görmez.");
      if (!ok) return;
      deleteManagedQuestion(question);
      renderAll();
      setSyncStatus("Soru havuzdan kaldırıldı.", "ok");
    }
  });
  $("#questionBankList").addEventListener("submit", (event) => {
    const form = event.target.closest(".question-edit-form");
    if (!form) return;
    event.preventDefault();
    const question = questionFromEditForm(form);
    if (question.options.some((option) => !option)) {
      alert("A, B, C ve D seçeneklerinin tamamını doldur.");
      return;
    }
    upsertManagedQuestion(question);
    editingQuestionId = null;
    renderAll();
    setSyncStatus("Soru düzenlendi ve kaydedildi.", "ok");
  });
  $("#topicList").addEventListener("click", (event) => {
    const card = event.target.closest(".topic-card");
    if (!card) return;
    activeTopic = card.dataset.topic;
    renderTopics();
  });
  $("#topicDetail").addEventListener("click", (event) => {
    const button = event.target.closest(".lesson-button");
    if (!button) return;
    startQuiz(pickQuestions({ count: 5, topic: activeTopic, difficulty: button.dataset.difficulty }), activeTopic, `${button.dataset.difficulty} test`);
  });
  $("#questionCard").addEventListener("click", (event) => {
    const option = event.target.closest(".option-button");
    if (option) {
      answerQuestion(option.dataset.answer);
    }
    if (event.target.closest("#showHint")) $("#hintBox").hidden = false;
    if (event.target.closest("#blankQuestion")) {
      answerQuestion(null);
    }
    if (event.target.closest("#nextQuestion")) {
      quiz.index += 1;
      if (quiz.index >= quiz.questions.length) finishQuiz();
      else renderQuestion();
    }
    if (event.target.closest("#finishClose")) {
      closeQuizDrawer();
    }
  });
  $("#practiceWeakTopic").addEventListener("click", () => {
    activeTopic = weakestTopic() || gradePlan[state.grade].focus[0];
    setView("topics");
    renderTopics();
  });
  $("#practiceMistakes").addEventListener("click", () => {
    const pending = (state.mistakeBook || []).filter((item) => item.status !== "Öğrenildi").map(mistakeToQuestion);
    if (!pending.length) {
      alert("Yanlış defterinde bekleyen soru yok.");
      return;
    }
    startQuiz(pending.slice(0, 10), "Yanlış Defteri", `${state.grade}. sınıf tekrar`);
  });
  $("#mistakeBook").addEventListener("click", (event) => {
    const button = event.target.closest(".retry-mistake");
    if (!button) return;
    const pending = (state.mistakeBook || []).filter((item) => item.status !== "Öğrenildi");
    const item = pending[Number(button.dataset.index)];
    if (item) startQuiz([mistakeToQuestion(item)], "Yanlış Tekrarı", item.topic);
  });
  $("#downloadPdf").addEventListener("click", downloadStudentReport);
  $("#newClassCode").addEventListener("click", () => {
    state.teacherClassCode = generateClassCode();
    ensureClassroom(state.teacherClassCode);
    saveState();
    renderTeacher();
  });
  $("#assignGrade")?.addEventListener("change", updateAssignmentTopics);
  $("#customGrade").addEventListener("change", updateCustomTopics);
  $("#assignmentList")?.addEventListener("click", (event) => {
    const button = event.target.closest(".start-assignment");
    if (!button) return;
    const assignment = state.assignments[Number(button.dataset.index)];
    if (!assignment) return;
    assignment.status = "Başlandı";
    saveState();
    renderAssignments();
    startQuiz(
      pickQuestions({ count: assignment.count, grade: assignment.grade, topic: assignment.topic, difficulty: assignment.difficulty }),
      assignment.topic,
      `${assignment.grade}. sınıf ödevi`
    );
  });
  $("#teacherAssignmentForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (assignHomework()) alert("Ödev kaydedildi.");
  });
  $("#dailyTaskForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    publishDailyTask();
    alert("Günün görevi yayınlandı.");
  });
  $("#clearDailyTask")?.addEventListener("click", clearDailyTask);
  $("#customPracticeGrade")?.addEventListener("change", updateCustomPracticeFocus);
  $("#customPracticeForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    addCustomPracticePassage();
  });
  $("#customQuestionForm").addEventListener("submit", (event) => {
    event.preventDefault();
    addCustomQuestion();
  });
  $("#addStudent").addEventListener("click", () => {
    alert("Yeni öğrenci ekleme akışı prototipte hazır durum olarak temsil edilir.");
  });
  window.paragrafKocuAppReady = true;
}

bindEvents();
renderAll();
updatePendingSyncStatus();
window.addEventListener("online", () => {
  setSyncStatus("Bağlantı geri geldi; bekleyen kayıtlar gönderiliyor.", "warn");
  syncQueuedRecords();
});
setInterval(() => {
  if (pendingSyncCount() > 0) syncQueuedRecords();
}, 30000);
window.paragrafKocuRemoteReady = bootstrapRemoteData;
bootstrapRemoteData();
