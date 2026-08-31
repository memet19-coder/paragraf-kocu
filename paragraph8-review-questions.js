const makeReviewQuestion = (id, topic, difficulty, text, stem, options, answer, solution) => ({
  id,
  grade: 8,
  topic,
  difficulty,
  text,
  stem,
  options,
  answer,
  solution,
  reviewOnly: true,
  collection: "grade8-original-review"
});

window.PARAGRAPH8_REVIEW_QUESTIONS = [
  makeReviewQuestion(
    "review8-001",
    "Ana fikir",
    "Orta",
    "Bir yapıyı onarmak, onu ilk günkü görünümüne döndürmekten ibaret değildir. Restoratör, yapının geçirdiği dönemleri ve üzerinde bıraktığı izleri de okumak zorundadır. Örneğin yüz yıllık bir konağın sonradan eklenen ahşap saçağı, ilk tasarımda bulunmasa bile mahallenin değişen yaşamını anlatabilir. Bu yüzden iyi bir onarım, eski olan her izi silmez; yapının taşıdığı tarihsel katmanları birbirinden ayırarak korur.",
    "Bu metinde asıl anlatılmak istenen aşağıdakilerden hangisidir?",
    [
      "Eski yapıların tamamı ilk tasarımlarına uygun biçimde yenilenmelidir.",
      "Bir yapının sonradan eklenen bölümleri tarihî değer taşımaz.",
      "Başarılı restorasyon, yapının farklı dönemlerden taşıdığı izleri gözetir.",
      "Restorasyon çalışmalarında yalnızca sağlam malzemeler kullanılmalıdır."
    ],
    "C",
    "Metin, restorasyonun yapının bütün tarihsel katmanlarını okuyup koruması gerektiğini vurgular."
  ),
  makeReviewQuestion(
    "review8-002",
    "Yardımcı düşünce",
    "Orta",
    "Kentlerde yaşayan bazı kuşlar, doğal ortamlarındaki akrabalarından farklı davranışlar geliştiriyor. Gürültülü bölgelerde ötüşlerini daha yüksek perdeden yapan kuşlar, seslerini trafik uğultusunun arasından duyurabiliyor. Bazı türlerse insanların bıraktığı ip, kâğıt ve ince plastik parçalarını yuva yapımında kullanıyor. Ancak bu uyum yeteneği, kent yaşamının kuşlar için bütünüyle güvenli olduğu anlamına gelmiyor; cam yüzeyler ve yoğun ışık, onlar için ciddi tehlikeler oluşturuyor.",
    "Bu metinden aşağıdakilerin hangisine ulaşılamaz?",
    [
      "Kent kuşlarının çevre koşullarına göre davranış değiştirebildiğine",
      "Kentte yaşayan bütün kuş türlerinin doğal ortamlarından daha uzun yaşadığına",
      "Bazı insan yapımı malzemelerin kuş yuvalarında kullanılabildiğine",
      "Yüksek binalardaki camların kuşlar için tehlikeli olabildiğine"
    ],
    "B",
    "Metinde kentte yaşayan bütün kuşların daha uzun yaşadığına ilişkin bir bilgi yoktur."
  ),
  makeReviewQuestion(
    "review8-003",
    "Konu ve başlık",
    "Orta",
    "Bir müzede sergilenen nesne, vitrine yerleştirildiği anda günlük kullanımından kopar. Bir terzinin makası artık kumaş kesmez, eski bir pusula yol göstermez. Buna rağmen bu nesneler suskun değildir. Üretildikleri dönemin teknolojisini, insanların ihtiyaçlarını ve yaşama biçimlerini anlatırlar. Müzeyi gezen kişi de nesneye yalnızca 'eski bir eşya' olarak değil, geçmişten kalan bir tanık olarak baktığında serginin gerçek anlamına ulaşır.",
    "Bu metne getirilebilecek en uygun başlık aşağıdakilerden hangisidir?",
    [
      "Müzelerde Güvenlik Önlemleri",
      "Eski Eşyaların Maddi Değeri",
      "Günlük Araçların Üretim Aşamaları",
      "Geçmişin Tanıkları: Müze Nesneleri"
    ],
    "D",
    "Metin, müze nesnelerinin geçmişi anlatan tanıklar oluşu üzerinde durmaktadır."
  ),
  makeReviewQuestion(
    "review8-004",
    "Düşüncenin akışını bozan cümle",
    "Orta",
    "(I) Bir tohum bankasında farklı bitki türlerine ait tohumlar düşük sıcaklık ve nem koşullarında saklanır. (II) Böylece kuraklık, hastalık ya da doğal afet nedeniyle yok olma tehlikesi yaşayan türlerin genetik özellikleri korunur. (III) Tohumlar belirli aralıklarla çimlendirilerek canlılıklarını sürdürüp sürdürmedikleri kontrol edilir. (IV) Bazı bitkilerin yaprakları geleneksel yemeklerde baharat olarak kullanılır. (V) Bu çalışmalar gelecekte yapılacak tarımsal araştırmalar için de önemli bir kaynak oluşturur.",
    "Numaralanmış cümlelerden hangisi metnin anlam bütünlüğünü bozmaktadır?",
    ["IV", "II", "V", "III"],
    "A",
    "IV. cümle tohum bankalarının işlevinden uzaklaşıp bitkilerin mutfaktaki kullanımına geçmektedir."
  ),
  makeReviewQuestion(
    "review8-005",
    "Paragraf tamamlama",
    "Zor",
    "Bir araştırmacı, yalnızca beklediği sonucu destekleyen verileri seçerse çalışmasının güvenilirliğini zedeler. Çünkü bilimsel araştırmanın amacı, önceden verilmiş bir hükmü doğrulamak değil; soruya elde edilen kanıtlar doğrultusunda cevap aramaktır. Bu nedenle araştırmacı, kendi görüşüyle çelişen bulguları da açıklamalı ve yönteminin sınırlarını açıkça belirtmelidir. Kısacası - - - -",
    "Bu metin düşüncenin akışına göre aşağıdakilerden hangisiyle tamamlanmalıdır?",
    [
      "araştırma sonuçları yalnızca uzmanların anlayacağı bir dille yazılmalıdır.",
      "bilimsel çalışmalarda beklenmeyen sonuçlar göz ardı edilebilir.",
      "bilimsel dürüstlük, bütün verileri tarafsız biçimde değerlendirmeyi gerektirir.",
      "araştırmacının kişisel deneyimleri kanıtlardan daha belirleyicidir."
    ],
    "C",
    "Parçanın bütünü, bilimsel dürüstlüğün tüm verileri tarafsız değerlendirmeye bağlı olduğunu anlatır."
  ),
  makeReviewQuestion(
    "review8-006",
    "Dil ve anlatım",
    "Orta",
    "Gün batarken iskeledeki tekneler ağır ağır karanlığa gömülüyordu. Deniz, kıyıya bıraktığı köpükleri geri almak istercesine usulca uzanıyor; martıların keskin çığlıkları, balıkçıların yorgun konuşmalarına karışıyordu. Paslı zincirlerin kokusu ve serin rüzgâr, yaklaşan gecenin haberini veriyordu.",
    "Bu metnin dil ve anlatımıyla ilgili aşağıdakilerden hangisi söylenemez?",
    [
      "Betimleyici ögelere yer verilmiştir.",
      "Birden fazla duyuyla ilgili ayrıntı kullanılmıştır.",
      "Kişileştirmeden yararlanılmıştır.",
      "Olay, kahraman anlatıcının ağzından aktarılmıştır."
    ],
    "D",
    "Metin üçüncü kişi anlatımıyla kurulmuştur; anlatıcı olayın kahramanı değildir."
  ),
  makeReviewQuestion(
    "review8-007",
    "Metin karşılaştırma",
    "Zor",
    "I. metin: Bir kitabı hızlı bitirmek, onu iyi okuduğumuz anlamına gelmez. Bazen tek bir cümle üzerinde durmak, yazarın kurduğu düşünce zincirini izlemek gerekir. Okuma hızı, metnin türüne ve amacımıza göre değişmelidir.\n\nII. metin: Not alarak okumak, okurun metinle konuşmasına benzer. Kenara düşülen kısa bir soru ya da işaretlenen bir kavram, okurun dikkatini canlı tutar ve metne döndüğünde düşünceyi yeniden kurmasını kolaylaştırır.",
    "Bu iki metnin ortak yönü aşağıdakilerden hangisidir?",
    [
      "Her kitabın aynı hızla okunması gerektiğini savunmaları",
      "Okurun metin karşısında etkin olması gerektiğini vurgulamaları",
      "Yalnızca bilimsel kitapların nasıl okunacağını açıklamaları",
      "Not almanın okuma hızını mutlaka düşürdüğünü ileri sürmeleri"
    ],
    "B",
    "Her iki metin de okurun metni bilinçli biçimde işlemesini, yani etkin olmasını vurgular."
  ),
  makeReviewQuestion(
    "review8-008",
    "Anlatım biçimleri",
    "Orta",
    "Bazıları, teknolojik araçların insanı doğadan bütünüyle uzaklaştırdığını söylüyor. Oysa aynı araçlar doğru kullanıldığında doğayı tanımamıza yardım edebilir. Göçmen kuşların rotasını izleyen uygulamalar, öğrencilerin yaşadıkları bölgedeki türleri kaydetmesini sağlıyor. Sorun teknolojinin varlığı değil, onun hangi amaçla kullanıldığıdır.",
    "Bu metinde ağır basan anlatım biçimi aşağıdakilerden hangisidir?",
    ["Tartışma", "Öyküleme", "Betimleme", "Açıklama"],
    "A",
    "Yazar karşı çıktığı bir görüşü verip kendi düşüncesini savunduğu için tartışmaya başvurmuştur."
  ),
  makeReviewQuestion(
    "review8-009",
    "Yardımcı düşünce",
    "Orta",
    "Geleneksel ahşap oyuncak yapan ustalar, kullandıkları ağacı yalnız sertliğine göre seçmez. Ağacın lif yönü, oyuncağın dayanıklılığını; nem oranı ise biçimini koruyup koruyamayacağını etkiler. Usta, parçaları birleştirmeden önce yüzeyi uzun süre dinlendirir. Boyama aşamasında çocuk sağlığına zarar vermeyen doğal yağları tercih eder. Böylece ortaya yalnızca güzel görünen değil, uzun süre güvenle kullanılabilen bir ürün çıkar.",
    "Bu metinde ahşap oyuncaklarla ilgili aşağıdakilerden hangisine değinilmemiştir?",
    [
      "Ağaç seçiminde hangi özelliklerin dikkate alındığına",
      "Boyamada doğal malzemelerin tercih edildiğine",
      "Ürünlerin hangi yaş grubuna göre sınıflandırıldığına",
      "Dayanıklılığın üretim süreciyle ilişkili olduğuna"
    ],
    "C",
    "Metinde oyuncakların yaş gruplarına göre sınıflandırılmasına değinilmemiştir."
  ),
  makeReviewQuestion(
    "review8-010",
    "Paragrafta sıralama",
    "Zor",
    "I. Bu kayıtlar karşılaştırıldığında, bölgedeki kurbağaların hangi aylarda daha etkin olduğu anlaşılabiliyor. II. Gönüllüler, akşam saatlerinde sulak alanlara gidip duydukları kurbağa seslerini telefonlarıyla kaydediyor. III. Böylece araştırmacılar, iklim değişikliğinin kurbağaların yaşam döngüsünü etkileyip etkilemediğini geniş bir veri üzerinden inceleyebiliyor. IV. Vatandaş bilimi projesi kapsamında toplanan sesler tarih ve konum bilgisiyle ortak bir veri tabanına yükleniyor.",
    "Numaralanmış cümlelerle anlamlı bir paragraf oluşturulduğunda sıralama nasıl olur?",
    ["I-II-IV-III", "II-I-III-IV", "II-IV-I-III", "IV-II-III-I"],
    "C",
    "Önce kayıt işlemi (II), sonra yükleme (IV), karşılaştırma (I) ve araştırma sonucu (III) gelir."
  ),
  makeReviewQuestion(
    "review8-011",
    "Ana fikir",
    "Orta",
    "Bir kentin meydanını yalnızca çevresindeki binalar oluşturmaz. Oradan geçen insanların adımları, bekleyenlerin alışkanlıkları, çocukların oyunları da meydana kimlik kazandırır. Mimar, bir alanı tasarlarken yalnız taşın ve betonun düzenini düşünürse yaşayan bir yer değil, boş bir dekor kurar. Başarılı kamusal alanlar, insanların orayı nasıl kullanacağını hesaba katar.",
    "Bu metnin ana düşüncesi aşağıdakilerden hangisidir?",
    [
      "Kamusal alanların tasarımında insanların kullanım biçimleri dikkate alınmalıdır.",
      "Kent meydanlarında tarihî binalar korunmalıdır.",
      "Çocukların oynayabileceği alanlar kent merkezinden uzak olmalıdır.",
      "Mimaride en dayanıklı malzeme taş ve betondur."
    ],
    "A",
    "Metin, kamusal alanın insan davranışları gözetilerek tasarlanması gerektiğini savunur."
  ),
  makeReviewQuestion(
    "review8-012",
    "Çıkarım yapma",
    "Zor",
    "Dağın kuzey yamacındaki karlar, güney yamacındakilere göre daha geç eriyordu. Köylüler bu durumu yıllardır biliyor, yazın suyu azalan çeşmelerin bakımını bahar bitmeden yapıyordu. Son yıllarda ise kuzey yamacındaki karların da mayıs ayı gelmeden kaybolduğu fark edildi. Bunun üzerine köy, yağmur suyunu biriktirecek küçük depolar kurmaya başladı.",
    "Bu metinden aşağıdakilerin hangisi çıkarılabilir?",
    [
      "Köydeki bütün çeşmeler kullanıma kapatılmıştır.",
      "Doğal koşullardaki değişim, köylüleri yeni su önlemleri almaya yöneltmiştir.",
      "Güney yamacındaki kar miktarı her yıl artmaktadır.",
      "Yağmur suyu depoları yalnız kış aylarında kullanılmaktadır."
    ],
    "B",
    "Karların erken erimesi üzerine su depoları kurulması, değişen koşulların yeni önlem doğurduğunu gösterir."
  ),
  makeReviewQuestion(
    "review8-013",
    "Konu",
    "Kolay",
    "Sessiz kitaplar, öykülerini sözcük kullanmadan yalnız resimlerle anlatır. Okur, karakterlerin yüz ifadelerini, mekândaki değişimleri ve resimler arasındaki ayrıntıları yorumlayarak olay örgüsünü kurar. Bu nedenle aynı kitap, farklı okurlarda birbirinden az da olsa farklı öykülere dönüşebilir.",
    "Bu metnin konusu aşağıdakilerden hangisidir?",
    [
      "Kitap resimlerinde kullanılan renkler",
      "Çocukların okuma alışkanlıkları",
      "Sessiz kitapların okur tarafından anlamlandırılması",
      "Öykülerde karakter oluşturma yöntemleri"
    ],
    "C",
    "Metin, sözcüksüz kitapların resimler yorumlanarak okunmasını anlatmaktadır."
  ),
  makeReviewQuestion(
    "review8-014",
    "Düşüncenin akışını bozan cümle",
    "Orta",
    "(I) Mercan resifleri, çok sayıda deniz canlısına barınak ve beslenme alanı sağlar. (II) Resiflerin zarar görmesi, yalnız mercanları değil bütün bir besin ağını etkiler. (III) Deniz suyu sıcaklığındaki uzun süreli artış, mercanların beyazlamasına yol açabilir. (IV) Okyanus araştırmalarında kullanılan gemiler farklı büyüklüklerde üretilir. (V) Bu nedenle resiflerin düzenli olarak izlenmesi, deniz ekosisteminin geleceği açısından önemlidir.",
    "Numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?",
    ["IV", "I", "V", "III"],
    "A",
    "IV. cümle mercan resiflerinden uzaklaşıp araştırma gemilerinin boyutuna geçmektedir."
  ),
  makeReviewQuestion(
    "review8-015",
    "Paragraf tamamlama",
    "Orta",
    "Bir sözcüğün geçmişini bilmek, yalnızca onun ilk biçimini öğrenmek değildir. Sözcüğün zaman içinde kazandığı anlamlar, toplumun değişen ihtiyaçlarını ve başka kültürlerle kurduğu ilişkileri de gösterir. Örneğin önceleri yalnız belirli bir aracı karşılayan bir kelime, teknoloji geliştikçe daha geniş bir kavramı anlatabilir. Bu bakımdan sözcüklerin tarihi - - - -",
    "Bu metin aşağıdakilerden hangisiyle tamamlanmalıdır?",
    [
      "yalnızca ses değişimlerinin sıralanmasından oluşur.",
      "dilin kurallarının hiçbir zaman değişmediğini kanıtlar.",
      "eski sözlüklerdeki bütün kelimelerin bugün de kullanıldığını gösterir.",
      "toplumun geçirdiği dönüşümlerin izlerini de taşır."
    ],
    "D",
    "Parçada sözcüklerin değişen toplum ve kültürle birlikte dönüşmesi anlatıldığı için doğru tamamlamadır."
  ),
  makeReviewQuestion(
    "review8-016",
    "Anlatım biçimleri",
    "Orta",
    "Çömlekçi, tezgâhın başına oturup ıslak kil parçasını dönen tablanın ortasına bıraktı. Avuçlarını kile yaklaştırdıkça biçimsiz yığın incelip yükseldi. Bir süre sonra parmaklarının arasında dar boyunlu bir testi belirdi. Usta, tezgâhı durdurdu; testinin yüzeyindeki küçük çıkıntıyı tahta bir çubukla düzeltti.",
    "Bu metinde ağır basan anlatım biçimi aşağıdakilerden hangisidir?",
    ["Betimleme", "Öyküleme", "Tartışma", "Açıklama"],
    "B",
    "Birbirini izleyen eylemler anlatıldığı için öyküleme ağır basmaktadır."
  ),
  makeReviewQuestion(
    "review8-017",
    "Metnin yazılış amacı",
    "Orta",
    "Kullanmadığınız elektronik cihazları evsel çöpe atmayın. Bu cihazların içindeki bazı metaller toprağa ve suya karışarak uzun süreli kirliliğe yol açabilir. Belediyelerin toplama noktalarını öğrenin; bozuk telefon, pil ve küçük ev aletlerini bu noktalara teslim edin. Böylece hem zararlı maddelerin doğaya karışmasını önler hem de kullanılabilir metallerin geri kazanılmasına katkı sağlarsınız.",
    "Bu metnin yazılış amacı aşağıdakilerden hangisidir?",
    ["Okuru elektronik atıkları doğru biçimde teslim etmeye yönlendirmek", "Elektronik cihazların tarihini anlatmak", "Geri dönüşüm tesislerini karşılaştırmak", "Yeni telefon modellerini tanıtmak"],
    "A",
    "Emir ve önerilerle okurun davranışını değiştirmek amaçlanmıştır."
  ),
  makeReviewQuestion(
    "review8-018",
    "Yardımcı düşünce",
    "Zor",
    "Bir tiyatro oyununda dekor, oyuncunun önüne geçen süslü bir arka plan değildir. Oyunun geçtiği zamanı ve mekânı sezdirir, karakterlerin dünyasını görünür kılar. Kimi zaman sahnedeki tek bir sandalye, bir evin yoksulluğunu uzun açıklamalardan daha güçlü biçimde anlatabilir. Ancak dekorun bu işlevi yerine getirmesi için metnin ritmiyle ve oyuncuların hareket alanıyla uyumlu olması gerekir.",
    "Bu metinden aşağıdakilerin hangisine ulaşılamaz?",
    [
      "Dekorun oyunun zaman ve mekânına ilişkin ipucu verebildiğine",
      "Az sayıdaki dekor unsurunun güçlü bir anlam taşıyabildiğine",
      "Her tiyatro oyununda ayrıntılı ve gösterişli dekor kullanılması gerektiğine",
      "Dekorun oyuncuların hareketleriyle uyumlu olması gerektiğine"
    ],
    "C",
    "Metin gösterişli dekoru zorunlu görmez; aksine tek bir nesnenin bile yeterli olabileceğini söyler."
  ),
  makeReviewQuestion(
    "review8-019",
    "Giriş, gelişme ve sonuç",
    "Zor",
    "K: Günler sonra dere yatağındaki taşların arasından ilk su sesi duyuldu. Köylüler, kurdukları küçük bentlerin işe yaradığını görünce çalışmayı komşu vadilere de taşımaya karar verdi.\nL: Vadide yağmur hızla akıp gidiyor, toprak suyu tutamıyordu. Köyün yaşlıları eskiden yamaçlarda taş bentler bulunduğunu anlatınca gençler eski izleri aramaya başladı.\nM: Buldukları bentleri onaran köylüler, yamaçlara yeni taş sıraları yaptı. Yağmur suyu bu setlerin ardında yavaşlıyor, toprağa sızmak için zaman buluyordu.",
    "K, L ve M bölümlerinin giriş, gelişme ve sonuç şeklinde sıralanışı aşağıdakilerden hangisidir?",
    ["K-L-M", "L-M-K", "M-L-K", "L-K-M"],
    "B",
    "Sorun ve arayış L'de, uygulama M'de, sonuç K'de anlatılmıştır."
  ),
  makeReviewQuestion(
    "review8-020",
    "Ana fikir",
    "Orta",
    "Bir fotoğrafı değerli kılan yalnızca keskinliği ya da doğru ışıkla çekilmiş olması değildir. Fotoğrafçı, yüzlerce görüntü arasından hangi anı göstereceğine karar verirken aslında bir yorum yapar. Kadrajın dışında bıraktıkları da görüntüye kattıkları kadar önemlidir. Bu nedenle fotoğraf, gerçeğin eksiksiz bir kopyası değil; gerçeğe seçilmiş bir bakıştır.",
    "Bu metinde vurgulanan düşünce aşağıdakilerden hangisidir?",
    [
      "Keskin olmayan fotoğraflar hiçbir değer taşımaz.",
      "Fotoğrafın başarısı kullanılan makinenin niteliğine bağlıdır.",
      "Fotoğrafçı gördüğü her ayrıntıyı kadraja almak zorundadır.",
      "Fotoğraf, fotoğrafçının seçimi ve yorumuyla biçimlenen bir anlatımdır."
    ],
    "D",
    "Metin, fotoğrafın nesnel bir kopya değil fotoğrafçının seçtiği bir bakış olduğunu söyler."
  ),
  makeReviewQuestion(
    "review8-021",
    "Düşünceyi geliştirme yolları",
    "Orta",
    "Kimi canlılar, çevrelerindeki değişimi insanlardan önce fark edebilir. Örneğin bazı kurbağa türlerinin sayısındaki hızlı azalma, sulak alanlardaki kirliliğin erken işareti sayılır. Çünkü geçirgen derileri, sudaki zararlı maddelerden kısa sürede etkilenir. Bu nedenle bilim insanları kurbağaları bir bölgenin çevre sağlığını gösteren canlılar arasında değerlendirir.",
    "Bu metinde düşünceyi geliştirmek için aşağıdakilerin hangisinden yararlanılmıştır?",
    ["Tanık gösterme", "Karşılaştırma", "Örnekleme", "Sayısal veriler"],
    "C",
    "Genel düşünce, kurbağalar örnek verilerek somutlaştırılmıştır."
  ),
  makeReviewQuestion(
    "review8-022",
    "Paragrafta sıralama",
    "Orta",
    "I. Kurutulan yapraklar, tür ve tarih bilgileri yazılmış kâğıtlara dikkatle yerleştirilir. II. Herbaryumlar, bilimsel araştırmalarda kullanılmak üzere saklanan kurutulmuş bitki örneklerinden oluşur. III. Böylece yıllar önce toplanmış bir bitkinin hangi bölgede ve hangi mevsimde yetiştiği incelenebilir. IV. Araştırmacı önce bitkiyi doğal ortamında gözlemler ve gerekli ölçümleri yapar.",
    "Numaralanmış cümlelerle anlamlı bir paragraf oluşturulduğunda sıralama nasıl olur?",
    ["II-IV-I-III", "IV-II-III-I", "II-I-IV-III", "III-II-IV-I"],
    "A",
    "Tanımın ardından toplama ve yerleştirme süreci, son olarak sağlanan yarar anlatılır."
  ),
  makeReviewQuestion(
    "review8-023",
    "Konu ve başlık",
    "Orta",
    "Gece açık olan kütüphaneler, yalnız sınav döneminde masa arayan öğrencilere hizmet etmez. Vardiyalı çalışanlar, gündüz bakım sorumluluğu bulunanlar ve sessiz bir çalışma alanına ancak akşam ulaşabilenler de bu mekânlardan yararlanır. Böyle bir uygulama, kütüphanenin saatlerini uzatmaktan öte, bilgiye erişimde farklı yaşam düzenlerini hesaba katmak anlamına gelir.",
    "Bu metne getirilebilecek en uygun başlık aşağıdakilerden hangisidir?",
    ["Sınav Döneminde Ders Çalışmak", "Kütüphanelerde Sessizlik Kuralları", "Kitap Ödünç Alma Süreleri", "Gece Kütüphaneleri ve Erişim Eşitliği"],
    "D",
    "Metin, gece kütüphanelerinin farklı yaşam düzenlerine sahip kişilere erişim sağlamasını anlatır."
  ),
  makeReviewQuestion(
    "review8-024",
    "Metin türleri",
    "Zor",
    "Yeni yapılan sahil yolunun kentin trafiğini rahatlatacağı söyleniyor. Oysa yol genişledikçe özel araç kullanımı artabilir ve birkaç yıl sonra aynı yoğunluk yeniden yaşanabilir. Ulaşım sorununu yalnız yeni yollar açarak çözmeye çalışmak yerine toplu taşımayı güvenilir, hızlı ve erişilebilir hâle getirmek gerekir. Kent, otomobillerin daha kolay ilerlediği değil, insanların daha rahat yaşadığı yer olmalıdır.",
    "Bu metnin türü aşağıdakilerden hangisidir?",
    ["Haber yazısı", "Deneme", "Gezi yazısı", "Biyografi"],
    "B",
    "Yazar güncel bir konu hakkındaki kişisel düşüncesini kanıtlama zorunluluğu olmadan tartışmaktadır."
  ),
  makeReviewQuestion(
    "review8-025",
    "Düşüncenin akışını bozan cümle",
    "Orta",
    "(I) Arıların yaptığı balın tadı, topladıkları nektarın kaynağına göre değişebilir. (II) Kestane çiçeğinden elde edilen bal daha keskin, narenciye çiçeklerinden elde edilen bal daha hafif aromalıdır. (III) Arıcılar kovanların çevresindeki bitki çeşitliliğini bu nedenle dikkatle izler. (IV) Bal kavanozlarının kapakları farklı renklerde üretilebilir. (V) Balın rengi ve kokusu da nektarın toplandığı bitkiler hakkında ipucu verir.",
    "Numaralanmış cümlelerden hangisi metnin anlam bütünlüğünü bozmaktadır?",
    ["IV", "II", "I", "V"],
    "A",
    "IV. cümle balın bitki kaynağına bağlı özellikleri yerine kavanoz kapağından söz eder."
  ),
  makeReviewQuestion(
    "review8-026",
    "Paragraf tamamlama",
    "Zor",
    "Eleştirmen, bir eseri değerlendirirken yalnızca kusur arayan kişi değildir. Eserin hangi amaçla kurulduğunu, kendi türü içinde neyi başardığını ve nerede eksik kaldığını göstermeye çalışır. Beğenisini ya da itirazını metinden örneklerle temellendirir. Bu nedenle iyi bir eleştiri - - - -",
    "Bu metin aşağıdakilerden hangisiyle tamamlanmalıdır?",
    [
      "eserin kısa bir özetini vermekle yetinir.",
      "yazarın kişiliğini eserin önüne geçirir.",
      "yalnızca olumsuz yargılardan oluşur.",
      "yargılarını gerekçelendirerek okura yeni bir bakış sunar."
    ],
    "D",
    "Parça, eleştirinin gerekçeli değerlendirme ve yeni bakış sunma işlevini vurgular."
  ),
  makeReviewQuestion(
    "review8-027",
    "Yardımcı düşünce",
    "Orta",
    "Kunduzların akarsulara yaptığı setler, suyun akışını yavaşlatır ve çevrede küçük göletler oluşmasını sağlar. Bu göletler böcekler, balıklar ve su kuşları için yeni yaşam alanları meydana getirir. Ayrıca yavaşlayan su, kurak dönemlerde çevredeki toprağın nemini korumasına yardımcı olur. Ancak setler tarım alanlarına yakın kurulduğunda su baskını riski de doğabilir.",
    "Bu metne göre kunduz setleriyle ilgili aşağıdakilerden hangisi söylenemez?",
    [
      "Bazı canlılar için yeni yaşam alanları oluşturduğu",
      "Toprağın nemli kalmasına katkı sağlayabildiği",
      "Her koşulda insan faaliyetleri için yararlı olduğu",
      "Akarsuyun akış hızını değiştirdiği"
    ],
    "C",
    "Tarım alanlarında su baskını riski bulunduğu için setlerin her koşulda yararlı olduğu söylenemez."
  ),
  makeReviewQuestion(
    "review8-028",
    "Dil ve anlatım",
    "Zor",
    "Sokağın iki yanındaki taş evler, yıllardır aynı sırrı saklayan ihtiyarlar gibi birbirine eğilmişti. Yağmur, oluklardan ince iplikler hâlinde sarkıyor; kapalı dükkânların kepenklerine sabırsız parmaklarla vuruyordu. Uzakta beliren sarı otobüs, gri sabahın içine bırakılmış küçük bir leke gibiydi.",
    "Bu metnin dil ve anlatımıyla ilgili aşağıdakilerden hangisi söylenemez?",
    ["Benzetmeye başvurulmuştur.", "Tanımlamadan yararlanılmıştır.", "Kişileştirme yapılmıştır.", "Görsel ayrıntılara yer verilmiştir."],
    "B",
    "Metinde kavram tanımlanmamış; betimleme, benzetme ve kişileştirme kullanılmıştır."
  ),
  makeReviewQuestion(
    "review8-029",
    "Ana fikir",
    "Zor",
    "Bir ekipte herkesin aynı biçimde düşünmesi ilk bakışta işleri kolaylaştırabilir. Tartışma azalır, kararlar hızla alınır. Fakat kimsenin farklı bir ihtimali dile getirmediği ortamda hatalar da görünmez hâle gelir. Sağlıklı ekipler, ortak amaçta birleşirken farklı görüşlerin ortaya çıkmasına alan açar; çünkü iyi karar, yalnız uyumdan değil, gerekçeli itirazdan da beslenir.",
    "Bu metinde asıl anlatılmak istenen aşağıdakilerden hangisidir?",
    [
      "Ekip çalışmalarında kararlar mümkün olduğunca hızlı alınmalıdır.",
      "Bir ekipte anlaşmazlık yaşanması ortak amacı ortadan kaldırır.",
      "Farklı görüşler ekiplerin çalışmasını her zaman yavaşlatır.",
      "Ortak amaç çevresindeki yapıcı görüş ayrılıkları daha iyi kararlar alınmasını sağlar."
    ],
    "D",
    "Metin, ortak amaç korunurken farklı görüş ve gerekçeli itirazların karar kalitesini artırdığını savunur."
  ),
  makeReviewQuestion(
    "review8-030",
    "Anlatıcı türleri",
    "Orta",
    "Sabah erkenden istasyona vardığımda peron neredeyse boştu. Çantamı banka bırakıp cebimdeki bileti yeniden kontrol ettim. Tren yaklaşırken raylardan yükselen uğultu, içimdeki kararsızlığı daha da büyüttü. Bir an geri dönmeyi düşündüm ama açılan kapıya doğru yürümekten kendimi alamadım.",
    "Bu metinle ilgili aşağıdakilerden hangisi doğrudur?",
    [
      "Olay, kahramanlardan birinin ağzından anlatılmıştır.",
      "Anlatıcı, bütün kişilerin duygu ve düşüncelerini bilmektedir.",
      "Metinde olaydan çok bilgi verme amacı vardır.",
      "Olayın geçtiği zaman ve yer belirsizdir."
    ],
    "A",
    "Birinci kişi ekleri ve anlatıcının kendi duygularını aktarması kahraman anlatıcıyı gösterir."
  ),
  makeReviewQuestion(
    "review8-031",
    "Metin karşılaştırma",
    "Orta",
    "I. metin: Kent içindeki küçük bostanlar, mahalle sakinlerinin sebze yetiştirdiği alanlar olmanın yanında komşuların bilgi ve tohum paylaştığı buluşma yerleridir.\n\nII. metin: Okul bahçesindeki bostanda öğrenciler, bitkilerin gelişimini gözlemleyip ölçümler yapar. Böylece fen dersinde öğrendikleri kavramları doğrudan deneyimleme fırsatı bulur.",
    "Bu iki metin arasındaki fark aşağıdakilerden hangisidir?",
    [
      "İlk metin tarımın zararlarını, ikinci metin yararlarını anlatmaktadır.",
      "İlk metin bostanların toplumsal, ikinci metin eğitsel işlevini öne çıkarmaktadır.",
      "İki metin de yalnız ticari üretimden söz etmektedir.",
      "İkinci metin, bostanların mahalle iletişimini güçlendirdiğini savunmaktadır."
    ],
    "B",
    "Doğru ayrım, ilk metindeki toplumsal paylaşım ile ikinci metindeki eğitim işlevidir."
  ),
  makeReviewQuestion(
    "review8-032",
    "Konu",
    "Kolay",
    "Bir ses arşivinde yalnız ünlü sanatçıların kayıtları bulunmaz. Sokak satıcılarının sesleri, eski tren düdükleri, yerel ağızlarla anlatılan masallar da kaydedilir. Çünkü bir kentin geçmişini anlamak için binalar kadar zamanla kaybolan sesleri de korumak gerekir.",
    "Bu metnin konusu aşağıdakilerden hangisidir?",
    ["Sanatçıların ses eğitimi", "Kentlerde gürültü sorunu", "Geçmişe ait seslerin arşivlenmesi", "Masalların yazıya geçirilmesi"],
    "C",
    "Parça, geçmişin farklı seslerinin arşivlenerek korunmasını anlatır."
  ),
  makeReviewQuestion(
    "review8-033",
    "Paragrafta sıralama",
    "Orta",
    "I. Ardından elde edilen hamur ince tabakalar hâlinde serilip güneşte kurutulurdu. II. Eski Mısır'da yazı malzemesi yapmak için papirüs bitkisinin gövdesi uzun şeritler hâlinde kesilirdi. III. Kuruyan yüzey taşla parlatıldığında üzerine yazı yazılabilecek düzgün bir yaprak ortaya çıkardı. IV. Bu şeritler yan yana ve üst üste dizildikten sonra dövülerek birbirine yapıştırılırdı.",
    "Numaralanmış cümlelerle anlamlı bir metin oluşturulduğunda sıralama nasıl olur?",
    ["I-II-III-IV", "II-IV-I-III", "II-I-IV-III", "IV-II-I-III"],
    "B",
    "Üretim süreci kesme, dizme-dövme, kurutma ve parlatma sırasıyla ilerler."
  ),
  makeReviewQuestion(
    "review8-034",
    "Yardımcı düşünce",
    "Zor",
    "Bazı mağaralarda duvar resimleri girişe yakın aydınlık alanlarda değil, ulaşılması güç karanlık bölümlerde bulunur. Bu bölümlere ilerlemek için dar geçitlerden sürünmek ve yapay ışık kullanmak gerekir. Resimlerin yanında günlük yaşama ait çok az eşya bulunması, bu alanların barınma amacıyla kullanılmadığını düşündürür. Araştırmacılar bu nedenle resimlerin törenlerle ya da ortak inanışlarla ilişkili olabileceğini değerlendiriyor.",
    "Bu metinden aşağıdakilerin hangisine ulaşılamaz?",
    [
      "Bazı mağara resimlerine ulaşmanın güç olduğuna",
      "Resimlerin bulunduğu alanların sürekli yaşam alanı olmayabileceğine",
      "Araştırmacıların resimlerin işlevi konusunda yorum yaptığına",
      "Mağara resimlerinin hangi topluluk tarafından yapıldığının kesin olarak bilindiğine"
    ],
    "D",
    "Resimleri yapan topluluğun kesin kimliği hakkında bilgi verilmemiştir."
  ),
  makeReviewQuestion(
    "review8-035",
    "Ana fikir",
    "Orta",
    "Bir konuşmada duraklamak çoğu zaman bilgisizlik belirtisi sanılır. Oysa yerinde verilen kısa bir ara, dinleyiciye söyleneni düşünme fırsatı verir ve önemli cümleyi öne çıkarır. Sürekli ve hızla konuşan biri çok şey söylüyor gibi görünse de düşünceler arasındaki ilişkiyi belirsizleştirebilir. Etkili konuşma, sözcükler kadar sessizliğin de doğru kullanılmasına bağlıdır.",
    "Bu metnin ana düşüncesi aşağıdakilerden hangisidir?",
    [
      "Hazırlıksız konuşmalarda sık sık duraklanır.",
      "Hızlı konuşmak dinleyicinin ilgisini her zaman artırır.",
      "Etkili anlatımda anlamlı duraklamaların önemli bir işlevi vardır.",
      "Konuşmacı, bütün cümlelerini aynı hızda söylemelidir."
    ],
    "C",
    "Metin, sessizlik ve duraklamaların etkili konuşmanın bir parçası olduğunu vurgular."
  ),
  makeReviewQuestion(
    "review8-036",
    "Paragraf tamamlama",
    "Zor",
    "Bir haritayı okurken yalnız renklerin neyi gösterdiğini bilmek yetmez. Ölçeğe bakmadan iki nokta arasındaki gerçek uzaklığı, yön işaretini görmeden bir yerin diğerine göre konumunu doğru değerlendiremeyiz. Haritanın hangi tarihte hazırlandığı da özellikle hızla değişen bölgeler için önemlidir. Demek ki - - - -",
    "Bu metin aşağıdakilerden hangisiyle tamamlanmalıdır?",
    [
      "bütün haritalar aynı ayrıntıları gösterir.",
      "bir harita, üzerindeki açıklayıcı unsurlarla birlikte değerlendirilmelidir.",
      "haritalarda yalnızca doğal unsurlara yer verilmelidir.",
      "ölçek büyüdükçe haritanın hazırlanma tarihi önemini yitirir."
    ],
    "B",
    "Ölçek, yön ve tarih gibi açıklayıcı unsurların birlikte okunması gerektiği anlatılmıştır."
  ),
  makeReviewQuestion(
    "review8-037",
    "Dil ve anlatım",
    "Orta",
    "İpek böceği, yaşamının belirli bir döneminde çevresine incecik bir lif örerek koza oluşturur. Tek bir kozadan yüzlerce metre uzunluğunda kesintisiz lif elde edilebilir. Lifler sıcak suda yumuşatıldıktan sonra bir araya getirilip iplik hâline getirilir. Bu iplik, hafif olmasına karşın dayanıklıdır ve ışığı farklı açılarda yansıttığı için parlak görünür.",
    "Bu metnin dil ve anlatımıyla ilgili aşağıdakilerden hangisi söylenemez?",
    ["Açıklayıcı anlatımdan yararlanılmıştır.", "Nesnel bilgilere yer verilmiştir.", "Karşılaştırma yapılmıştır.", "Kişisel bir anı aktarılmıştır."],
    "D",
    "Metin bilgi vermek amacıyla nesnel biçimde yazılmıştır; kişisel anı içermez."
  ),
  makeReviewQuestion(
    "review8-038",
    "Düşüncenin akışını bozan cümle",
    "Orta",
    "(I) Çeviri yapan kişi, bir metindeki sözcükleri başka dildeki karşılıklarıyla değiştirmekle yetinmez. (II) Yazarın tonunu, cümlelerin ritmini ve kültürel göndermeleri de yeni dilde yeniden kurar. (III) Aynı sözcük, farklı bağlamlarda farklı karşılıklar gerektirebilir. (IV) Yabancı dil öğrenirken düzenli tekrar yapmak kalıcılığı artırır. (V) Bu nedenle çeviri, dil bilgisi kadar yorumlama ve karar verme becerisi de ister.",
    "Numaralanmış cümlelerden hangisi metnin düşünce akışını bozmaktadır?",
    ["IV", "I", "III", "V"],
    "A",
    "IV. cümle çeviri sürecinden ayrılıp yabancı dil öğrenme yöntemine geçmektedir."
  ),
  makeReviewQuestion(
    "review8-039",
    "Ana fikir",
    "Zor",
    "Bir kentin eski fotoğraflarına bakmak, yalnız kaybolmuş binaları görmek değildir. Meydanı dolduran insan kalabalığı, dükkân tabelaları ve ulaşım araçları o dönemin gündelik yaşamını da açığa çıkarır. Ancak fotoğrafın çekildiği yer ve tarih bilinmiyorsa görüntüyü yanlış yorumlamak mümkündür. Görsel belge, bağlam bilgisiyle birlikte anlam kazanır.",
    "Bu metinde asıl anlatılmak istenen aşağıdakilerden hangisidir?",
    [
      "Eski fotoğraflarda yalnız mimari yapılar incelenmelidir.",
      "Kent fotoğrafları günümüz görüntülerinden daha değerlidir.",
      "Tarihî fotoğraflar, yer ve zaman bilgileriyle birlikte yorumlanmalıdır.",
      "Fotoğraflardaki dükkân tabelaları mutlaka yenilenmelidir."
    ],
    "C",
    "Parça, görsel belgenin doğru bağlam bilgisiyle anlamlandırılmasını vurgular."
  ),
  makeReviewQuestion(
    "review8-040",
    "Çıkarım yapma",
    "Orta",
    "Bir yayınevi, yeni basımda kitabın yazı boyutunu büyüttü, satır aralığını açtı ve sayfa kenarlarındaki boşluğu artırdı. Metnin içeriğinde hiçbir değişiklik yapılmadığı hâlde okurlardan gelen 'sayfayı takip etmek kolaylaştı' yorumları belirgin biçimde arttı.",
    "Bu bilgiden aşağıdakilerin hangisi çıkarılabilir?",
    [
      "Kitabın içeriği okurlar tarafından yetersiz bulunmuştur.",
      "Sayfa tasarımı, metnin okunabilirliğini etkileyebilir.",
      "Büyük yazı kullanılan bütün kitaplar daha çok satılır.",
      "Okurlar kitaplarda geniş sayfa kenarlarını gereksiz bulur."
    ],
    "B",
    "İçerik aynı kaldığı hâlde okuma kolaylığının artması, sayfa tasarımının etkisini gösterir."
  ),
  makeReviewQuestion(
    "review8-041",
    "Anlatım biçimleri",
    "Orta",
    "Kıyı kumulları, denizden gelen kumun rüzgârla taşınıp belirli alanlarda birikmesiyle oluşur. Kum yüzeyi sürekli hareket ettiği için burada yaşayan bitkiler güçlü kökler geliştirir. Bu kökler kumu tutarak kumulun iç kesimlere ilerlemesini yavaşlatır. Kıyı bitkilerinin sökülmesi ise rüzgâr aşındırmasını hızlandırabilir.",
    "Bu metinde ağır basan anlatım biçimi aşağıdakilerden hangisidir?",
    ["Açıklama", "Tartışma", "Öyküleme", "Betimleme"],
    "A",
    "Bir doğa olayının oluşumu ve neden-sonuç ilişkileri bilgi verme amacıyla açıklanmıştır."
  ),
  makeReviewQuestion(
    "review8-042",
    "Yardımcı düşünce",
    "Zor",
    "Bir orkestrada şef, yalnız müzisyenlerin aynı anda başlamasını sağlayan kişi değildir. Eserin temposunu, seslerin dengesini ve hangi bölümün öne çıkacağını yorumlar. Provalarda farklı çalgı gruplarını ayrı ayrı dinleyip bütünün içindeki yerlerini belirler. Konserde tek bir ses üretmese de müzisyenlerin ortak bir yorumda buluşmasına yön verir.",
    "Bu metinden aşağıdakilerin hangisine ulaşılabilir?",
    [
      "Orkestra şefi konserde bütün çalgıları sırayla çalar.",
      "Müzisyenler şef olmadan hiçbir eseri seslendiremez.",
      "Şef, farklı çalgı gruplarının ortak bir yorum oluşturmasını sağlar.",
      "Orkestradaki en yüksek sesi her zaman vurmalı çalgılar çıkarır."
    ],
    "C",
    "Metin, şefin grupları ortak bir yorum çevresinde birleştirdiğini açıkça belirtir."
  ),
  makeReviewQuestion(
    "review8-043",
    "Paragrafta sıralama",
    "Zor",
    "I. Bu küçük çizikler, ışık özel bir açıyla yüzeye tutulduğunda daha belirgin hâle gelir. II. Uzmanlar daha sonra çizgilerin yönünü ve birbirleriyle ilişkisini inceleyerek şeklin nasıl oluşturulduğunu anlamaya çalışır. III. Bazı tarih öncesi taş aletlerin üzerinde çıplak gözle zor seçilen düzenli çizikler bulunur. IV. Böylece izlerin kullanım sırasında rastlantıyla mı oluştuğu, yoksa bilinçli bir desen mi olduğu değerlendirilebilir.",
    "Numaralanmış cümlelerle anlamlı bir paragraf oluşturulduğunda sıralama nasıl olur?",
    ["I-III-IV-II", "III-I-II-IV", "III-II-I-IV", "II-I-III-IV"],
    "B",
    "Önce çiziklerin varlığı, görünür hâle gelmesi, incelenmesi ve ulaşılan değerlendirme sıralanır."
  ),
  makeReviewQuestion(
    "review8-044",
    "Metnin yazılış amacı",
    "Orta",
    "Köprünün ana taşıyıcı kabloları, bakım çalışması nedeniyle 12-16 Mayıs tarihleri arasında gece saatlerinde kontrol edilecektir. Bu tarihlerde 23.00 ile 05.00 arasında köprünün iki şeridi ulaşıma kapatılacak, trafik diğer şeritlerden kontrollü olarak sağlanacaktır. Sürücülerin mümkünse çevre yolunu kullanmaları önerilir.",
    "Bu metnin yazılış amacı aşağıdakilerden hangisidir?",
    ["Köprü yapım tekniklerini öğretmek", "Sürücüleri yeni trafik kurallarına ikna etmek", "Köprünün tarihî önemini tanıtmak", "Bakım çalışması ve ulaşım düzeni hakkında bilgilendirmek"],
    "D",
    "Metin tarih, saat ve trafik düzenini bildirerek okuru yaklaşan çalışma hakkında bilgilendirir."
  ),
  makeReviewQuestion(
    "review8-045",
    "Ana fikir",
    "Zor",
    "Bir roman kahramanını yalnız yaptığı doğru işlerle tanımayız. Kararsızlıkları, korkuları ve yanlış seçimleri de onun kimliğini kurar. Kusursuz kişiler okura örnek olabilir ama her zaman inandırıcı gelmez. Okur, çelişkileri olan bir karakterde kendi yaşamından izler bulduğunda onunla daha güçlü bağ kurar.",
    "Bu metnin ana düşüncesi aşağıdakilerden hangisidir?",
    [
      "Roman kahramanları okura yalnız doğru davranışları öğretmelidir.",
      "Kusursuz karakterlerin bulunduğu romanlar daha çok okunur.",
      "Çelişkileri ve kusurları olan karakterler okura daha gerçekçi gelebilir.",
      "Bir romanda olay örgüsü karakterlerden daha önemlidir."
    ],
    "C",
    "Metin, insani kusur ve çelişkilerin karakteri inandırıcı kıldığını anlatır."
  ),
  makeReviewQuestion(
    "review8-046",
    "Konu ve başlık",
    "Orta",
    "Karanlık gökyüzü parkları, yapay ışığın sınırlı tutulduğu özel koruma alanlarıdır. Bu alanlarda aydınlatmalar aşağı yönlendirilir, gereksiz ışık kaynakları kapatılır. Böylece hem gece yaşayan canlıların doğal döngüsü korunur hem de insanlar yıldızları daha net gözlemleyebilir.",
    "Bu metne getirilebilecek en uygun başlık aşağıdakilerden hangisidir?",
    ["Geceyi Koruyan Parklar", "Kentlerde Ulaşım", "Yıldızların Oluşumu", "Gündüz Yaşayan Canlılar"],
    "A",
    "Metin, yapay ışığı sınırlayarak gece doğasını ve gökyüzünü koruyan alanları anlatır."
  ),
  makeReviewQuestion(
    "review8-047",
    "Metin karşılaştırma",
    "Zor",
    "I. metin: Bir günlükte yazar, olayların hemen ardından hissettiklerini kaydeder. Bu nedenle günlük, anın heyecanını ve belirsizliğini taşır.\n\nII. metin: Anı yazarı, geçmişte yaşadığı bir olayı yıllar sonra yeniden kurar. Aradan geçen zaman, olayları değerlendirmesine ve o gün fark etmediği ilişkileri görmesine imkân verir.",
    "Bu iki metinde günlük ve anı arasındaki temel fark aşağıdakilerin hangisinde doğru verilmiştir?",
    [
      "Günlük yalnız gerçek, anı yalnız hayalî olayları anlatır.",
      "Anıda tarih belirtilirken günlükte hiçbir zaman tarih kullanılmaz.",
      "Günlük başkası tarafından, anı olayın kahramanı tarafından yazılır.",
      "Günlük olaylara yakın zamanda, anı ise aradan zaman geçtikten sonra yazılır."
    ],
    "D",
    "Metinler arasındaki temel karşıtlık, yazma zamanı ve bu zamanın değerlendirmeye etkisidir."
  ),
  makeReviewQuestion(
    "review8-048",
    "Düşüncenin akışını bozan cümle",
    "Orta",
    "(I) Geleneksel gölge oyununda tasvirler, yarı saydam deriden kesilerek hazırlanır. (II) Tasvirlere eklem yerlerinden ince çubuklar bağlanır ve figürler perde arkasından hareket ettirilir. (III) Işık kaynağı, renkli tasvirlerin gölgelerini beyaz perdeye düşürür. (IV) Tiyatro salonlarında koltukların kumaşları belirli aralıklarla yenilenir. (V) Oyuncu, sesini değiştirerek farklı karakterleri tek başına canlandırabilir.",
    "Numaralanmış cümlelerden hangisi metnin anlam bütünlüğünü bozmaktadır?",
    ["II", "IV", "I", "V"],
    "B",
    "IV. cümle gölge oyununun yapısından uzaklaşıp tiyatro koltuklarının bakımına geçmektedir."
  ),
  makeReviewQuestion(
    "review8-049",
    "Paragraf tamamlama",
    "Zor",
    "Bir bilim müzesindeki etkileşimli düzenek, ziyaretçinin yalnız düğmeye basıp sonucu izlemesi için tasarlanmamalıdır. Ziyaretçi önce bir tahminde bulunmalı, düzeneği farklı koşullarda denemeli ve gözlediği değişimin nedenini düşünmelidir. Aksi hâlde hareketli bir oyuncakla kısa süre eğlenir ama bilimsel düşünme sürecine katılmaz. Bu yüzden iyi bir etkileşimli sergi - - - -",
    "Bu metin düşüncenin akışına göre aşağıdakilerden hangisiyle tamamlanmalıdır?",
    [
      "ziyaretçiyi soru sormaya ve deneme yapmaya yöneltmelidir.",
      "olabildiğince çok ışık ve ses kullanmalıdır.",
      "yalnız uzmanların anlayabileceği bilgiler içermelidir.",
      "her ziyaretçiye aynı sonucu göstermekle yetinmelidir."
    ],
    "A",
    "Metin, etkileşimin tahmin, deneme ve neden arama süreçlerini içermesi gerektiğini savunur."
  ),
  makeReviewQuestion(
    "review8-050",
    "Yardımcı düşünce",
    "Zor",
    "Deniz çayırları, sığ kıyılarda su altında geniş alanlar kaplayan çiçekli bitkilerdir. Kökleri deniz tabanındaki kumu tutarak dalgaların kıyıyı aşındırmasını azaltır. Yapraklarının arasında genç balıklar saklanır ve beslenir. Ayrıca bu bitkiler, bünyelerinde uzun süre karbon depolayabilir. Çapaların deniz tabanında sürüklenmesi ve kıyı kirliliği ise çayırların parçalanmasına yol açar.",
    "Bu metinde deniz çayırlarıyla ilgili aşağıdakilerden hangisine değinilmemiştir?",
    [
      "Kıyı aşınmasını azaltabildiğine",
      "Bazı canlılara yaşam alanı sağladığına",
      "İnsan faaliyetlerinden zarar görebildiğine",
      "Hangi mevsimde çiçek açtığına"
    ],
    "D",
    "Metinde deniz çayırlarının çiçek açtığı mevsim belirtilmemiştir."
  )
];
