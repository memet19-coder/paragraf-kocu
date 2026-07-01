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
  "Tablo-grafik-görsel okuma", "Sözel mantık destekli paragraf soruları", "LGS tarzı yeni nesil paragraf soruları"
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
    focus: ["Konu bulma", "Ana düşünce", "Yardımcı düşünce", "Metnin amacı", "Tablo-grafik-görsel okuma", "Sözel mantık destekli paragraf soruları", "Neden-sonuç", "Karşılaştırma", "Paragraf tamamlama"]
  },
  7: {
    headline: "7. sınıf için yorumlama ve akışı koruma",
    subline: "Örtülü anlam, cümle sıralama, anlatım biçimleri ve akışı bozan cümleler öne çıkar.",
    focus: ["Konu bulma", "Ana düşünce", "Yardımcı düşünce", "Örtülü anlam", "Tablo-grafik-görsel okuma", "Sözel mantık destekli paragraf soruları", "Yorumlama", "Cümle sıralama", "Düşüncenin akışını bozan cümle", "Anlatım biçimleri", "Düşünceyi geliştirme yolları"]
  },
  8: {
    headline: "8. sınıf için LGS düzeyi yeni nesil tempo",
    subline: "Uzun paragraf, görsel okuma, sözel mantık ve güçlü çeldiricilerle çalışılır.",
    focus: ["Konu bulma", "Ana düşünce", "Yardımcı düşünce", "LGS tarzı yeni nesil paragraf soruları", "Metinler arası karşılaştırma", "Tablo-grafik-görsel okuma", "Sözel mantık destekli paragraf soruları", "Çıkarım yapma", "Zaman yönetimi"]
  }
};

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
    text: "Bir kulüp çalışmasında herkesin aynı görevi yapması beklenmez. Kimi öğrenci afiş hazırlar, kimi duyuru metni yazar, kimi de etkinlik günü düzeni sağlar. Farklı görevler doğru biçimde paylaşıldığında ----",
    stem: "Bu metin aşağıdakilerden hangisiyle tamamlanırsa anlam bütünlüğü sağlanır?",
    options: ["çalışma daha düzenli ve verimli ilerler.", "kulüp etkinlikleri tamamen gereksiz hâle gelir.", "hiç kimsenin sorumluluk almasına gerek kalmaz.", "afiş hazırlamak bütün görevlerden önemsizdir."],
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
    text: "Bir yazar, iyi bir metnin okura her şeyi açıkça söylemek zorunda olmadığını belirtir. Ona göre metin, okurun zihninde tamamlanacak boşluklar bıraktığında daha kalıcı olur. Fakat bu boşluklar rastgele değil, metnin ipuçlarıyla desteklenmiş olmalıdır. Aksi halde okur yorum yapmak yerine tahmin etmek zorunda kalır.",
    stem: "Bu paragrafa göre iyi bir metinde bulunması gereken özellik aşağıdakilerden hangisidir?",
    options: ["Okura hiç yorum alanı bırakmamak", "Tüm bilgileri uzun açıklamalarla vermek", "İpuçlarıyla desteklenen anlam boşlukları oluşturmak", "Okurun yalnızca tahmine dayanmasını sağlamak"],
    answer: "C",
    solution: "Paragrafta hem boşluk bırakmanın önemi hem de bu boşlukların ipuçlarıyla desteklenmesi gerektiği vurgulanıyor. Bu iki koşulu birlikte karşılayan seçenek C'dir.",
    wrong: "A metnin yorum alanını yok eder. B 'her şeyi açıkça söylemek zorunda değildir' ifadesine aykırıdır. D metinde olumsuz durum olarak verilir.",
    strategy: "LGS taktiği: iki koşullu ifadeleri tek seçenekte birlikte ara; yalnız bir kısmını veren çeldiriciyi ele.",
    hint: "Boşluk ve ipucu kavramlarını birlikte düşün."
  },
  {
    grade: 8, topic: "LGS tarzı yeni nesil paragraf soruları", difficulty: "Zor", outcome: "Uzun paragrafta ana düşünce ve çıkarımı birlikte değerlendirir.",
    text: "Son yıllarda okuma sorularında öğrenciden yalnızca metindeki bilgiyi bulması değil, bilgiyi farklı durumlara taşıması da bekleniyor. Bir paragrafta yazar doğrudan 'sabırlı olun' demeyebilir; bunun yerine uzun süre emek veren bir kişinin sonunda başarıya ulaşmasını anlatabilir. Böyle bir soruda öğrenci, olayın yüzeyinde kalırsa yalnızca kahramanın ne yaptığını görür. Oysa asıl istenen, bu olaydan çıkarılacak genel düşünceyi fark etmektir.",
    stem: "Bu metne göre yeni nesil paragraf sorularında öğrenciden beklenen temel beceri aşağıdakilerden hangisidir?",
    options: ["Metindeki her kelimeyi ezberlemek", "Olaydan hareketle genel düşünceye ulaşmak", "Paragrafı yalnızca hızlı okumak", "Kahramanın adını ve yerini bulmakla yetinmek"],
    answer: "B",
    solution: "Metin, öğrencinin olayın yüzeyinde kalmaması ve olaydan çıkarılacak genel düşünceyi fark etmesi gerektiğini anlatır.",
    wrong: "A ezber vurgusu yoktur. C hız tek başına yeterli değildir. D metnin eleştirdiği yüzeyde kalma davranışıdır.",
    strategy: "LGS taktiği: örnek olayın arkasındaki genel mesajı bul; seçeneklerde bu mesajı aramaya öncelik ver.",
    hint: "Metin 'asıl istenen' diyerek cevabın yönünü gösteriyor."
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
    { title: "Takım Çalışması", idea: "farklı görevlerin ortak başarıya katkısı", example: "bir grup afiş hazırlarken diğer grup sunum metnini düzenledi", odd: "Volkanik dağlar lav püskürterek oluşabilir.", hidden: "Paylaşılan sorumluluk başarıyı kolaylaştırır.", style: "açıklayıcı anlatım" },
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
    "Bu olaydan sonra öğrenciler, küçük bir görevin bile dikkat ve sorumluluk istediğini daha iyi anladı.",
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
        text: `<p>Okul kantininde sağlıklı ara öğün haftası için bir afiş hazırlanmıştır. Afişte ürünlerin özellikleri şöyle verilmiştir:</p>${stimulusTable(["Ürün", "Meyve içerir", "Şeker eklenmiş", "Saklama"], [["Yoğurtlu kase", "Evet", "Hayır", "Soğuk"], ["Kuru meyve paketi", "Evet", "Hayır", "Kuru"], ["Çikolatalı bar", "Hayır", "Evet", "Kuru"], ["Meyveli içecek", "Evet", "Evet", "Soğuk"]])}<p>Öğrencilerden meyve içeren ama şeker eklenmemiş ürünleri seçmeleri istenmiştir.</p>`,
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

function generatedQuestion(grade, topic, index) {
  const seed = passageSeeds[grade][index % passageSeeds[grade].length];
  const difficulty = index % 5 < 2 ? "Kolay" : index % 5 < 4 ? "Orta" : "Zor";
  const number = index + 1;
  const variantNotes = {
    5: ["öğretmen kısa bir değerlendirme yaptı", "arkadaşları kendi görevlerini de anlattı", "sınıf panosuna küçük bir not asıldı", "çalışmanın sonucu ertesi gün yeniden konuşuldu"],
    6: ["öğrenciler sonucu defterlerine iki maddeyle yazdı", "öğretmen benzer bir günlük yaşam örneği verdi", "sınıf, neden ve sonucu birlikte tartıştı", "çalışmanın sonunda kısa bir özet çıkarıldı"],
    7: ["öğrenciler metindeki anahtar sözcükleri işaretledi", "sınıfta farklı yorumlar karşılaştırıldı", "öğretmen konu dışı ayrıntıları ayıklamalarını istedi", "metnin giriş ve sonuç cümleleri ayrıca incelendi"],
    8: ["öğrenciler sürelerini tabloya işledi", "yanlış seçeneklerin neden güçlü çeldirici olduğu tartışıldı", "soru kökü önce okunarak çözüm yolu belirlendi", "verilerden kesin yargı ile yorum ayrıldı"]
  };
  const note = variantNotes[grade][Math.floor(index / passageSeeds[grade].length) % variantNotes[grade].length];
  const extension = paragraphExtension(grade, seed, note, index);
  const newGenQuestion = newGenerationQuestion(grade, topic, index, seed, note, difficulty, number);
  if (newGenQuestion) return newGenQuestion;

  if (grade === 5) {
    const text = `${seed.person}, ${seed.place} için küçük bir görev üstlendi. Önce ${seed.action}, sonra ${seed.detail} konusunda arkadaşlarından yardım aldı. Günün sonunda herkes yapılan işin işe yaradığını fark etti. ${seed.person}, birlikte çalışınca işlerin daha kolay bittiğini düşündü; ayrıca ${note}. ${extension}`;
    const map = {
      "Konu bulma": {
        stem: "Bu metnin konusu aşağıdakilerden hangisidir?",
        options: ["Bir yarışmanın sonucu", `${seed.person}'in ${seed.detail} ile ilgili çalışması`, "Yeni bir oyuncak alınması", "Uzak bir şehre yolculuk"],
        answer: "B",
        solution: `Metnin bütününde ${seed.person}'in ${seed.detail} ile ilgili yaptığı çalışma anlatılır.`
      },
      "Ana düşünce": {
        stem: "Bu metnin ana düşüncesi aşağıdakilerden hangisidir?",
        options: ["Her iş tek başına yapılmalıdır.", seed.message, "Plan yapmak zaman kaybettirir.", "Arkadaşlardan yardım istemek yanlıştır."],
        answer: "B",
        solution: `Metin, olay üzerinden '${seed.message}' düşüncesini verir.`
      },
      "Başlık bulma": {
        stem: "Bu metne en uygun başlık hangisidir?",
        options: ["Beklenmeyen Yolculuk", seed.title, "Zor Bir Sınav", "Kayıp Harita"],
        answer: "B",
        solution: `Başlık metnin tamamını kapsamalıdır. Metin ${seed.title.toLowerCase()} çevresinde gelişir.`
      },
      "Yardımcı düşünce": {
        stem: "Bu metinde aşağıdakilerden hangisine değinilmiştir?",
        options: ["Görevin hiç tamamlanamadığına", seed.detail, "Öğrencilerin okuldan ayrıldığına", "Yeni bir ders başladığına"],
        answer: "B",
        solution: `Metinde ${seed.detail} açıkça belirtilmiştir.`
      },
      "Hikâye unsurları": {
        stem: "Bu metinde olayın geçtiği yer aşağıdakilerden hangisidir?",
        options: ["Tren istasyonu", seed.place, "Spor salonu", "Sinema"],
        answer: "B",
        solution: `Olayın geçtiği yer metinde ${seed.place} olarak verilir.`
      },
      "Çıkarım yapma": {
        stem: "Bu metinden aşağıdakilerden hangisi çıkarılabilir?",
        options: ["Öğrenciler görevden kaçmıştır.", seed.inference, "Yapılan iş kimseye yarar sağlamamıştır.", "Metinde bir yarış anlatılmıştır."],
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
        options: ["Öğrencilerin oyun kuralları", `${seed.title} çalışmasında ${seed.detail}`, "Okul gezisinin hazırlıkları", "Bir yarışmanın sonucu"],
        answer: "B",
        solution: `Metnin tamamında ${seed.title.toLowerCase()} çalışması ve ${seed.detail} üzerinde durulur. Bu yüzden konu B seçeneğidir.`
      },
      "Ana düşünce": {
        stem: "Bu metnin ana düşüncesi aşağıdakilerden hangisidir?",
        options: ["Kurallar her zaman gereksizdir.", seed.message, "Gözlem yapmak öğrenmeyi engeller.", "Planlı olmak sadece yetişkinler için önemlidir."],
        answer: "B",
        solution: `Metin ${seed.detail} üzerinden '${seed.message}' düşüncesini anlatır.`
      },
      "Yardımcı düşünce": {
        stem: "Bu metinde aşağıdakilerden hangisine değinilmiştir?",
        options: ["Çalışmanın yarıda kaldığına", seed.detail, "Öğretmenin konuyu değiştirdiğine", "Öğrencilerin hiç görev almadığına"],
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
        options: ["Bir spor karşılaşmasının sonucu", `${seed.title} üzerinden ${seed.idea}`, "Bir eşyanın teknik özellikleri", "Okul kantinindeki fiyatlar"],
        answer: "B",
        solution: `Metinde ${seed.title.toLowerCase()} ve ${seed.idea} düşüncesi birlikte işlenir; konu bu ortak çizgide toplanır.`
      },
      "Ana düşünce": {
        text: baseText,
        stem: "Bu metnin ana düşüncesi aşağıdakilerden hangisidir?",
        options: ["Sonuca ulaşmak için süreç önemsizdir.", seed.hidden, "Ayrıntılar her zaman konudan uzaklaştırır.", "Öğrenme yalnızca ezberle gerçekleşir."],
        answer: "B",
        solution: `Metindeki örnek ve sonuç bölümü '${seed.hidden}' düşüncesini destekler.`
      },
      "Yardımcı düşünce": {
        text: baseText,
        stem: "Bu metinde aşağıdakilerden hangisine değinilmiştir?",
        options: ["Öğrencilerin hiçbir etkinliğe katılmadığına", seed.example, "Konunun tamamen değiştirilmesine", "Sonucun rastlantıyla ortaya çıktığına"],
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
        text: `(I) Sonunda öğrenciler ${seed.idea} düşüncesini daha iyi kavradı. (II) Öğretmen önce sınıfa kısa bir örnek verdi. (III) Daha sonra öğrenciler bu örnekten yola çıkarak kendi cümlelerini yazdı. (IV) Derste ${seed.title.toLowerCase()} konusu işlendi.`,
        stem: "Numaralanmış cümlelerle anlamlı bir paragraf oluşturulduğunda sıralama nasıl olmalıdır?",
        options: ["IV-II-III-I", "II-I-IV-III", "I-III-II-IV", "III-IV-I-II"],
        answer: "A",
        solution: "Önce konu verilir, sonra öğretmenin örneği, öğrencilerin çalışması ve sonuç gelir."
      },
      "Düşüncenin akışını bozan cümle": {
        text: `(I) ${seed.title} öğrencilerin dikkatini çeken bir konuydu. (II) Öğretmen ${seed.idea} üzerinde durdu. (III) ${seed.odd} (IV) Verilen örnekler konunun daha iyi anlaşılmasını sağladı.`,
        stem: "Numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?",
        options: ["I", "II", "III", "IV"],
        answer: "C",
        solution: "III. cümle metnin konusu ile ilgili değildir ve anlam akışını bozar."
      },
      "Anlatım biçimleri": {
        text: `${seed.example}. Metinde ayrıntılar, düşünceyi okurun zihninde belirginleştirmek için seçilmiştir. Yazar, konuyu doğrudan bilgi vererek ve örnekle destekleyerek anlatır.`,
        stem: "Bu metinde ağır basan anlatım biçimi hangisidir?",
        options: ["Öyküleyici anlatım", seed.style, "Destansı anlatım", "Masalsı anlatım"],
        answer: "B",
        solution: `Metnin kuruluşu ${seed.style} özelliği gösterir.`
      },
      "Düşünceyi geliştirme yolları": {
        text: `${seed.idea} çoğu zaman somut bir örnekle daha kolay anlaşılır. Örneğin ${seed.example}. Bu örnek, anlatılan düşüncenin günlük yaşamda nasıl karşılık bulduğunu gösterir.`,
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
      options: ["Sınav kitapçığının basımı", "Paragraf sorularında çözüm sürecini değerlendirme", "Okulda yapılan sosyal etkinlikler", "Metin türlerinin tarihsel gelişimi"],
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

function balanceQuestionBank(baseQuestions) {
  const balanced = [];
  const weightedTargets = {
    5: {
      "Konu bulma": 55,
      "Ana düşünce": 60,
      "Yardımcı düşünce": 50,
      "Başlık bulma": 30,
      "Hikâye unsurları": 20,
      "Çıkarım yapma": 35,
      "Tablo-grafik-görsel okuma": 25,
      "Sözel mantık destekli paragraf soruları": 25
    },
    6: {
      "Konu bulma": 40,
      "Ana düşünce": 55,
      "Yardımcı düşünce": 55,
      "Metnin amacı": 30,
      "Neden-sonuç": 25,
      "Karşılaştırma": 20,
      "Paragraf tamamlama": 25,
      "Tablo-grafik-görsel okuma": 25,
      "Sözel mantık destekli paragraf soruları": 25
    },
    7: {
      "Konu bulma": 30,
      "Ana düşünce": 40,
      "Yardımcı düşünce": 40,
      "Örtülü anlam": 30,
      "Yorumlama": 25,
      "Cümle sıralama": 20,
      "Düşüncenin akışını bozan cümle": 20,
      "Anlatım biçimleri": 20,
      "Düşünceyi geliştirme yolları": 25,
      "Tablo-grafik-görsel okuma": 25,
      "Sözel mantık destekli paragraf soruları": 25
    },
    8: {
      "Konu bulma": 25,
      "Ana düşünce": 35,
      "Yardımcı düşünce": 35,
      "LGS tarzı yeni nesil paragraf soruları": 50,
      "Metinler arası karşılaştırma": 30,
      "Tablo-grafik-görsel okuma": 40,
      "Sözel mantık destekli paragraf soruları": 40,
      "Çıkarım yapma": 25,
      "Zaman yönetimi": 20
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

questionBank = balanceQuestionBank(questionBank).map((question) => ({ ...question, id: makeQuestionId(question) }));

const CONTENT_VERSION = 5;
let state = loadState();
let selectedCount = 5;
let activeTopic = topics[0];
let pendingGrade = state.grade;
let quiz = null;
let syncInProgress = false;

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
  return true;
}

async function remoteUpsertClass() {
  if (!isRemoteReady()) return;
  await remoteTry(() => remoteDb.from("classes").upsert({
    class_code: state.teacherClassCode,
    teacher_name: "Öğretmen"
  }, { onConflict: "class_code" }));
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
    stats: state.stats,
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
    assignments: data.assignments || []
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
    stats: student.stats || {},
    topicStats: student.topic_stats || {},
    mistakeBook: student.mistake_book || [],
    questionTimes: student.question_times || [],
    answers: attemptsToAnswers(attemptsByStudent[student.student_key] || []),
    assignments: student.assignments || []
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

async function remoteLoadCustomQuestions() {
  if (!isRemoteReady()) return;
  const codes = [state.teacherClassCode, state.classCode].filter(Boolean);
  if (!codes.length) return;
  const result = await remoteTry(() => remoteDb.from("custom_questions").select("*").in("class_code", codes), { data: [] });
  const data = result?.data || [];
  state.customQuestions = (data || []).map((item) => ({
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
  }));
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
    mistakeBook: [],
    questionTimes: [],
    stats: { solved: 0, correct: 0, wrong: 0, blank: 0, seconds: 0, streak: 0 },
    topicStats: {},
    answers: [],
    syncQueue: [],
    assignments: [
      { topic: "Ana düşünce", grade: 5, count: 10, difficulty: "Kolay", status: "Hazır" },
      { topic: "Paragraf tamamlama", grade: 6, count: 10, difficulty: "Orta", status: "Planlandı" }
    ]
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
  return Array.from({ length: count }, (_, index) => pool[index % pool.length]);
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
}

function applyStudentProfile(source) {
  if (source) {
    state.grade = String(source.grade || state.grade);
    state.stats = source.stats || state.stats;
    state.topicStats = source.topicStats || {};
    state.mistakeBook = source.mistakeBook || [];
    state.questionTimes = source.questionTimes || [];
    state.answers = source.answers || state.answers || [];
    state.assignments = source.assignments || state.assignments;
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
    strategies: "Stratejiler",
    mistakes: "Yanlışlarım",
    report: "Gelişim Raporum",
    assignments: "Ödevlerim",
    teacher: "Öğretmen Paneli"
  };
  $("#viewTitle").textContent = titles[view];
}

function renderDashboard() {
  const plan = gradePlan[state.grade];
  $("#dailyHeadline").textContent = plan.headline;
  $("#dailySubline").textContent = plan.subline;
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
  const sample = pickQuestions({ count: 1, topic })[0];
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

function wrongTopicSummary(student) {
  const wrongTopics = Object.entries(student.topicStats || {})
    .map(([topic, stat]) => ({ topic, wrong: stat?.wrong || 0 }))
    .filter((item) => item.wrong > 0)
    .sort((a, b) => b.wrong - a.wrong);
  if (!wrongTopics.length) return (student.stats?.solved || 0) ? "Yanlış yok" : "Veri yok";
  return wrongTopics.map((item) => `${item.topic} (${item.wrong})`).join(", ");
}

function renderAssignments() {
  $("#assignmentList").innerHTML = state.assignments.map((assignment, index) => `
    <article class="assignment-card">
      <strong>${assignment.topic}</strong>
      <span>${assignment.grade}. sınıf · ${assignment.count} soru · ${assignment.difficulty}</span>
      <span>${assignment.status}</span>
      <button class="secondary-action start-assignment" data-index="${index}"><i data-lucide="play"></i><span>Başla</span></button>
    </article>
  `).join("");
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

function renderTeacher() {
  ensureTeacherDetails();
  syncCurrentStudent();
  const code = state.teacherClassCode;
  const room = ensureClassroom(code);
  const students = Object.values(room.students);
  $("#teacherClassCode").textContent = code;
  $("#studentRows").innerHTML = students.length ? students.map((student) => {
    const weak = weakestTopicFor(student.topicStats || {});
    const correct = student.stats?.correct || 0;
    const wrong = student.stats?.wrong || 0;
    return `<tr><td>${student.name}</td><td>${student.grade}. sınıf</td><td>${student.stats?.solved || 0}</td><td>${correct}/${wrong}</td><td>${weak || "Veri bekliyor"}</td><td>${wrongTopicSummary(student)}</td></tr>`;
  }).join("") : `<tr><td colspan="6">Bu sınıf koduna bağlı öğrenci kaydı henüz yok.</td></tr>`;
  $("#assignStudent").innerHTML = students.length ? students.map((student) => `<option>${student.name}</option>`).join("") : `<option>Genel ödev</option>`;
  updateAssignmentTopics();
  updateCustomTopics();
  refreshRemoteTeacherPanel();
}

async function refreshRemoteTeacherPanel() {
  ensureTeacherDetails();
  const students = await remoteLoadClassroom(state.teacherClassCode);
  if (!students.length) return;
  const room = ensureClassroom(state.teacherClassCode);
  students.forEach((student) => {
    room.students[studentKey(student.name, state.teacherClassCode)] = student;
  });
  $("#studentRows").innerHTML = students.map((student) => {
    const weak = weakestTopicFor(student.topicStats || {});
    const correct = student.stats?.correct || 0;
    const wrong = student.stats?.wrong || 0;
    return `<tr><td>${student.name}</td><td>${student.grade}. sınıf</td><td>${student.stats?.solved || 0}</td><td>${correct}/${wrong}</td><td>${weak || "Veri bekliyor"}</td><td>${wrongTopicSummary(student)}</td></tr>`;
  }).join("");
  $("#assignStudent").innerHTML = students.map((student) => `<option>${student.name}</option>`).join("");
}

function ensureTeacherDetails() {
  const header = document.querySelector("#teacherView .student-table thead tr");
  if (!header) return;
  const cells = Array.from(header.children);
  const lastCell = cells[cells.length - 1];
  if (lastCell) lastCell.textContent = "Yanlış konuları";
}

function updateAssignmentTopics() {
  const grade = $("#assignGrade")?.value || state.grade;
  const gradeTopics = availableTopicsForGrade(grade);
  $("#assignTopic").innerHTML = gradeTopics.map((topic) => `<option>${topic}</option>`).join("");
}

function updateCustomTopics() {
  const grade = $("#customGrade")?.value || state.grade;
  $("#customTopic").innerHTML = availableTopicsForGrade(grade).map((topic) => `<option>${topic}</option>`).join("");
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
  renderStrategies();
  renderMistakes();
  renderReport();
  renderAssignments();
  renderTeacher();
}

async function bootstrapRemoteData() {
  if (!isRemoteReady()) {
    updatePendingSyncStatus();
    return;
  }
  await remoteUpsertClass();
  await syncQueuedRecords();
  await remoteLoadCustomQuestions();
  renderAll();
}

function startQuiz(questions, title, meta) {
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
  $("#quizMeta").textContent = quiz.meta;
  $("#quizTitle").textContent = `${quiz.title} · ${quiz.index + 1}/${quiz.questions.length}`;
  $("#quizProgressBar").style.width = `${(quiz.index / quiz.questions.length) * 100}%`;
  $("#questionCard").innerHTML = `
    <div class="question-field"><small>Sınıf seviyesi</small><span>${question.grade}. sınıf</span></div>
    <div class="question-field"><small>Konu</small><span>${question.topic}</span></div>
    ${question.grade === 8 ? `<div class="question-field"><small>Süre takibi</small><span class="timer-chip">8. sınıf için süre kaydediliyor</span></div>` : ""}
    <div class="question-field">
      <small>Paragraf metni</small>
      <div class="paragraph-workbench">
        <div class="marking-tools" role="group" aria-label="Paragraf işaretleme araçları">
          <button class="marking-tool is-active" id="penTool" type="button">Kalem</button>
          <button class="marking-tool" id="eraserTool" type="button">Silgi</button>
          <button class="marking-tool" id="clearMarks" type="button">Temizle</button>
        </div>
        <div class="paragraph-mark-area">
          <div class="paragraph-text" id="paragraphText">${question.text}</div>
          <canvas id="paragraphCanvas" aria-label="Paragraf üzerine işaretleme alanı"></canvas>
        </div>
      </div>
    </div>
    <div class="question-field"><small>Soru kökü</small><strong>${question.stem}</strong></div>
    <div class="option-list">
      ${question.options.map((option, index) => {
        const letter = String.fromCharCode(65 + index);
        return `<button class="option-button" data-answer="${letter}">${letter}) ${option}</button>`;
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
    saveState();
    renderAll();
  });
  $$(".segmented").forEach((button) => button.addEventListener("click", () => {
    $$(".segmented").forEach((item) => item.classList.remove("is-selected"));
    button.classList.add("is-selected");
    selectedCount = Number(button.dataset.count);
  }));
  $("#startDaily").addEventListener("click", () => startQuiz(pickQuestions({ count: selectedCount, grade: state.grade }), "Günlük Antrenman", `${state.grade}. sınıf`));
  $("#closeQuiz").addEventListener("click", closeQuizDrawer);
  $("#resetProgress").addEventListener("click", () => {
    state.stats = { solved: 0, correct: 0, wrong: 0, blank: 0, seconds: 0, streak: 0 };
    state.topicStats = {};
    state.answers = [];
    saveState();
    renderAll();
  });
  $("#topicFilter").addEventListener("change", renderTopics);
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
  $("#assignGrade").addEventListener("change", updateAssignmentTopics);
  $("#customGrade").addEventListener("change", updateCustomTopics);
  $("#assignmentList").addEventListener("click", (event) => {
    const button = event.target.closest(".start-assignment");
    if (!button) return;
    const assignment = state.assignments[Number(button.dataset.index)];
    startQuiz(
      pickQuestions({ count: assignment.count, grade: assignment.grade, topic: assignment.topic, difficulty: assignment.difficulty }),
      assignment.topic,
      `${assignment.grade}. sınıf ödevi`
    );
  });
  $("#teacherAssignmentForm").addEventListener("submit", (event) => {
    event.preventDefault();
    state.assignments.unshift({
      topic: $("#assignTopic").value,
      grade: Number($("#assignGrade").value),
      count: Number($("#assignCount").value),
      difficulty: $("#assignDifficulty").value,
      status: "Yeni"
    });
    saveState();
    renderAssignments();
    setView("assignments");
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
