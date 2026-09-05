const makeGrade6ReviewQuestion = (id, topic, difficulty, text, stem, options, answer, solution) => ({
  id,
  grade: 6,
  topic,
  difficulty,
  text,
  stem,
  options,
  answer,
  solution,
  reviewOnly: true,
  collection: "grade6-original-review"
});

window.PARAGRAPH6_REVIEW_QUESTIONS = [
  makeGrade6ReviewQuestion(
    "review6-001",
    "Ana fikir",
    "Orta",
    "Bir ağacın kent yaşamına katkısı yalnızca gölge sağlaması değildir. Ağaçlar, yapraklarıyla havadaki bazı kirleticileri tutar; kökleriyle yağmur suyunun toprağa karışmasını kolaylaştırır. Kuşlara ve böceklere yaşam alanı sunarken sokakların daha serin kalmasına da yardım eder. Bu nedenle bir caddeye ağaç dikmek, yalnız görüntüyü güzelleştiren bir düzenleme değil, kentin geleceğine yapılan uzun vadeli bir yatırımdır.",
    "Bu metnin ana düşüncesi aşağıdakilerden hangisidir?",
    [
      "Kentlerde yalnızca hızlı büyüyen ağaçlar tercih edilmelidir.",
      "Ağaçların bakımı, dikilmelerinden daha fazla emek gerektirir.",
      "Kent ağaçları, çevreye birçok yönden katkı sağlayan önemli bir yatırımdır.",
      "Sokakların güzel görünmesi için farklı türde bitkiler kullanılmalıdır."
    ],
    "C",
    "Metin, kent ağaçlarının gölge sağlamanın ötesinde çevreye çok yönlü yarar sunduğunu vurgulamaktadır."
  ),
  makeGrade6ReviewQuestion(
    "review6-002",
    "Yardımcı düşünce",
    "Orta",
    "Çömlek ustası, biçim verdiği kabı hemen fırına koymaz. Önce çamurun gölgede ve yavaşça kurumasını bekler. Hızlı kuruyan çamurun yüzeyinde çatlaklar oluşabilir. Kuruyan kaplar fırına aralıklı biçimde yerleştirilir; böylece sıcak hava her parçanın çevresinde dolaşır. Pişirme tamamlandıktan sonra fırın birden açılmaz çünkü ani sıcaklık değişimi kapların kırılmasına yol açabilir.",
    "Bu metinden aşağıdakilerin hangisine ulaşılamaz?",
    [
      "Çömlek yapımında kullanılan çamurun nereden çıkarıldığına",
      "Kapların fırında aralıklı yerleştirildiğine",
      "Hızlı kurumanın çamurda çatlak oluşturabileceğine",
      "Fırının pişirme biter bitmez açılmadığına"
    ],
    "A",
    "Metinde çamurun çıkarıldığı yerle ilgili herhangi bir bilgi verilmemiştir."
  ),
  makeGrade6ReviewQuestion(
    "review6-003",
    "Konu ve başlık",
    "Orta",
    "Mahalle kütüphanesinin rafları her ay farklı bir eve konuk oluyor. Görevliler, tekerlekli dolaplara yerleştirdikleri kitapları belirlenen apartmanlara götürüyor. Okurlar aldıkları kitabı bir ay sonra aynı dolaba bırakıyor ve yenisini seçiyor. Böylece kütüphaneye uzak yaşayan yaşlılar ve küçük çocuklar da düzenli olarak kitaba ulaşabiliyor.",
    "Bu metne getirilebilecek en uygun başlık aşağıdakilerden hangisidir?",
    [
      "Kütüphanede Sessizlik",
      "Kitap Seçmenin İncelikleri",
      "Apartmanlarda Komşuluk",
      "Okura Giden Kütüphane"
    ],
    "D",
    "Metnin odağında kitapları okurların yaşadığı apartmanlara ulaştıran hareketli kütüphane uygulaması vardır."
  ),
  makeGrade6ReviewQuestion(
    "review6-004",
    "Paragraf tamamlama",
    "Zor",
    "Bir konuyu arkadaşına anlatmaya çalışan öğrenci, aslında kendi bilgisini de sınar. Anlatırken nerede duraksadığını, hangi kavramı açıklamakta zorlandığını fark eder. Arkadaşının soruları, daha önce düşünmediği ayrıntıları görmesini sağlar. Bu yüzden birlikte çalışmak yalnızca bilgiyi paylaşmak değildir; - - - -",
    "Bu metin düşüncenin akışına göre aşağıdakilerden hangisiyle tamamlanmalıdır?",
    [
      "her öğrencinin aynı yöntemle öğrenmesini sağlamaktır.",
      "kişinin kendi öğrenmesindeki eksikleri görmesine de yardımcı olmaktır.",
      "ders süresini olabildiğince kısaltmanın en kolay yoludur.",
      "öğretmenin görevini bütünüyle öğrencilere bırakmasıdır."
    ],
    "B",
    "Parça, başkasına anlatmanın öğrencinin kendi eksiklerini fark etmesini sağladığı düşüncesiyle tamamlanır."
  ),
  makeGrade6ReviewQuestion(
    "review6-005",
    "Düşüncenin akışını bozan cümle",
    "Orta",
    "(I) Yağmur bahçeleri, çatılardan ve yollardan gelen yağmur suyunu küçük bir alanda toplar. (II) Bu alanlarda suyu seven ve kökleri güçlü bitkiler yetiştirilir. (III) Toprak ve bitki kökleri, suyun yavaşça süzülmesine yardımcı olur. (IV) Kent parklarında kullanılan bankların çoğu ahşap ya da metalden üretilir. (V) Böylece yağmur suyu doğrudan kanallara dolmak yerine toprağa karışır.",
    "Numaralanmış cümlelerden hangisi metnin anlam bütünlüğünü bozmaktadır?",
    ["II", "IV", "I", "V"],
    "B",
    "IV. cümle yağmur bahçelerinden uzaklaşıp parklardaki bankların malzemesine geçmektedir."
  ),
  makeGrade6ReviewQuestion(
    "review6-006",
    "Paragrafta sıralama",
    "Zor",
    "I. Bir süre sonra kavanozun iç yüzeyinde küçük su damlaları oluştu. II. Ece, nemli bir pamuk parçasını cam kavanozun dibine yerleştirdi. III. Böylece suyun ısınınca buharlaştığını, soğuyunca yeniden sıvıya dönüştüğünü gözlemledi. IV. Kavanozun kapağına birkaç buz parçası koyup kabı güneş alan pencerenin önüne bıraktı.",
    "Numaralanmış cümlelerle anlamlı bir paragraf oluşturulduğunda sıralama nasıl olur?",
    ["II-I-IV-III", "IV-II-III-I", "I-II-IV-III", "II-IV-I-III"],
    "D",
    "Önce düzenek hazırlanır (II, IV), ardından gözlem (I) ve bu gözlemden çıkarılan sonuç (III) verilir."
  ),
  makeGrade6ReviewQuestion(
    "review6-007",
    "Dil ve anlatım",
    "Orta",
    "Fırının kapağı açılınca sokağa sıcak ekmek kokusu yayıldı. Usta, kızarmış somunları uzun kürekle tezgâha dizerken kabuklardan ince çıtırtılar yükseliyordu. Camın önünde bekleyen çocuk, buğulanmış yüzeye parmağıyla bir güneş çizdi. İçerideki sarı ışık, henüz aydınlanmamış sokağı sıcacık gösteriyordu.",
    "Bu metnin dil ve anlatımıyla ilgili aşağıdakilerden hangisi söylenemez?",
    [
      "Birden fazla duyuya seslenen ayrıntılara yer verilmiştir.",
      "Betimleyici ögelerden yararlanılmıştır.",
      "Olay, birinci kişi ağzından anlatılmıştır.",
      "Kısa bir zaman dilimindeki hareketlere yer verilmiştir."
    ],
    "C",
    "Metin üçüncü kişi anlatımıyla kurulmuştur; anlatıcı olayın kahramanı değildir."
  ),
  makeGrade6ReviewQuestion(
    "review6-008",
    "Anlatım biçimleri",
    "Orta",
    "Bazıları, ders çalışırken telefondan not almanın kâğıda yazmak kadar etkili olmadığını savunuyor. Oysa önemli olan aracın kendisi değil, öğrencinin bilgiyi nasıl işlediğidir. Telefona yalnızca metni kopyalayan öğrenci pasif kalabilir; fakat bilgiyi kendi cümleleriyle özetleyen, başlıklandıran ve soruya dönüştüren öğrenci öğrenme sürecine katılır. Bu nedenle dijital notları baştan değersiz saymak doğru değildir.",
    "Bu metinde ağır basan anlatım biçimi aşağıdakilerden hangisidir?",
    ["Betimleme", "Öyküleme", "Tartışma", "Açıklama"],
    "C",
    "Yazar, karşı olduğu bir görüşü verip kendi düşüncesini gerekçelerle savunduğu için tartışmaya başvurmuştur."
  ),
  makeGrade6ReviewQuestion(
    "review6-009",
    "Hikâye unsurları",
    "Orta",
    "Akşamüstü okulun bahçesi boşalmıştı. Deniz, bankın altında bulduğu mavi kalem kutusunu alıp nöbetçi öğretmene götürdü. Kutunun kapağındaki küçük rozetten sahibinin altıncı sınıflardan biri olabileceğini düşündüler. Ertesi sabah yapılan duyuruyu duyan Elif koşarak öğretmenler odasına geldi ve kutusuna kavuştu.",
    "Bu metinde olayın başlaması ve sonuçlanması sırasıyla hangi zamanlarda gerçekleşmiştir?",
    ["Sabah - öğle", "Öğle - akşam", "Gece - akşamüstü", "Akşamüstü - ertesi sabah"],
    "D",
    "Kalem kutusu akşamüstü bulunmuş, sahibi ertesi sabah yapılan duyurunun ardından kutusuna kavuşmuştur."
  ),
  makeGrade6ReviewQuestion(
    "review6-010",
    "Metin karşılaştırma",
    "Zor",
    "I. metin: Bir müzeyi gezerken her eserin açıklamasını baştan sona okumak bazen yorucu olabilir. Önce dikkatinizi çeken eseri inceleyip ardından açıklamasına bakmak, gördüğünüz ayrıntılarla verilen bilgiyi ilişkilendirmenizi sağlar.\n\nII. metin: Doğa yürüyüşünde rehberin anlattıklarını dinlemek önemlidir ancak çevreyi yalnız onun sözleriyle tanımaya çalışmamak gerekir. Bir yaprağın dokusuna, kuş seslerinin yönüne ve toprağın kokusuna dikkat eden yürüyüşçü daha kalıcı bir deneyim yaşar.",
    "Bu iki metnin ortak yönü aşağıdakilerden hangisidir?",
    [
      "Öğrenirken kişinin kendi gözlemine de yer vermesi gerektiğini vurgulamaları",
      "Rehberli gezilerin bireysel gezilerden daha verimsiz olduğunu savunmaları",
      "Açıklayıcı bilgilerin hiçbir yararı olmadığını ileri sürmeleri",
      "Yalnızca açık havada yapılan etkinliklerden söz etmeleri"
    ],
    "A",
    "Her iki metin de verilen bilgilerin yanında kişinin kendi gözlemini kullanmasını önermektedir."
  ),
  makeGrade6ReviewQuestion(
    "review6-011",
    "Çıkarım yapma",
    "Orta",
    "Mahalle parkındaki küçük göletin suyu yaz sonunda sık sık bulanıklaşıyordu. Belediye görevlileri önce gölete düşen yaprakları düzenli toplamaya başladı. Ardından suyun çevresine, fazla besin maddelerini kökleriyle tutabilen sazlar dikildi. Birkaç ay sonra suyun daha berrak olduğu ve yüzeydeki yosunların azaldığı gözlendi.",
    "Bu metinden aşağıdakilerin hangisi çıkarılabilir?",
    [
      "Göletteki bütün canlılar başka bir alana taşınmıştır.",
      "Göletin temizlenmesinde doğal yöntemlerden de yararlanılmıştır.",
      "Suyun bulanıklaşmasının tek nedeni sıcak havadır.",
      "Parktaki gölet kış aylarında tamamen kurumaktadır."
    ],
    "B",
    "Sazların köklerinden yararlanılması, gölet temizliğinde doğal bir yöntemin kullanıldığını göstermektedir."
  ),
  makeGrade6ReviewQuestion(
    "review6-012",
    "Ana fikir",
    "Orta",
    "Bir el dokumasındaki küçük düzensizlik, çoğu zaman kusur değildir. Ustanın ipliği geçirdiği yön, tezgâhın o günkü gerginliği ve kullanılan boyanın tonu dokumaya kendine özgü bir iz bırakır. Fabrikada üretilen yüzlerce örtü birbirinin aynı olabilir; el emeği bir dokumayı değerli kılan ise ustasının kararlarını ve emeğini üzerinde taşımasıdır.",
    "Bu metinde asıl anlatılmak istenen aşağıdakilerden hangisidir?",
    [
      "Fabrikada üretilen ürünler her zaman daha dayanıklıdır.",
      "Dokuma yaparken yalnız doğal boyalar kullanılmalıdır.",
      "El dokumalarının değeri, ustanın emeğini ve özgün izlerini taşımalarından gelir.",
      "Dokuma tezgâhlarının gerginliği her gün değiştirilmelidir."
    ],
    "C",
    "Metin, el dokumasını değerli yapanın ustanın emeği ve üründeki özgün izler olduğunu vurgular."
  ),
  makeGrade6ReviewQuestion(
    "review6-013",
    "Yardımcı düşünce",
    "Orta",
    "Göçmen kuşlar uzun yolculuklarında yalnız Güneş'in konumundan yararlanmaz. Bazı türler gece yıldızları izler, bazıları Dünya'nın manyetik alanını algılar. Genç kuşlar ilk göçlerinde deneyimli kuşlarla birlikte hareket edebilir. Yol boyunca sulak alanlarda dinlenip enerji toplarlar. Bu alanların azalması, göç yolculuğunu daha yorucu ve tehlikeli hâle getirir.",
    "Bu metinden aşağıdakilerin hangisine ulaşılamaz?",
    [
      "Göç sırasında farklı yön bulma yöntemlerinin kullanıldığına",
      "Sulak alanların göçmen kuşlar için önemli olduğuna",
      "Genç kuşların deneyimli kuşlarla yolculuk edebildiğine",
      "Bütün kuş türlerinin aynı mevsimde ve aynı yolu izlediğine"
    ],
    "D",
    "Metinde bütün türlerin aynı mevsimde ve aynı rotada göç ettiğine ilişkin bilgi yoktur."
  ),
  makeGrade6ReviewQuestion(
    "review6-014",
    "Konu ve başlık",
    "Orta",
    "Kent ışıkları geceleri gökyüzünü aydınlattığında sönük yıldızları görmek zorlaşır. Bu durum yalnız gök bilimcilerin çalışmalarını etkilemez; yönünü yıldızlara göre bulan bazı canlıların da şaşırmasına yol açabilir. Gereksiz ışıkları kapatmak, lambaları yalnız yere yöneltmek ve uygun güçte ampul kullanmak hem enerji tasarrufu sağlar hem de gece göğünü korur.",
    "Bu metne verilebilecek en uygun başlık aşağıdakilerden hangisidir?",
    [
      "Yıldızların Uzaklığı",
      "Geceyi Geri Kazanmak",
      "Ampullerin Üretim Süreci",
      "Gök Bilimcilerin Kullandığı Araçlar"
    ],
    "B",
    "Metin, ışık kirliliğinin etkilerini ve gece göğünü koruma yollarını birlikte ele almaktadır."
  ),
  makeGrade6ReviewQuestion(
    "review6-015",
    "Paragraf tamamlama",
    "Orta",
    "Bir müzede çocuklara eski bir anahtar gösterildi ve bu anahtarın hangi kapıyı açmış olabileceği soruldu. Kimi çocuk bir sandık, kimi bir konak kapısı düşündü. Ardından anahtarın bulunduğu yer ve yapıldığı dönemle ilgili bilgiler paylaşıldı. Çocuklar ilk tahminlerini bu bilgiler ışığında yeniden değerlendirdi. Bu etkinlik, müzedeki bir nesneye bakmanın - - - -",
    "Bu metin aşağıdakilerden hangisiyle tamamlanmalıdır?",
    [
      "yalnızca onun biçimini tarif etmekle sınırlı olmadığını gösterdi.",
      "her zaman kesin ve değişmez bir sonuca ulaştırdığını kanıtladı.",
      "tarih bilgisine ihtiyaç duymadan yapılabileceğini ortaya koydu.",
      "nesnelerin maddi değerini belirlemeyi amaçladığını gösterdi."
    ],
    "A",
    "Etkinlikte gözlem, tahmin ve tarihsel bilgi birlikte kullanıldığı için yalnız biçimi tarif etmenin yeterli olmadığı anlatılır."
  ),
  makeGrade6ReviewQuestion(
    "review6-016",
    "Düşüncenin akışını bozan cümle",
    "Orta",
    "(I) Sağlıklı toprakta bitki köklerinin çevresinde çok sayıda küçük canlı yaşar. (II) Bu canlılar, toprağa karışan yaprak ve dalların parçalanmasına yardım eder. (III) Ortaya çıkan maddeler bitkilerin beslenmesinde kullanılır. (IV) Bazı saksılar seramikten, bazıları plastikten yapılır. (V) Bu nedenle toprağın yalnız mineral parçalarından oluşan cansız bir yapı olduğu söylenemez.",
    "Numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?",
    ["IV", "II", "V", "III"],
    "A",
    "IV. cümle toprağın canlı yapısından uzaklaşıp saksıların malzemesine geçmektedir."
  ),
  makeGrade6ReviewQuestion(
    "review6-017",
    "Paragrafta sıralama",
    "Zor",
    "I. Birkaç gün sonra kökün aşağıya, filizin ise ışığa doğru yöneldiğini gördü. II. Son olarak gözlemlerini tarihleriyle birlikte defterine kaydetti. III. Arda, fasulye tohumunu nemli pamuğun arasına yerleştirip şeffaf bir bardağa koydu. IV. Pamuğun kurumaması için her gün az miktarda su ekledi.",
    "Numaralanmış cümlelerle anlamlı bir metin oluşturulduğunda sıralama nasıl olur?",
    ["IV-III-I-II", "III-I-IV-II", "III-IV-I-II", "I-III-II-IV"],
    "C",
    "Önce deney kurulur (III), bakım yapılır (IV), sonuç gözlenir (I) ve kayıt tutulur (II)."
  ),
  makeGrade6ReviewQuestion(
    "review6-018",
    "Dil ve anlatım",
    "Orta",
    "Eski vapur, iskeleden ayrılırken derin bir soluk alır gibi düdüğünü öttürdü. Güvertedeki tahta sıralar gece yağmurundan hâlâ ıslaktı. Kıyıdaki evler küçülürken iyot kokusuna sıcak çay kokusu karışıyor, serin rüzgâr yolcuların yüzünde dolaşıyordu. Birkaç çocuk, vapurun ardında uzayan köpüklü izi sessizce izledi.",
    "Bu metnin dil ve anlatımıyla ilgili aşağıdakilerden hangisi söylenemez?",
    [
      "İnsana ait bir özellik cansız bir varlığa aktarılmıştır.",
      "Görme ve koklama duyularına yönelik ayrıntılar kullanılmıştır.",
      "Tanımlamaya dayalı bilimsel bir anlatım benimsenmiştir.",
      "Betimleme ile öyküleme bir arada kullanılmıştır."
    ],
    "C",
    "Metin bilimsel bir tanım yapmaz; duyusal ayrıntılarla bir anı canlandırır."
  ),
  makeGrade6ReviewQuestion(
    "review6-019",
    "Anlatım biçimleri",
    "Orta",
    "Şarj edilebilir piller, içlerindeki kimyasal tepkime tersine çevrilebildiği için birçok kez kullanılabilir. Pil bir cihaza enerji verirken depoladığı kimyasal enerji elektrik enerjisine dönüşür. Şarj sırasında ise dışarıdan verilen elektrik enerjisi yeniden kimyasal enerji olarak depolanır. Ancak her pilin belirli bir kullanım ömrü bulunduğundan zamanla depolama gücü azalır.",
    "Bu metinde ağır basan anlatım biçimi aşağıdakilerden hangisidir?",
    ["Açıklama", "Betimleme", "Tartışma", "Öyküleme"],
    "A",
    "Metin, şarj edilebilir pillerin çalışma biçimini bilgi vermek amacıyla açıkladığı için açıklayıcıdır."
  ),
  makeGrade6ReviewQuestion(
    "review6-020",
    "Hikâye unsurları",
    "Orta",
    "Kışın ilk karı öğleye doğru başladı. Zeynep, dedesinin çalışma odasındaki çekmeceleri düzenlerken sararmış bir fotoğraf buldu. Fotoğrafta, bugün yerinde apartmanların bulunduğu meydanda küçük bir tren istasyonu görünüyordu. Dedesine koşup fotoğrafı gösterince ikisi pencerenin önüne oturdu; dede, istasyondaki son yolculuğunu anlatmaya başladı.",
    "Bu metinde anlatılan olayın gerçekleştiği zaman aşağıdakilerden hangisidir?",
    ["Yaz akşamı", "Sonbahar sabahı", "İlkbahar gecesi", "Kışın öğle saatleri"],
    "D",
    "Metindeki 'kışın ilk karı' ve 'öğleye doğru' ifadeleri olayın zamanını açıkça göstermektedir."
  ),
  makeGrade6ReviewQuestion(
    "review6-021",
    "Metin karşılaştırma",
    "Zor",
    "I. metin: Bir romanı okurken karakterlerin kararlarını küçük notlarla izlemek, olayların nedenlerini anlamayı kolaylaştırır. Okur, karakterin önceki davranışlarını hatırladığında sonraki seçiminin tutarlı olup olmadığını değerlendirebilir.\n\nII. metin: Bir araştırma yazısını okurken her paragrafın yanına kısa bir anahtar ifade yazmak, düşüncelerin nasıl ilerlediğini görmeyi sağlar. Böylece yazarın hangi kanıtla hangi sonuca ulaştığı daha kolay izlenir.",
    "Bu iki metnin ortak yönü aşağıdakilerden hangisidir?",
    [
      "Her metnin yalnızca bir kez okunmasını önermeleri",
      "Okurken kısa notlar almanın anlamayı kolaylaştırdığını savunmaları",
      "Romanlarla araştırma yazılarının aynı özellikte olduğunu ileri sürmeleri",
      "Okuma hızını artırmanın yollarını açıklamaları"
    ],
    "B",
    "İki metinde de okuma sırasında kısa notlar tutmanın metni anlamaya katkısı anlatılmaktadır."
  ),
  makeGrade6ReviewQuestion(
    "review6-022",
    "Çıkarım yapma",
    "Orta",
    "Okulun boş duran arka bahçesi, öğrenciler ve velilerin çalışmasıyla küçük bir sebze bahçesine dönüştürüldü. Her sınıf farklı bir alanın bakımını üstlendi. Hasat edilen ürünlerin bir bölümü okul yemekhanesinde kullanıldı, kalanlar mahalledeki ihtiyaç sahiplerine ulaştırıldı. Fen derslerinde bitkilerin gelişimi bu bahçede gözlemlenirken öğrenciler sulama sırasını birlikte planladı.",
    "Bu metinden aşağıdakilerin hangisi çıkarılabilir?",
    [
      "Bahçe yalnızca okulun görünümünü güzelleştirmek için hazırlanmıştır.",
      "Çalışma, öğrenme ve yardımlaşmayı bir araya getirmiştir.",
      "Bahçede yetiştirilen ürünlerin tamamı satılmıştır.",
      "Bahçenin bakımını yalnız fen bilgisi öğretmeni yapmıştır."
    ],
    "B",
    "Bahçenin derste kullanılması, ortak bakım yapılması ve ürünlerin paylaşılması öğrenme ile yardımlaşmayı birleştirir."
  ),
  makeGrade6ReviewQuestion(
    "review6-023",
    "Ana fikir",
    "Orta",
    "Yanlış yapmak çoğu öğrenciyi rahatsız eder çünkü yanlışın başarısızlık göstergesi olduğunu düşünürler. Oysa yanlış cevap, öğrenmenin nerede durduğunu gösteren bir işaret olabilir. Öğrenci yalnız doğru seçeneğe bakıp geçmek yerine neden yanıldığını araştırdığında eksik bilgisini ya da aceleci düşünme biçimini fark eder. Böylece aynı yanlış, sonraki sorular için yol göstericiye dönüşür.",
    "Bu metnin ana düşüncesi aşağıdakilerden hangisidir?",
    [
      "Yanlışlar incelendiğinde öğrenmeyi geliştiren bir kaynağa dönüşebilir.",
      "Başarılı öğrenciler hiçbir soruda yanlış yapmaz.",
      "Her yanlışın nedeni yalnızca bilgi eksikliğidir.",
      "Doğru cevabı görmek, konuyu öğrenmek için her zaman yeterlidir."
    ],
    "A",
    "Metin, yanlışın nedenini incelemenin öğrenciye eksiklerini göstererek yeni sorularda yol açtığını vurgular."
  ),
  makeGrade6ReviewQuestion(
    "review6-024",
    "Yardımcı düşünce",
    "Orta",
    "Gölge oyunu perdesinin arkasında yalnızca tasvirleri hareket ettiren bir sanatçı yoktur. Sanatçı, karakterlerin seslerini birbirinden ayırır; konuşmaları doğaçlama biçimde güncel olaylara uyarlar. Tasvirler, ışığı geçiren işlenmiş deriden hazırlanır ve ince çubuklarla hareket ettirilir. Müzik ve çeşitli sesler de oyunun havasını güçlendirir. Bu gösteri, birçok sanat unsurunun birlikte çalışmasıyla ortaya çıkar.",
    "Bu metinde gölge oyunuyla ilgili aşağıdakilerin hangisine değinilmemiştir?",
    [
      "Tasvirlerin hangi malzemeden yapıldığına",
      "Sanatçının farklı karakterleri seslendirdiğine",
      "Oyunların ne kadar sürdüğüne",
      "Müziğin gösteriye katkı sağladığına"
    ],
    "C",
    "Metinde gölge oyununun süresiyle ilgili bilgi bulunmamaktadır."
  ),
  makeGrade6ReviewQuestion(
    "review6-025",
    "Konu ve başlık",
    "Orta",
    "Bazı apartmanların çatılarında sebze ve çiçek yetiştirilen küçük bahçeler kuruluyor. Bu bahçeler, yağmur suyunun bir bölümünü tutarak kanallara birden yüklenmesini önlüyor. Bitkiler yazın çatının fazla ısınmasını azaltıyor, arılar için besin kaynağı oluşturuyor. Kentte boş alanın az olduğu yerlerde çatılar böylece hem üretken hem de çevreye yararlı alanlara dönüşüyor.",
    "Bu metne verilebilecek en uygun başlık aşağıdakilerden hangisidir?",
    [
      "Apartmanlarda Yaşam Kuralları",
      "Sebzelerin Büyüme Süresi",
      "Kentte Yağmur Kanalları",
      "Çatıların Yeşil Dönüşümü"
    ],
    "D",
    "Metin, çatılarda kurulan bahçelerin kent çevresine sağladığı yararlar üzerinde durmaktadır."
  ),
  makeGrade6ReviewQuestion(
    "review6-026",
    "Paragraf tamamlama",
    "Orta",
    "Ormanda duyulan her sesin kaynağını görmek mümkün değildir. Kuru yaprakların hışırtısı küçük bir canlının ilerlediğini, dalların düzenli biçimde sallanması rüzgârın yönünü gösterebilir. Araştırmacılar belirli aralıklarla ses kaydı alarak bölgede yaşayan türler ve çevredeki değişimler hakkında bilgi toplar. Demek ki ormanı tanımak için - - - -",
    "Bu metin düşüncenin akışına göre aşağıdakilerden hangisiyle tamamlanmalıdır?",
    [
      "yalnızca ağaçların boyunu ölçmek yeterlidir.",
      "gündüz yapılan gözlemler her zaman daha güvenilirdir.",
      "bütün seslerin aynı canlı tarafından çıkarıldığı kabul edilmelidir.",
      "gözler kadar kulaklardan da yararlanmak gerekir."
    ],
    "D",
    "Metnin bütünü, doğayı tanımada sesleri dikkatle dinlemenin önemini anlatmaktadır."
  ),
  makeGrade6ReviewQuestion(
    "review6-027",
    "Düşüncenin akışını bozan cümle",
    "Orta",
    "(I) Arı otelleri, tek başına yaşayan bazı arı türlerine yuva alanı sağlamak için hazırlanır. (II) İçlerine farklı genişlikte delikleri olan tahta parçaları ve içi boş kamışlar yerleştirilir. (III) Yapı, yağmurdan korunacak ve sabah güneşi alacak bir noktaya asılır. (IV) Bal arıları kovanda kraliçe arıyla birlikte yaşar. (V) Otelin çevresinde farklı dönemlerde çiçek açan bitkilerin bulunması da arıların besine ulaşmasını kolaylaştırır.",
    "Numaralanmış cümlelerden hangisi metnin anlam bütünlüğünü bozmaktadır?",
    ["II", "V", "IV", "I"],
    "C",
    "IV. cümle arı otelinin hazırlanışından uzaklaşıp bal arılarının kovan yaşamına geçmektedir."
  ),
  makeGrade6ReviewQuestion(
    "review6-028",
    "Paragrafta sıralama",
    "Zor",
    "I. Temizlenen kâğıt hamuru ince bir tabaka hâlinde serilip kurutuldu. II. Sınıfta biriken kullanılmış kâğıtlar renklerine ve türlerine göre ayrıldı. III. Böylece eski kâğıtlardan yeni defter kapakları elde edildi. IV. Ayrılan kâğıtlar küçük parçalara bölünüp suyla karıştırıldı.",
    "Numaralanmış cümlelerle anlamlı bir paragraf oluşturulduğunda sıralama nasıl olur?",
    ["II-IV-I-III", "IV-II-III-I", "II-I-IV-III", "I-III-II-IV"],
    "A",
    "Süreç; ayırma, parçalama ve karıştırma, kurutma, yeni ürünü elde etme sırasıyla ilerler."
  ),
  makeGrade6ReviewQuestion(
    "review6-029",
    "Dil ve anlatım",
    "Orta",
    "Dar sokağın iki yanındaki taş evler, akşam güneşinde bal rengine bürünmüştü. Açık bir pencereden tencere kapağının sesi geliyor, fırından yükselen kekik kokusu havaya karışıyordu. Yokuşu ağır ağır çıkan seyyar satıcının sesi duvarlarda yankılanıyor; kapı önlerinde oturanlar günü uğurluyordu.",
    "Bu metnin dil ve anlatımıyla ilgili aşağıdakilerden hangisi söylenemez?",
    [
      "Mekâna ilişkin ayrıntılara yer verilmiştir.",
      "Bir düşünce sayısal verilerle kanıtlanmıştır.",
      "Farklı duyulara seslenen ifadeler kullanılmıştır.",
      "Betimleyici bir anlatım benimsenmiştir."
    ],
    "B",
    "Metinde sayısal veriyle kanıtlama yoktur; mekân duyusal ayrıntılarla betimlenmiştir."
  ),
  makeGrade6ReviewQuestion(
    "review6-030",
    "Anlatım biçimleri",
    "Orta",
    "Okul gezilerinin ders zamanını azalttığını söyleyip bu etkinlikleri gereksiz bulanlar var. Oysa iyi planlanmış bir gezi, sınıfta öğrenilen bilgiyi gerçek yaşamla buluşturur. Müzede görülen bir araç tarih konusunu, botanik bahçesinde incelenen bir yaprak fen bilgisini daha anlaşılır kılabilir. Gezi sonrasında hazırlanan notlar da öğrenilenlerin kalıcı olmasına yardım eder. Bu nedenle gezileri zaman kaybı saymak doğru değildir.",
    "Bu metinde ağır basan anlatım biçimi aşağıdakilerden hangisidir?",
    ["Açıklama", "Öyküleme", "Betimleme", "Tartışma"],
    "D",
    "Yazar, okul gezilerini gereksiz gören düşünceye karşı çıkarak kendi görüşünü savunmuştur."
  ),
  makeGrade6ReviewQuestion(
    "review6-031",
    "Hikâye unsurları",
    "Orta",
    "Sabah erkenden başlayan yağmur, köy yolunu çamura çevirmişti. Postacı Kemal, bisikletini okulun duvarına yaslayıp çantasındaki mektupları kontrol etti. Uzak mahallede yaşayan Emine Teyze'nin mektubunu görünce yola bisikletle devam edemeyeceğini anladı. Mektubu montunun içine yerleştirdi ve kalan yolu yürümeye karar verdi.",
    "Bu metinde olayın gerçekleştiği yer aşağıdakilerden hangisidir?",
    ["Kent meydanı", "Köy yolu ve okul çevresi", "Tren istasyonu", "Deniz kıyısı"],
    "B",
    "Köy yolu, okulun duvarı ve uzak mahalle ifadeleri olayın köy çevresinde geçtiğini göstermektedir."
  ),
  makeGrade6ReviewQuestion(
    "review6-032",
    "Metin karşılaştırma",
    "Zor",
    "I. metin: Eski bir aile fotoğrafını incelerken yalnız kişilerin yüzlerine bakmam. Arkadaki dükkân tabelası, giyim biçimleri ve sokaktaki araçlar da fotoğrafın çekildiği dönem hakkında ipucu verir.\n\nII. metin: Bir gezi yazısında yazarın anlattığı yapılar kadar küçük ayrıntılar da önemlidir. Pazardaki ürünler, insanların kullandığı sözler ve ulaşım araçları, o yerin günlük yaşamını anlamamızı sağlar.",
    "Bu iki metnin ortak yönü aşağıdakilerden hangisidir?",
    [
      "Küçük ayrıntıların geçmişi ve günlük yaşamı anlamaya yardım ettiğini belirtmeleri",
      "Fotoğrafların yazılı metinlerden daha güvenilir olduğunu savunmaları",
      "Yalnız tarihî yapıların incelenmesi gerektiğini söylemeleri",
      "Ulaşım araçlarının zaman içinde değişmediğini ileri sürmeleri"
    ],
    "A",
    "İki metin de ilk bakışta önemsiz görünen ayrıntıların dönem ve yaşam hakkında bilgi verdiğini anlatır."
  ),
  makeGrade6ReviewQuestion(
    "review6-033",
    "Çıkarım yapma",
    "Orta",
    "Kasabanın yüz yıllık taş köprüsünde küçük çatlaklar belirlenince araç geçişi durduruldu. Uzmanlar, köprünün taşlarını numaralandırarak dikkatle söktü; sağlam olanları temizleyip yeniden kullandı, zarar görenlerin yerine aynı özellikte taşlar hazırladı. Çalışma tamamlandığında köprü yeniden açıldı ancak ağır araçların farklı bir yoldan geçmesine karar verildi.",
    "Bu metinden aşağıdakilerin hangisi çıkarılabilir?",
    [
      "Köprünün bütün taşları yenileriyle değiştirilmiştir.",
      "Onarım sırasında köprünün eski yapısı önemsenmemiştir.",
      "Köprü yalnız yayaların kullanacağı bir yapıya dönüştürülmüştür.",
      "Köprüyü korumak için kullanımına bazı sınırlamalar getirilmiştir."
    ],
    "D",
    "Ağır araçların başka yola yönlendirilmesi, köprünün korunması amacıyla kullanımın sınırlandığını gösterir."
  ),
  makeGrade6ReviewQuestion(
    "review6-034",
    "Ana fikir",
    "Orta",
    "Tiyatroda izleyici yalnız oyuncunun sahnedeki son hâlini görür. Oysa bir karakterin yürüyüşünü, konuşma biçimini ve duygularını inandırıcı kılmak için haftalarca prova yapılır. Oyuncu bazen aynı sahneyi defalarca dener, yönetmenin önerilerini uygular ve arkadaşlarının oyununa uyum sağlar. Sahnedeki doğal görünüm, çoğu zaman uzun ve dikkatli bir hazırlığın sonucudur.",
    "Bu metinde asıl anlatılmak istenen aşağıdakilerden hangisidir?",
    [
      "Tiyatro oyunlarında bütün kararları yalnız yönetmen verir.",
      "Sahnede doğal görünen başarılı oyun, uzun bir hazırlık ve iş birliği gerektirir.",
      "Oyuncular her provada farklı bir karakteri canlandırmalıdır.",
      "İzleyiciler tiyatrodaki hazırlık sürecini ayrıntılı biçimde görür."
    ],
    "B",
    "Metin, etkili bir sahne performansının prova, yönlendirme ve uyumla hazırlandığını vurgulamaktadır."
  ),
  makeGrade6ReviewQuestion(
    "review6-035",
    "Yardımcı düşünce",
    "Orta",
    "Yarasalar karanlıkta yönlerini bulmak için çevrelerine insanların duyamayacağı kadar yüksek frekanslı sesler gönderir. Bu sesler bir yüzeye çarpıp geri döndüğünde yarasa, engelin uzaklığını ve büyüklüğünü anlayabilir. Bazı türler bu yöntemle küçük böceklerin hareketini bile belirler. Ancak bütün yarasalar aynı besinle yaşamaz; meyve ve çiçek özüyle beslenen türler de vardır.",
    "Bu metinden aşağıdakilerin hangisine ulaşılamaz?",
    [
      "Bütün yarasaların yalnız böcekle beslendiğine",
      "Bazı yarasaların seslerden yararlanarak yön bulduğuna",
      "Geri dönen seslerin engeller hakkında bilgi verdiğine",
      "Meyveyle beslenen yarasa türlerinin bulunduğuna"
    ],
    "A",
    "Metin, bütün yarasaların değil yalnız bazı türlerin böcekle beslendiğini belirtmektedir."
  ),
  makeGrade6ReviewQuestion(
    "review6-036",
    "Konu ve başlık",
    "Orta",
    "Eskiden kent meydanlarındaki saat kuleleri, insanların ortak zamanını düzenleyen önemli yapılardı. Kol saati taşımayan biri, işine ya da yolculuğuna meydandaki saate bakarak yetişirdi. Saat kuleleri çoğu zaman uzaktan görülebilecek yüksek bir yere yapılır, çan sesiyle saati çevreye duyururdu. Bugün bu kuleler zaman göstermenin yanında kentlerin geçmişini hatırlatan simgelerdir.",
    "Bu metne getirilebilecek en uygun başlık aşağıdakilerden hangisidir?",
    [
      "Kol Saatinin Gelişimi",
      "Kent Meydanlarının Kalabalığı",
      "Zamanın Simgesi Saat Kuleleri",
      "Çan Yapımında Kullanılan Metaller"
    ],
    "C",
    "Metin, saat kulelerinin geçmişteki işlevini ve günümüzdeki simgesel değerini anlatmaktadır."
  ),
  makeGrade6ReviewQuestion(
    "review6-037",
    "Paragraf tamamlama",
    "Orta",
    "Uzun süre aralıksız çalışan kişinin dikkati giderek azalabilir. Kısa bir ara vermek, zihnin dinlenmesini ve işe yeniden odaklanmasını kolaylaştırır. Ancak mola sırasında başka bir yorucu işe başlamak ya da ekranda uzun süre oyalanmak beklenen yararı sağlamaz. Bu nedenle verimli bir mola - - - -",
    "Bu metin aşağıdakilerden hangisiyle tamamlanmalıdır?",
    [
      "çalışma süresinden daha uzun olmalıdır.",
      "zihni yormayan ve sınırı belli bir dinlenme zamanı olmalıdır.",
      "yalnızca telefon kullanılarak değerlendirilmelidir.",
      "çalışılan konunun tamamen bırakılmasını gerektirir."
    ],
    "B",
    "Metin, molanın yararlı olması için zihni dinlendirmesi ve gereğinden fazla uzamaması gerektiğine bağlanır."
  ),
  makeGrade6ReviewQuestion(
    "review6-038",
    "Düşüncenin akışını bozan cümle",
    "Orta",
    "(I) Mercanlar, çok küçük canlıların bir araya gelmesiyle oluşan yapılardır. (II) Birçok balık ve deniz canlısı mercanların çevresinde barınır. (III) Deniz suyunun uzun süre normalden sıcak olması mercanların beyazlaşmasına yol açabilir. (IV) Balıkçı teknelerinin motorları düzenli olarak bakımdan geçirilmelidir. (V) Mercanların zarar görmesi, çevrelerinde yaşayan pek çok canlıyı da etkiler.",
    "Numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?",
    ["II", "V", "IV", "III"],
    "C",
    "IV. cümle mercanlardan uzaklaşıp balıkçı teknelerinin motor bakımına geçmektedir."
  ),
  makeGrade6ReviewQuestion(
    "review6-039",
    "Paragrafta sıralama",
    "Zor",
    "I. Bu ölçümler ortak bir haritada bir araya getirildiğinde kentin sıcaklık dağılımı ortaya çıktı. II. Öğrenciler aynı saatte okul bahçesi, ağaçlık alan ve asfalt meydandaki sıcaklığı ölçtü. III. Çalışmanın sonunda ağaçlık bölgelerin çevresine göre daha serin kaldığı görüldü. IV. Her grup ölçüm yaptığı yerin konumunu ve yüzey özelliğini de not etti.",
    "Numaralanmış cümlelerle anlamlı bir paragraf oluşturulduğunda sıralama nasıl olur?",
    ["IV-II-III-I", "I-II-IV-III", "II-I-III-IV", "II-IV-I-III"],
    "D",
    "Önce ölçüm yapılır (II), ayrıntılar kaydedilir (IV), veriler birleştirilir (I) ve sonuç açıklanır (III)."
  ),
  makeGrade6ReviewQuestion(
    "review6-040",
    "Dil ve anlatım",
    "Orta",
    "Bilim insanı Aziz Sancar, 1946 yılında Mardin'in Savur ilçesinde doğdu. İstanbul Üniversitesi Tıp Fakültesini bitirdikten sonra bir süre doktorluk yaptı. Daha sonra bilimsel çalışmalarını sürdürmek için Amerika Birleşik Devletleri'ne gitti. Hücrelerin zarar gören DNA'yı nasıl onardığını açıklayan araştırmalarıyla 2015 yılında Nobel Kimya Ödülü'nü aldı.",
    "Bu metnin dil ve anlatımıyla ilgili aşağıdakilerden hangisi söylenebilir?",
    [
      "Bilgi vermek amacıyla nesnel bir anlatım kullanılmıştır.",
      "Olaylar kahraman anlatıcının ağzından aktarılmıştır.",
      "Hayal ürünü ögelere ağırlık verilmiştir.",
      "Okurun düşüncesini değiştirmek için karşıt görüşler tartışılmıştır."
    ],
    "A",
    "Metinde bir kişinin yaşamı tarih ve olaylarla nesnel biçimde anlatılmıştır."
  ),
  makeGrade6ReviewQuestion(
    "review6-041",
    "Anlatım biçimleri",
    "Orta",
    "Buzdolabının kapağı açıldığında içerideki sıcaklık yükselir. Cihazın soğutma sistemi, sıcaklığı yeniden ayarlanan düzeye indirmek için daha uzun süre çalışır. Kapak sık sık ya da gereğinden uzun açık bırakılırsa enerji tüketimi artar. Bu nedenle yiyecekleri almadan önce ne aradığımıza karar vermek ve kapağı kısa sürede kapatmak enerji tasarrufu sağlar.",
    "Bu metinde ağır basan anlatım biçimi aşağıdakilerden hangisidir?",
    ["Açıklama", "Tartışma", "Betimleme", "Öyküleme"],
    "A",
    "Metin, buzdolabı kapağının açık kalmasıyla enerji tüketimi arasındaki ilişkiyi açıklamaktadır."
  ),
  makeGrade6ReviewQuestion(
    "review6-042",
    "Ana fikir",
    "Orta",
    "Merak, yalnızca bilmediğimiz bir şeyi sormak değildir. İyi bir soru, bildiğimizi sandığımız bir konuya yeniden bakmamızı sağlar. Bir gölgenin gün içinde neden yer değiştirdiğini ya da bazı yaprakların neden suyu tutmadığını merak eden kişi, gözlem yapmaya ve kanıt aramaya başlar. Pek çok buluş, sıradan görünen bir ayrıntının peşinden sabırla gidilmesiyle ortaya çıkmıştır.",
    "Bu metnin ana düşüncesi aşağıdakilerden hangisidir?",
    [
      "Bilimsel çalışmalar yalnız laboratuvarda yapılabilir.",
      "Her sorunun cevabı daha önce bulunmuştur.",
      "Günlük ayrıntılar üzerinde düşünmek zaman kaybıdır.",
      "Merak ve soru sorma, gözlem ile yeni buluşların başlangıcı olabilir."
    ],
    "D",
    "Metin, merakın insanı gözlem ve araştırmaya yönelterek yeni buluşlara kapı açtığını vurgular."
  ),
  makeGrade6ReviewQuestion(
    "review6-043",
    "Yardımcı düşünce",
    "Orta",
    "Kervansaraylar, eski ticaret yollarında yolcuların ve tüccarların güvenle konaklaması için kurulmuş yapılardı. Geniş avlularında yük hayvanları dinlendirilir, kapalı bölümlerde yolcular kalırdı. Bazılarında küçük bir mescit, hamam, depo ve tamir alanı bulunurdu. Bu yapılar, farklı bölgelerden gelen insanların haber ve kültür alışverişinde bulunmasına da ortam hazırlardı.",
    "Bu metinde kervansaraylarla ilgili aşağıdakilerin hangisine değinilmemiştir?",
    [
      "Yolcuların güvenli biçimde konaklamasına yardımcı olduğuna",
      "Yapımında çalışan ustaların adlarına",
      "Farklı amaçlara ayrılmış bölümlerinin bulunduğuna",
      "Kültürel etkileşime katkı sağladığına"
    ],
    "B",
    "Metinde kervansarayları yapan ustaların kimler olduğuna ilişkin bilgi yoktur."
  ),
  makeGrade6ReviewQuestion(
    "review6-044",
    "Konu ve başlık",
    "Orta",
    "Doğa günlüğü tutan biri, gördüğü canlıların yalnız adını yazmaz. Gözlemin tarihini, hava durumunu, canlının bulunduğu yeri ve dikkat çeken davranışını da kaydeder. Aynı yere farklı zamanlarda dönüp önceki notlarıyla karşılaştırma yaptığında mevsimsel değişimleri fark edebilir. Çizimler ve küçük haritalar da gözlemin daha ayrıntılı hatırlanmasını sağlar.",
    "Bu metne getirilebilecek en uygun başlık aşağıdakilerden hangisidir?",
    [
      "Canlıların Bilimsel Adları",
      "Mevsimlerin Oluşumu",
      "Gözlemin Hafızası: Doğa Günlüğü",
      "Harita Çizmenin Kuralları"
    ],
    "C",
    "Metin, doğa gözlemlerini ayrıntılı ve karşılaştırılabilir biçimde kaydetmenin yollarını anlatmaktadır."
  ),
  makeGrade6ReviewQuestion(
    "review6-045",
    "Paragraf tamamlama",
    "Zor",
    "Bir masalı başka bir dile aktaran çevirmen, yalnız sözcüklerin karşılığını bulmakla yetinemez. Masaldaki tekerlemelerin ritmini, karakterlerin konuşma biçimini ve kültüre özgü benzetmeleri de düşünmelidir. Sözcük sözcük yapılan bir çeviri anlamı aktarabilir fakat metnin neşesini ve sesini kaybettirebilir. Bu yüzden başarılı bir masal çevirisi - - - -",
    "Bu metin düşüncenin akışına göre aşağıdakilerden hangisiyle tamamlanmalıdır?",
    [
      "metindeki bütün cümleleri aynı uzunlukta tutmalıdır.",
      "anlamla birlikte anlatımın havasını da yeni dile taşımalıdır.",
      "masalın geçtiği yeri mutlaka değiştirmelidir.",
      "yalnızca sözlükteki ilk anlamları kullanmalıdır."
    ],
    "B",
    "Parçada çevirinin hem anlamı hem de ritim, ses ve kültürel özellikleri koruması gerektiği anlatılmaktadır."
  ),
  makeGrade6ReviewQuestion(
    "review6-046",
    "Düşüncenin akışını bozan cümle",
    "Orta",
    "(I) Bir akarsuyun kıyısındaki bitkiler, toprağın suyla sürüklenmesini azaltır. (II) Kökler toprağı tutarken yapraklar birçok canlıya gölge ve barınak sağlar. (III) Kıyıdaki doğal bitki örtüsünün korunması suyun temizliği için de önemlidir. (IV) Bu nedenle akarsu çevresindeki onarım çalışmalarında bölgeye uygun bitkiler seçilir. (V) Deniz fenerleri, gemilere kıyının yerini göstermek için güçlü ışıklar kullanır.",
    "Numaralanmış cümlelerden hangisi metnin anlam bütünlüğünü bozmaktadır?",
    ["V", "II", "IV", "I"],
    "A",
    "V. cümle akarsu kıyısındaki bitkilerden uzaklaşıp deniz fenerlerine geçmektedir."
  ),
  makeGrade6ReviewQuestion(
    "review6-047",
    "Dil ve anlatım",
    "Orta",
    "Patikaya girdiğimde yağmur yeni dinmişti. Çamların ucunda biriken damlalar omzuma düşüyor, ıslak toprağın kokusu adımlarımı yavaşlatıyordu. Vadinin içinden yükselen sis, ağaçların arasına beyaz bir örtü gibi serilmişti. Bir kayanın yanında durup uzaktan gelen su sesini dinledim; sanki orman bütün gece anlattıklarını şimdi fısıldıyordu.",
    "Bu metnin dil ve anlatımıyla ilgili aşağıdakilerden hangisi söylenemez?",
    [
      "Birinci kişi anlatımı kullanılmıştır.",
      "Benzetme ve kişileştirmeye başvurulmuştur.",
      "Sayısal verilerle nesnel bir sonuca ulaşılmıştır.",
      "Birden fazla duyuyla ilgili ayrıntı verilmiştir."
    ],
    "C",
    "Metin öznel ve duyusal bir anlatıma sahiptir; sayısal verilerle kanıtlama yapılmamıştır."
  ),
  makeGrade6ReviewQuestion(
    "review6-048",
    "Ana fikir",
    "Orta",
    "Müzelerde bazı tarihî eserlerin asılları yerine gerçeğine çok benzeyen kopyaları sergilenir. Çünkü ışık, nem ya da sürekli açıkta kalma, hassas eserlerin zarar görmesine neden olabilir. Kopya sayesinde ziyaretçi eserin biçimini ve ayrıntılarını inceleyebilirken asıl eser uygun koşullarda korunur. Burada amaç ziyaretçiyi yanıltmak değil, kültürel mirası gelecek kuşaklara ulaştırmaktır.",
    "Bu metinde asıl anlatılmak istenen aşağıdakilerden hangisidir?",
    [
      "Müzelerdeki bütün eserler kopyalarıyla değiştirilmelidir.",
      "Eser kopyaları, inceleme imkânı sunarken asıl eserin korunmasına yardım eder.",
      "Tarihî eserlerin yalnız biçimsel özellikleri önemlidir.",
      "Ziyaretçiler kopya eserleri asıllarından ayıramaz."
    ],
    "B",
    "Metin, kopyaların ziyaretçiye inceleme fırsatı verirken hassas asıl eserleri koruduğunu vurgulamaktadır."
  ),
  makeGrade6ReviewQuestion(
    "review6-049",
    "Yardımcı düşünce",
    "Orta",
    "Kompost hazırlamak için sebze ve meyve kabukları, kuru yapraklar ve az miktarda çim artığı bir araya getirilebilir. Karışımın hava alması için belirli aralıklarla çevrilmesi gerekir. Çok kuru olduğunda az su eklenir, aşırı ıslak olduğunda ise kuru yaprak miktarı artırılır. Et, yağ ve plastik gibi maddeler ev tipi komposta konmaz. Uygun koşullarda bekleyen karışım zamanla koyu renkli, toprağa benzeyen bir yapıya dönüşür.",
    "Bu metinde kompostla ilgili aşağıdakilerin hangisine değinilmemiştir?",
    [
      "Hazır kompostun hangi fiyatla satıldığına",
      "Karışımın hava alması için ne yapılacağına",
      "Fazla nemin nasıl dengeleneceğine",
      "Hangi maddelerin komposta konmaması gerektiğine"
    ],
    "A",
    "Metinde hazır kompostun satış fiyatına ilişkin herhangi bir bilgi verilmemiştir."
  ),
  makeGrade6ReviewQuestion(
    "review6-050",
    "Dil ve anlatım",
    "Zor",
    "Düzenli uyku, öğrenme sürecinin görünmeyen yardımcılarından biridir. Uyku sırasında beyin, gün içinde edinilen bilgileri işler ve önemli olanları uzun süreli belleğe aktarmaya hazırlanır. Bir araştırmada yeterli uyuyan öğrencilerin yeni öğrendikleri kelimeleri hatırlama oranının, az uyuyan öğrencilere göre daha yüksek olduğu görülmüştür. Nasıl ki bir kitaplığın düzenlenmesi aranan kitabı bulmayı kolaylaştırırsa uyku da bilgilerin zihinde düzenlenmesine yardım eder.",
    "Bu metinde düşünceyi geliştirmek için aşağıdakilerden hangilerinden yararlanılmıştır?",
    [
      "Tanımlama ve tanık gösterme",
      "Örneklendirme ve sayısal veri",
      "Karşılaştırma ve tanımlama",
      "Araştırma sonucundan yararlanma ve benzetme"
    ],
    "D",
    "Metinde bir araştırmanın sonucuna yer verilmiş, uykunun işlevi kitaplığın düzenlenmesine benzetilmiştir."
  ),
  makeGrade6ReviewQuestion(
    "review6-051",
    "Ana fikir",
    "Orta",
    "Bir haritayı kullanmak, yalnız çizgileri ve simgeleri tanımak değildir. Haritaya bakan kişi önce nerede bulunduğunu, sonra nereye gitmek istediğini belirlemelidir. Ölçeği dikkate almadan seçilen yol, kâğıt üzerinde kısa görünse de gerçekte oldukça uzun olabilir. Bu nedenle harita, üzerindeki bilgiler amaçla ilişkilendirildiğinde yol gösteren bir araca dönüşür.",
    "Bu metnin ana düşüncesi aşağıdakilerden hangisidir?",
    [
      "Haritadaki bütün yollar aynı uzunlukta gösterilir.",
      "Haritadan yararlanmak, bilgileri gidilecek amaca göre değerlendirmeyi gerektirir.",
      "Bir yere ulaşmanın en kolay yolu başkalarına sormaktır.",
      "Harita çiziminde yalnızca renklerin anlamını bilmek yeterlidir."
    ],
    "B",
    "Metin, haritadaki bilgilerin bulunulan yer ve ulaşılmak istenen amaçla birlikte değerlendirilmesi gerektiğini vurgular."
  ),
  makeGrade6ReviewQuestion(
    "review6-052",
    "Yardımcı düşünce",
    "Orta",
    "Buzullar, yıllar boyunca üst üste biriken kar tabakalarının sıkışmasıyla oluşur. Kendi ağırlıklarıyla çok yavaş hareket ederken geçtikleri vadilerin biçimini değiştirebilirler. İçlerinde kalan hava kabarcıkları, geçmiş dönemlerin atmosferi hakkında araştırmacılara bilgi verir. Ancak sıcaklıkların artmasıyla birçok buzulun alanı küçülmekte ve erime hızı yükselmektedir.",
    "Bu metinden buzullarla ilgili aşağıdakilerin hangisine ulaşılamaz?",
    [
      "Geçmişteki hava koşulları hakkında bilgi verebildiklerine",
      "Hareket ederken yeryüzü şekillerini etkileyebildiklerine",
      "Sıkışan kar katmanlarından oluştuklarına",
      "Dünyadaki bütün tatlı suyun buzullarda bulunduğuna"
    ],
    "D",
    "Metinde dünyadaki bütün tatlı suyun buzullarda bulunduğuna ilişkin bir bilgi verilmemiştir."
  ),
  makeGrade6ReviewQuestion(
    "review6-053",
    "Konu ve başlık",
    "Orta",
    "Mahallede kurulan onarım atölyesine bozulan küçük ev aletleri, oyuncaklar ve bisikletler getiriliyor. Gönüllüler, eşyayı hemen çöpe atmak yerine arızanın kaynağını birlikte araştırıyor. Onarılabilen araçlar yeniden kullanıma kazandırılırken sahipleri de basit bakım yöntemlerini öğreniyor. Böylece hem atık miktarı azalıyor hem de kullanılabilir eşyaların ömrü uzuyor.",
    "Bu metne getirilebilecek en uygun başlık aşağıdakilerden hangisidir?",
    [
      "Atmadan Önce Onar",
      "Yeni Ev Aletleri Seçmek",
      "Mahallede Spor Etkinlikleri",
      "Oyuncak Üretiminin Aşamaları"
    ],
    "A",
    "Metin, bozulan eşyaların atılmadan önce onarılıp yeniden kullanılması üzerinde durmaktadır."
  ),
  makeGrade6ReviewQuestion(
    "review6-054",
    "Paragraf tamamlama",
    "Orta",
    "Bir konuşmada yalnız kendi söyleyeceklerimizi düşünürsek karşımızdakini gerçekten dinleyemeyiz. Etkili dinleyici, konuşanın sözünü bitirmesini bekler; anlamadığı noktayı uygun bir soruyla açıklığa kavuşturur. Ayrıca yüz ifadesi ve ses tonu gibi ipuçlarını da dikkate alır. Kısacası iyi bir dinleme - - - -",
    "Bu metin düşüncenin akışına göre aşağıdakilerden hangisiyle tamamlanmalıdır?",
    [
      "konuşanın kullandığı bütün sözcükleri ezberlemektir.",
      "karşılık vermek için en uygun anı beklemektir.",
      "söylenenleri anlamaya yönelik dikkatli ve etkin bir çabadır.",
      "her konuşmada aynı soruları sormayı gerektirir."
    ],
    "C",
    "Parçada iyi dinlemenin bekleme, soru sorma ve farklı ipuçlarını değerlendirme gerektiren etkin bir süreç olduğu anlatılır."
  ),
  makeGrade6ReviewQuestion(
    "review6-055",
    "Düşüncenin akışını bozan cümle",
    "Orta",
    "(I) Güneş saati, bir cismin gölgesinin gün içinde yer değiştirmesinden yararlanır. (II) Güneş gökyüzünde ilerledikçe çubuğun gölgesi farklı saat çizgilerinin üzerine düşer. (III) Saatin doğru çalışması için yönünün ve bulunduğu yerin özelliklerine göre hazırlanması gerekir. (IV) Kum saatlerinde zaman, ince bir bölümden akan kumla ölçülür. (V) Kapalı ve bulutlu havalarda belirgin bir gölge oluşmadığı için güneş saati kullanılamaz.",
    "Numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?",
    ["II", "V", "IV", "III"],
    "C",
    "IV. cümle güneş saatinin çalışma biçiminden uzaklaşıp kum saatini açıklamaktadır."
  ),
  makeGrade6ReviewQuestion(
    "review6-056",
    "Paragrafta sıralama",
    "Zor",
    "I. Görüşmeler tamamlanınca kayıtlar yazıya aktarıldı ve ortak konulara göre düzenlendi. II. Öğrenciler, mahallenin geçmişini araştırmak için uzun süredir bölgede yaşayan kişilerle görüşmeye karar verdi. III. Böylece eski sokaklar, unutulan meslekler ve değişen geleneklerle ilgili bir sözlü tarih dosyası oluştu. IV. Önce sorular hazırlandı, ardından görüşülecek kişilerden izin alındı.",
    "Numaralanmış cümlelerle anlamlı bir paragraf oluşturulduğunda sıralama nasıl olur?",
    ["IV-II-I-III", "II-IV-I-III", "II-I-IV-III", "I-III-II-IV"],
    "B",
    "Önce çalışma kararı verilir (II), hazırlık yapılır (IV), kayıtlar düzenlenir (I) ve dosya ortaya çıkar (III)."
  ),
  makeGrade6ReviewQuestion(
    "review6-057",
    "Dil ve anlatım",
    "Orta",
    "Tren istasyonuna vardığımızda hava yeni aydınlanıyordu. Rayların üzerinde ince bir sis uzanmış, bekleme salonundaki sarı lambalar henüz sönmemişti. Uzakta duyulan düdükle birlikte perondaki güvercinler bir anda havalandı. Elimdeki sıcak bardaktan yükselen tarçın kokusu, sabahın serinliğine karıştı.",
    "Bu metnin dil ve anlatımıyla ilgili aşağıdakilerden hangisi söylenemez?",
    [
      "Birinci kişi anlatımından yararlanılmıştır.",
      "Zaman ve mekâna ilişkin ayrıntılar verilmiştir.",
      "Birden fazla duyuya seslenen ifadeler kullanılmıştır.",
      "Bir düşünce karşıt görüşlerle savunulmuştur."
    ],
    "D",
    "Metinde bir düşünceyi savunmaya yönelik tartışma yoktur; bir an duyusal ayrıntılarla anlatılmıştır."
  ),
  makeGrade6ReviewQuestion(
    "review6-058",
    "Anlatım biçimleri",
    "Orta",
    "Basılı kitapların yerini elektronik kitapların alacağını ve kâğıt kitapların gereksizleşeceğini söyleyenler var. Oysa okurların tercihleri tek bir biçime sığmaz. Elektronik kitap yolculukta kolaylık sağlarken basılı kitap sayfalar arasında hızlıca gezinmeyi ve kenara not almayı kolaylaştırabilir. Önemli olan birini bütünüyle reddetmek değil, okuma amacına uygun aracı seçmektir.",
    "Bu metinde ağır basan anlatım biçimi aşağıdakilerden hangisidir?",
    ["Tartışma", "Öyküleme", "Betimleme", "Açıklama"],
    "A",
    "Yazar, basılı kitabın gereksizleşeceği görüşüne karşı çıkarak kendi düşüncesini savunmuştur."
  ),
  makeGrade6ReviewQuestion(
    "review6-059",
    "Hikâye unsurları",
    "Orta",
    "Öğleden sonra başlayan rüzgâr, kıyıdaki küçük tekneleri sallıyordu. Burak, dedesinin kulübesinde eski ağları toplarken tahta sandığın arkasına sıkışmış bir şişe buldu. Şişenin içindeki kâğıtta, yıllar önce çizilmiş bir koy haritası vardı. Haritayı dikkatle açıp dedesine götürdü; ikisi işaretli yerin neresi olabileceğini konuşmaya başladı.",
    "Bu metinde olayın geçtiği yer aşağıdakilerden hangisidir?",
    ["Dağ köyündeki okul", "Kent merkezindeki müze", "Kıyıdaki kulübe", "Orman içindeki kamp"],
    "C",
    "Tekneler, kıyı ve dedenin kulübesiyle ilgili ifadeler olayın kıyıdaki bir kulübede geçtiğini göstermektedir."
  ),
  makeGrade6ReviewQuestion(
    "review6-060",
    "Metin karşılaştırma",
    "Zor",
    "I. metin: Bir müzik parçasını yalnız baştan sona çalmak, zor bölümleri geliştirmeye yetmeyebilir. Müzisyen, güçlük yaşadığı ölçüleri yavaş tempoda tekrar eder ve sonra parçanın bütünüyle birleştirir.\n\nII. metin: Uzun mesafe koşucusu her antrenmanda aynı hızla koşmaz. Dayanıklılık, hız ve dinlenme çalışmalarını ayrı günlere bölerek eksik yönlerini geliştirir; yarıştan önce bunları bir bütün hâline getirir.",
    "Bu iki metnin ortak yönü aşağıdakilerden hangisidir?",
    [
      "Başarı için çalışmanın bölümlere ayrılarak planlanması gerektiğini anlatmaları",
      "Yalnızca yetenekli kişilerin başarılı olabileceğini savunmaları",
      "Hızlı çalışmanın her durumda daha yararlı olduğunu ileri sürmeleri",
      "Çalışma sırasında dinlenmenin gereksiz olduğunu söylemeleri"
    ],
    "A",
    "Her iki metin de farklı becerilerin ayrı ayrı çalışılıp sonra bütünleştirilmesini önermektedir."
  ),
  makeGrade6ReviewQuestion(
    "review6-061",
    "Çıkarım yapma",
    "Orta",
    "Okul yönetimi, koridorlardaki musluklara suyun ne kadar süre aktığını gösteren sayaçlar taktı. İlk hafta yapılan ölçümlerde teneffüslerden sonra tüketimin çok yükseldiği görüldü. Öğrenciler hazırladıkları afişlerle muslukların açık bırakılmamasını hatırlattı, damlatan musluklar da onarıldı. Bir ay sonraki ölçümde tüketimin belirgin biçimde azaldığı belirlendi.",
    "Bu metinden aşağıdakilerin hangisi çıkarılabilir?",
    [
      "Okuldaki bütün musluklar yenileriyle değiştirilmiştir.",
      "Sayaçlar yalnız süs amacıyla yerleştirilmiştir.",
      "Su tüketimi her ay aynı düzeyde kalmıştır.",
      "Ölçüm ve bilinçlendirme çalışmaları su tasarrufuna katkı sağlamıştır."
    ],
    "D",
    "Tüketimin ölçülmesi, afişlerle uyarı yapılması ve arızaların giderilmesinden sonra su kullanımı azalmıştır."
  ),
  makeGrade6ReviewQuestion(
    "review6-062",
    "Ana fikir",
    "Orta",
    "Eski yazma eserler, zamanla kırılganlaşan kâğıtları nedeniyle herkesin kullanımına açılamaz. Uzmanlar bu eserlerin sayfalarını yüksek çözünürlükte görüntüleyerek dijital ortama aktarır. Böylece araştırmacılar metinleri büyüterek inceleyebilir, farklı şehirlerdeki kişiler aynı esere ulaşabilir. Dijital kopya aslının yerini tutmasa da eserin yıpranmadan paylaşılmasını sağlar.",
    "Bu metnin ana düşüncesi aşağıdakilerden hangisidir?",
    [
      "Yazma eserlerin tamamı yalnızca müzelerde sergilenmelidir.",
      "Dijitalleştirme, hassas eserleri korurken bilgiye erişimi kolaylaştırır.",
      "Dijital kopyalar her bakımdan özgün eserlerden daha değerlidir.",
      "Eski eserlerin kâğıtları günümüz kâğıtlarından daha sağlamdır."
    ],
    "B",
    "Metin, dijital kopyaların özgün eseri yıpranmaktan koruduğunu ve erişimi artırdığını vurgulamaktadır."
  ),
  makeGrade6ReviewQuestion(
    "review6-063",
    "Yardımcı düşünce",
    "Orta",
    "Bir odadaki yankıyı azaltmak için yalnız duvarları kalınlaştırmak gerekmez. Halı, perde ve kumaş kaplı mobilyalar ses dalgalarının bir bölümünü soğurur. Boş ve sert yüzeylerin fazla olduğu odalarda ise ses daha çok yansır. Konser salonlarında kullanılan özel paneller, sesi bütünüyle yok etmek yerine dinleyicilere dengeli biçimde ulaşmasını sağlayacak şekilde yerleştirilir.",
    "Bu metinden aşağıdakilerin hangisine ulaşılamaz?",
    [
      "Sert yüzeylerin sesi daha fazla yansıtabildiğine",
      "Kumaş malzemelerin yankıyı azaltmaya yardım ettiğine",
      "Konser salonlarındaki panellerin ses dağılımını düzenlediğine",
      "Yankıyı önlemenin tek yolunun duvarları kalınlaştırmak olduğuna"
    ],
    "D",
    "Metin, duvarları kalınlaştırma dışında da yankıyı azaltan yöntemler bulunduğunu belirtmektedir."
  ),
  makeGrade6ReviewQuestion(
    "review6-064",
    "Konu ve başlık",
    "Orta",
    "Bir yemeğin tarifi kuşaktan kuşağa aktarılırken bazen ölçüler, bazen kullanılan araçlar değişir. Buna rağmen tarifteki temel yöntem ve yemeğin çevresinde oluşan gelenekler yaşamaya devam eder. Bayramda birlikte açılan hamur ya da kış için imeceyle hazırlanan yiyecekler, yalnız karın doyurmaz; aile ve mahalle hafızasını da taşır.",
    "Bu metne getirilebilecek en uygun başlık aşağıdakilerden hangisidir?",
    [
      "Mutfak Araçlarının Gelişimi",
      "Sağlıklı Beslenmenin Kuralları",
      "Tariflerde Ölçü Kullanımı",
      "Kültürü Yaşatan Tarifler"
    ],
    "D",
    "Metin, yemek tariflerinin gelenekleri ve ortak hafızayı kuşaktan kuşağa taşımasını anlatmaktadır."
  ),
  makeGrade6ReviewQuestion(
    "review6-065",
    "Paragraf tamamlama",
    "Orta",
    "Bir tiyatro oyunu için kostüm hazırlayan tasarımcı, yalnız güzel görünen giysiler çizmez. Oyunun geçtiği dönemi, karakterin yaşını, mesleğini ve hareketlerini araştırır. Koşması gereken bir oyuncunun ağır bir giysi içinde rahat edemeyeceğini de hesaba katar. Bu bakımdan sahne kostümü - - - -",
    "Bu metin düşüncenin akışına göre aşağıdakilerden hangisiyle tamamlanmalıdır?",
    [
      "görünüşün yanında karaktere ve oyunun koşullarına da uygun olmalıdır.",
      "her oyunda aynı kumaş ve renklerden hazırlanmalıdır.",
      "yalnız seyircinin dikkatini çekmek amacıyla tasarlanmalıdır.",
      "oyuncunun hareketlerini sınırlandıracak kadar ağır olmalıdır."
    ],
    "A",
    "Metin, kostümün güzel görünmesinin yanı sıra karaktere, döneme ve oyuncunun hareketlerine uygun olması gerektiğini anlatır."
  ),
  makeGrade6ReviewQuestion(
    "review6-066",
    "Düşüncenin akışını bozan cümle",
    "Orta",
    "(I) Mağaralardaki sarkıtlar, tavandan damlayan mineralli suların bıraktığı maddelerin birikmesiyle oluşur. (II) Bu oluşum her yıl çok küçük bir miktarda gerçekleştiği için sarkıtların büyümesi uzun zaman alır. (III) Ziyaretçilerin sarkıtlara dokunması yüzeyde yağ tabakası bırakarak doğal gelişimi etkileyebilir. (IV) Dağcılıkta kullanılan ipler farklı kalınlıklarda üretilir. (V) Bu nedenle mağaralarda belirlenen yürüyüş yollarının dışına çıkılmaması önemlidir.",
    "Numaralanmış cümlelerden hangisi metnin anlam bütünlüğünü bozmaktadır?",
    ["II", "IV", "V", "III"],
    "B",
    "IV. cümle mağara oluşumlarının korunmasından uzaklaşıp dağcılık iplerine geçmektedir."
  ),
  makeGrade6ReviewQuestion(
    "review6-067",
    "Paragrafta sıralama",
    "Zor",
    "I. Liste tamamlanınca eksik malzemeler yenilendi ve çanta kolay ulaşılacak bir yere kondu. II. Aile üyeleri, acil durum çantasında bulunması gerekenleri birlikte belirledi. III. Altı ay sonra aynı kontrolü yapmak için takvime hatırlatma eklendi. IV. Su, fener, pil, ilk yardım malzemesi ve kişisel ilaçların son kullanma tarihleri kontrol edildi.",
    "Numaralanmış cümlelerle anlamlı bir paragraf oluşturulduğunda sıralama nasıl olur?",
    ["IV-II-I-III", "II-I-IV-III", "I-III-II-IV", "II-IV-I-III"],
    "D",
    "Önce ihtiyaçlar belirlenir (II), malzemeler kontrol edilir (IV), eksikler tamamlanır (I) ve sonraki kontrol planlanır (III)."
  ),
  makeGrade6ReviewQuestion(
    "review6-068",
    "Dil ve anlatım",
    "Orta",
    "Gece boyunca yağan kar, köyün dar yollarını beyaz bir nehre çevirmişti. Sabah kapısını açan Hasan Amca, bacalardan yükselen dumanın gökyüzüne ağır ağır tırmandığını gördü. Ayaklarının altında kar, ince camlar kırılıyormuş gibi çıtırdıyordu. Uzak tepeler sessizce köyü seyrediyor, güneş karların üzerinde küçük kıvılcımlar yakıyordu.",
    "Bu metnin dil ve anlatımıyla ilgili aşağıdakilerden hangisi söylenemez?",
    [
      "Benzetmeden yararlanılmıştır.",
      "İşitme ve görme duyularına seslenilmiştir.",
      "Nesnel bir tanım yapılarak teknik bilgiler verilmiştir.",
      "İnsana ait özellikler doğadaki varlıklara aktarılmıştır."
    ],
    "C",
    "Metin teknik bilgi veren nesnel bir tanım değil, sanatlı ve duyusal bir betimlemedir."
  ),
  makeGrade6ReviewQuestion(
    "review6-069",
    "Anlatım biçimleri",
    "Orta",
    "Çiy, havadaki su buharının soğuk yüzeylerde küçük su damlalarına dönüşmesiyle oluşur. Gece hava serinlediğinde toprak, yaprak ve metal yüzeyler de soğur. Bu yüzeylere değen nemli hava yeterince soğursa içindeki su buharı yoğunlaşır. Bu nedenle çiy çoğunlukla açık ve serin gecelerin ardından sabah saatlerinde görülür.",
    "Bu metinde ağır basan anlatım biçimi aşağıdakilerden hangisidir?",
    ["Öyküleme", "Açıklama", "Tartışma", "Betimleme"],
    "B",
    "Metin, çiyin nasıl oluştuğunu nedenleriyle bilgi vererek açıkladığı için açıklayıcıdır."
  ),
  makeGrade6ReviewQuestion(
    "review6-070",
    "Hikâye unsurları",
    "Orta",
    "Pazar sabahı okulun spor salonunda satranç turnuvası vardı. Eylül, son maçta kendisinden daha deneyimli bir oyuncuyla karşılaşacağını öğrenince heyecanlandı. Maç başlamadan önce derin bir nefes aldı, önceki karşılaşmalarda aceleyle yaptığı hamleleri düşündü. Bu kez süreyi dikkatli kullanmaya ve her hamleden önce rakibinin planını anlamaya karar verdi.",
    "Bu metindeki kahramanın amacı aşağıdakilerden hangisidir?",
    [
      "Önceki hatalarından yararlanarak son maçı dikkatli oynamak",
      "Turnuvadan ayrılıp başka bir etkinliğe katılmak",
      "Rakibinin bütün hamlelerini ezberlemek",
      "Satranç maçının süresini değiştirmek"
    ],
    "A",
    "Eylül, önceki aceleci hamlelerini düşünüp son maçta süreyi ve rakibinin planını dikkatle değerlendirmeyi amaçlamaktadır."
  ),
  makeGrade6ReviewQuestion(
    "review6-071",
    "Metin karşılaştırma",
    "Zor",
    "I. metin: Kuruyan bir gölün çevresine yalnız su taşımak kalıcı çözüm olmayabilir. Gölü besleyen derelerin önü açılmalı, çevredeki aşırı su kullanımı azaltılmalı ve doğal bitki örtüsü korunmalıdır.\n\nII. metin: Zarar gören bir ormana yalnız fidan dikmek yeterli değildir. Bölgeye uygun türler seçilmeli, toprağın su tutma gücü geliştirilmeli ve genç fidanlar büyüyene kadar alan düzenli izlenmelidir.",
    "Bu iki metnin ortak yönü aşağıdakilerden hangisidir?",
    [
      "Doğal alanların kendiliğinden kısa sürede yenilendiğini savunmaları",
      "Bütün çevre sorunlarının tek bir işlemle çözülebileceğini söylemeleri",
      "İnsanların doğal alanlara hiç yaklaşmaması gerektiğini belirtmeleri",
      "Doğayı iyileştirmenin birbiriyle bağlantılı ve sürekli çalışmalar gerektirdiğini vurgulamaları"
    ],
    "D",
    "Her iki metin de tek bir müdahalenin yetmeyeceğini, bağlantılı önlemler ve izleme gerektiğini anlatır."
  ),
  makeGrade6ReviewQuestion(
    "review6-072",
    "Çıkarım yapma",
    "Orta",
    "Kütüphanedeki bazı kitapların sayfaları sık kullanımdan dolayı gevşemişti. Görevli, öğrencilerle bir bakım günü düzenledi. Önce küçük hasarlı kitaplar ayrıldı; uygun bant ve yapıştırıcılarla onarıldı. Çok zarar görenler ise uzman ciltçiye gönderildi. Etkinlikten sonra öğrenciler, kitapları raftan çekerken sırt kısmına zarar vermemeye daha çok dikkat etmeye başladı.",
    "Bu metinden aşağıdakilerin hangisi çıkarılabilir?",
    [
      "Kütüphanedeki bütün kitaplar kullanımdan kaldırılmıştır.",
      "Öğrencilerin kitap bakımına katılması, onları daha dikkatli kullanmaya yöneltmiştir.",
      "Hasarlı kitapların tamamı öğrenciler tarafından onarılmıştır.",
      "Kitapların zarar görmesinin tek nedeni rafların dar olmasıdır."
    ],
    "B",
    "Bakım etkinliğinden sonra öğrencilerin kitapları daha özenli kullanması, katılımın davranışlarını etkilediğini gösterir."
  ),
  makeGrade6ReviewQuestion(
    "review6-073",
    "Ana fikir",
    "Orta",
    "Bir resmi incelerken ilk bakışta büyük ve parlak biçimler dikkatimizi çeker. Oysa sanatçı bazen asıl ipucunu köşedeki küçük bir nesneye, karakterlerin bakış yönüne ya da arka plandaki renk değişimine yerleştirir. Resme biraz zaman ayırıp ayrıntılar arasında ilişki kuran kişi, ilk anda fark etmediği bir öyküyü keşfedebilir.",
    "Bu metnin ana düşüncesi aşağıdakilerden hangisidir?",
    [
      "Bir sanat eserini anlamak için ayrıntıları dikkatle incelemek gerekir.",
      "Resimlerde yalnız parlak renkler kullanılmalıdır.",
      "Her resim aynı öyküyü anlatır.",
      "Küçük nesneler resmin bütününden daha önemlidir."
    ],
    "A",
    "Metin, resimdeki anlamı kavramak için ilk izlenimle yetinmeyip ayrıntılar arasında ilişki kurulmasını vurgular."
  ),
  makeGrade6ReviewQuestion(
    "review6-074",
    "Yardımcı düşünce",
    "Orta",
    "Deniz fenerleri, kıyıya yaklaşan gemilere tehlikeli kayalıkların ve liman girişinin yerini gösterir. Her fenerin ışık yanıp sönme düzeni farklı olabilir; denizciler haritalardaki bilgilerle bu düzeni karşılaştırarak hangi feneri gördüklerini anlar. Günümüzde elektronik yön bulma sistemleri yaygınlaşsa da fenerler yedek bir işaret ve kıyı simgesi olarak önemini sürdürmektedir.",
    "Bu metinde deniz fenerleriyle ilgili aşağıdakilerin hangisine değinilmemiştir?",
    [
      "Gemilere kıyıdaki tehlikeler konusunda yol gösterdiğine",
      "Işık düzenlerinin birbirinden farklı olabildiğine",
      "Yapımında kullanılan taşların hangi bölgeden getirildiğine",
      "Yeni teknolojilere rağmen kullanılmaya devam ettiğine"
    ],
    "C",
    "Metinde deniz fenerlerinin yapımında kullanılan taşların kaynağı hakkında bilgi yoktur."
  ),
  makeGrade6ReviewQuestion(
    "review6-075",
    "Konu ve başlık",
    "Orta",
    "Tohum paylaşım gününde üreticiler, yıllardır yetiştirdikleri yerel sebze ve tahılların tohumlarını birbirleriyle değiştiriyor. Her paketin üzerine bitkinin yetiştiği yer, ekim zamanı ve dikkat edilmesi gereken özellikler yazılıyor. Böylece yalnız tohumlar değil, onları yetiştirme bilgisi de el değiştiriyor; bölgeye uyum sağlamış çeşitlerin kaybolmasının önüne geçiliyor.",
    "Bu metne verilebilecek en uygun başlık aşağıdakilerden hangisidir?",
    [
      "Tarlada Kullanılan Makineler",
      "Sebzelerin Pişirilme Yöntemleri",
      "Tohumla Birlikte Paylaşılan Bilgi",
      "Paket Tasarımının Önemi"
    ],
    "C",
    "Metin, yerel tohumlarla birlikte yetiştirme bilgisinin de paylaşılmasını anlatmaktadır."
  ),
  makeGrade6ReviewQuestion(
    "review6-076",
    "Paragraf tamamlama",
    "Orta",
    "Bir söyleşiye başlamadan önce konuğa sorulacak soruları hazırlamak önemlidir. Ancak konuk, verdiği bir cevapla daha önce düşünülmemiş bir ayrıntının kapısını aralayabilir. Söyleşiyi yapan kişi yalnızca listesindeki sorulara bağlı kalırsa bu ayrıntıyı gözden kaçırır. Bu nedenle ----",
    "Bu metin düşüncenin akışına göre aşağıdakilerden hangisiyle tamamlanmalıdır?",
    [
      "söyleşi sırasında bütün cevaplar kısa tutulmalıdır.",
      "konuğa yalnız önceden bilinen konular sorulmalıdır.",
      "hazırlanan sorular görüşmeden hemen önce değiştirilmelidir.",
      "iyi bir söyleşi, hazır sorular kadar verilen cevapların izini sürmeyi de gerektirir."
    ],
    "D",
    "Metinde hazırlığın gerekli olduğu ancak cevaplardan doğan yeni ayrıntıların da izlenmesi gerektiği anlatılmaktadır."
  ),
  makeGrade6ReviewQuestion(
    "review6-077",
    "Düşüncenin akışını bozan cümle",
    "Orta",
    "(I) Kentteki kuş türlerini belirlemek isteyen öğrenciler, gözlem yapacakları parkları harita üzerinde işaretledi. (II) Her grup, gördüğü kuşun özelliklerini ve gözlem saatini aynı tabloya kaydetti. (III) Teleskopların mercekleri, uzak gök cisimlerini daha ayrıntılı görmemizi sağlar. (IV) Aynı kuşun iki kez sayılmaması için gruplar farklı yollar izledi. (V) Çalışmanın sonunda elde edilen veriler birleştirilerek parkta yaşayan kuşların listesi oluşturuldu.",
    "Bu metinde numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?",
    [
      "II",
      "III",
      "IV",
      "V"
    ],
    "B",
    "III. cümlede teleskop merceklerinden söz edilirken diğer cümleler parktaki kuş gözlemi çalışmasını anlatmaktadır."
  ),
  makeGrade6ReviewQuestion(
    "review6-078",
    "Paragrafta sıralama",
    "Orta",
    "I. Bir ay boyunca aynı saatlerde yaptığı gözlemleri çizelgeye kaydetti.\nII. Elif, Ay'ın görünüşünün günler içinde nasıl değiştiğini merak etti.\nIII. Sonunda çizimlerini tarih sırasına koyarak Ay'ın evrelerini gösteren bir pano hazırladı.\nIV. Bunun için gökyüzünün açık olduğu akşamlarda Ay'ı çizdi.",
    "Numaralanmış cümlelerle anlamlı bir metin oluşturulduğunda doğru sıralama aşağıdakilerden hangisi olur?",
    [
      "II - IV - I - III",
      "IV - II - III - I",
      "II - I - IV - III",
      "I - III - II - IV"
    ],
    "A",
    "Önce merak edilen konu belirtilir, ardından yöntem ve kayıt süreci anlatılır; pano hazırlama sonuç cümlesidir."
  ),
  makeGrade6ReviewQuestion(
    "review6-079",
    "Dil ve anlatım",
    "Zor",
    "Araştırmacılar, okul bahçesindeki üç farklı bölgenin toprak sıcaklığını bir hafta boyunca ölçtü. Ağaçların gölgelediği alanda öğle sıcaklığı ortalama 21 dereceyken taş döşeli bölümde 29 derece olarak kaydedildi. Çimlerin bulunduğu alandaki değer ise 24 dereceydi. Bu sonuçlar, yüzey türünün çevresindeki sıcaklığı etkileyebildiğini gösterdi.",
    "Bu metnin dil ve anlatımıyla ilgili aşağıdakilerden hangisi söylenemez?",
    [
      "Sayısal verilerden yararlanılmıştır.",
      "Karşılaştırmaya başvurulmuştur.",
      "Hayalî ögelere dayalı öznel bir anlatım kullanılmıştır.",
      "Bir araştırmanın sonucu açıklanmıştır."
    ],
    "C",
    "Metin ölçüm sonuçlarına dayanan nesnel bir anlatıma sahiptir; hayalî ve öznel bir anlatım kullanılmamıştır."
  ),
  makeGrade6ReviewQuestion(
    "review6-080",
    "Anlatım biçimleri",
    "Zor",
    "Bazıları sesli kitap dinlemenin gerçek bir okuma deneyimi sayılamayacağını düşünüyor. Oysa bir metni anlamlandırmak yalnız gözlerle harfleri izlemekten ibaret değildir. Dinleyici de olaylar arasında bağ kurar, anlatıcının vurgularını değerlendirir ve zihninde görüntüler oluşturur. Elbette basılı kitapla sesli kitabın sunduğu deneyimler aynı değildir; fakat bu farklılık, birini değersiz kılmaz.",
    "Bu metinde ağır basan anlatım biçimi aşağıdakilerden hangisidir?",
    [
      "Betimleme",
      "Öyküleme",
      "Açıklama",
      "Tartışma"
    ],
    "D",
    "Yazar, sesli kitapla ilgili bir görüşe karşı çıkarak kendi düşüncesini gerekçeleriyle savunmuştur."
  ),
  makeGrade6ReviewQuestion(
    "review6-081",
    "Hikâye unsurları",
    "Orta",
    "Cumartesi sabahı eski çarşının dar sokağına giren Duru, elindeki kırık saati avucunda sıkıca tutuyordu. Dedesi bu saati yıllar önce ona vermişti. Dükkânın önündeki ahşap tabelayı görünce hızlandı. Saat ustası, büyüteçli gözlüğünü takıp kapağı açtı ve gülümseyerek 'Sanırım onu yeniden çalıştırabiliriz.' dedi. Duru, duyduğu sözle derin bir nefes aldı.",
    "Bu metindeki olayın gerçekleştiği yer aşağıdakilerden hangisidir?",
    [
      "Eski çarşıdaki saatçi dükkânı",
      "Duru'nun dedesinin evi",
      "Bir okulun teknoloji sınıfı",
      "Şehir müzesinin sergi salonu"
    ],
    "A",
    "Dar sokak, ahşap tabela ve saat ustası ayrıntıları olayın eski çarşıdaki saatçi dükkânında geçtiğini göstermektedir."
  ),
  makeGrade6ReviewQuestion(
    "review6-082",
    "Metin karşılaştırma",
    "Zor",
    "I. Bir türkü, söylendiği yörenin yaşayışını, sevincini ve özlemini ezgilerle bugüne taşır. Söyleyen kişi değişse de türkünün içinde geçmiş kuşakların sesi duyulur.\n\nII. Sözlü olarak anlatılan bir halk hikâyesi, her anlatıcıyla küçük değişikliklere uğrar. Buna rağmen ait olduğu toplumun değerlerini ve ortak hatıralarını yeni kuşaklara ulaştırır.",
    "Bu iki metnin ortak yönü aşağıdakilerden hangisidir?",
    [
      "Yalnızca yazılı kaynaklarla günümüze ulaşmaları",
      "Her aktarıldıklarında bütünüyle değişmeleri",
      "Toplumun kültürel belleğini kuşaklar arasında taşımaları",
      "Sadece eğlence amacıyla ortaya çıkmaları"
    ],
    "C",
    "Her iki metinde de kültürel değerlerin ve geçmişe ait izlerin yeni kuşaklara aktarılması vurgulanmıştır."
  ),
  makeGrade6ReviewQuestion(
    "review6-083",
    "Çıkarım yapma",
    "Orta",
    "Okul kantininde tek kullanımlık kapların sayısını azaltmak için çorba ve içecekler yıkanabilir kaplarda sunulmaya başlandı. Öğrenciler kabı alırken küçük bir ücret ödüyor, boş kabı teslim ettiklerinde bu ücreti geri alıyordu. İlk ayın sonunda çöpe atılan bardak ve kâse sayısının önceki aya göre belirgin biçimde azaldığı görüldü.",
    "Bu metinden aşağıdakilerin hangisi çıkarılabilir?",
    [
      "Öğrenciler kantinden yiyecek almayı bırakmıştır.",
      "Geri ödeme uygulaması, yeniden kullanılabilir kapların geri getirilmesini teşvik etmiştir.",
      "Kantindeki bütün ürünlerin fiyatı düşürülmüştür.",
      "Tek kullanımlık kaplar okulda tamamen yasaklanmıştır."
    ],
    "B",
    "Kabı teslim edene ücretin geri verilmesi ve atık miktarının azalması, uygulamanın iadeyi teşvik ettiğini gösterir."
  ),
  makeGrade6ReviewQuestion(
    "review6-084",
    "Ana fikir",
    "Orta",
    "Bir metni hızlı bitirmek her zaman iyi okumak anlamına gelmez. Okur, anlamını bilmediği kelimeleri geçip düşünceler arasındaki bağlantıları kurmadan ilerlediğinde sayfaları tamamlar fakat metni zihninde bütünleştiremez. Gerektiğinde yavaşlamak, önemli yerlerde durup düşünmek ve önceki bölümlere dönmek okumanın doğal parçalarıdır.",
    "Bu metnin ana düşüncesi aşağıdakilerden hangisidir?",
    [
      "Her metin aynı hızla okunmalıdır.",
      "Uzun metinler yalnızca birkaç kez okununca anlaşılır.",
      "Bilinmeyen kelimeler metnin anlaşılmasını her zaman engeller.",
      "Nitelikli okuma, hızdan çok anlamaya göre okuma sürecini düzenlemeyi gerektirir."
    ],
    "D",
    "Metin, okuma hızının anlama ihtiyacına göre ayarlanması ve gerektiğinde durup düşünülmesi gerektiğini vurgulamaktadır."
  ),
  makeGrade6ReviewQuestion(
    "review6-085",
    "Yardımcı düşünce",
    "Orta",
    "İpek böceğinin yaşamı, dut yapraklarıyla beslenen küçük bir larva olarak başlar. Büyüdükçe birkaç kez deri değiştirir. Yeterince geliştiğinde salgıladığı ince ipliği çevresine dolayarak koza örer. Bu kozanın içinde geçirdiği değişimin ardından kelebek hâline gelir. Uygun koşullarda bir kozanın ipliği yüzlerce metre uzunluğa ulaşabilir.",
    "Bu metinde ipek böceğiyle ilgili aşağıdakilerin hangisine değinilmemiştir?",
    [
      "Beslendiği yaprağa",
      "Koza örme biçimine",
      "Dünyada en çok yetiştirildiği bölgeye",
      "Yaşamı boyunca geçirdiği değişime"
    ],
    "C",
    "Metinde ipek böceğinin en çok yetiştirildiği bölge hakkında bilgi verilmemiştir."
  ),
  makeGrade6ReviewQuestion(
    "review6-086",
    "Konu ve başlık",
    "Zor",
    "Arkeologlar, kıyıya yakın bir batığı incelerken önce su altındaki alanın ayrıntılı haritasını çıkarır. Buluntular hemen yerinden kaldırılmaz; konumları fotoğraflanır ve ölçülür. Sudan çıkarılan ahşap, seramik ya da metal parçalar özel yöntemlerle korunur. Çünkü yüzyıllarca su altında kalan bir nesne, havayla karşılaştığında kısa sürede zarar görebilir.",
    "Bu metne getirilebilecek en uygun başlık aşağıdakilerden hangisidir?",
    [
      "Suyun Altındaki Geçmiş",
      "Kıyıda Tatil Hazırlığı",
      "Gemilerin Yolculuk Süresi",
      "Deniz Canlılarını Koruma"
    ],
    "A",
    "Metin, su altındaki tarihî buluntuların incelenmesi ve korunması sürecini anlatmaktadır."
  ),
  makeGrade6ReviewQuestion(
    "review6-087",
    "Paragraf tamamlama",
    "Orta",
    "Bilimsel bir çizimde amaç, nesneyi olduğundan daha güzel göstermek değildir. Çizer; yaprağın damarlarını, böceğin kanat yapısını ya da kayanın yüzeyindeki çatlakları dikkatle inceler. Gereksiz ayrıntıları ayıklarken araştırma için önemli özellikleri doğru oranlarla gösterir. Bu bakımdan bilimsel çizim ----",
    "Bu metin düşüncenin akışına göre aşağıdakilerden hangisiyle tamamlanmalıdır?",
    [
      "yalnızca ressamların anlayabileceği işaretlerden oluşur.",
      "gözlem ile bilgiyi anlaşılır bir görüntüde buluşturur.",
      "fotoğraf çekmenin mümkün olduğu her durumda gereksizdir.",
      "çizilen nesnenin bütün ayrıntılarını aynı ölçüde öne çıkarır."
    ],
    "B",
    "Parçada bilimsel çizimin dikkatli gözleme dayanarak önemli bilgileri doğru ve anlaşılır biçimde gösterdiği anlatılmaktadır."
  ),
  makeGrade6ReviewQuestion(
    "review6-088",
    "Düşüncenin akışını bozan cümle",
    "Orta",
    "(I) Bilim insanları bir buzulun yıllar içindeki değişimini anlamak için aynı noktalardan düzenli görüntüler alır. (II) Buzulun kenarına yerleştirilen ölçüm araçları, erime ve hareket hızına ilişkin veriler toplar. (III) Uydu görüntüleri de geniş alanlardaki değişimi karşılaştırmayı kolaylaştırır. (IV) Dağ yürüyüşlerinde su geçirmeyen giysiler taşımak önemlidir. (V) Farklı yöntemlerden elde edilen bulgular bir araya getirildiğinde buzulun değişimi daha güvenilir biçimde izlenir.",
    "Bu metinde numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?",
    [
      "I",
      "II",
      "III",
      "IV"
    ],
    "D",
    "IV. cümle dağ yürüyüşü giysileriyle ilgilidir; diğer cümlelerde buzulların bilimsel olarak izlenmesi anlatılmaktadır."
  ),
  makeGrade6ReviewQuestion(
    "review6-089",
    "Paragrafta sıralama",
    "Zor",
    "I. Seçilen çalışmaların yanına, ziyaretçiye bilgi verecek kısa açıklamalar yazıldı.\nII. Öğrenciler, dönem sonunda açacakları serginin temasını 'Mahallemizin Renkleri' olarak belirledi.\nIII. Son olarak resimler salondaki ışık ve duvarların genişliği dikkate alınarak yerleştirildi.\nIV. Ardından bu temaya uygun resimler arasından bir seçki oluşturuldu.",
    "Numaralanmış cümlelerle anlamlı bir metin oluşturulduğunda doğru sıralama aşağıdakilerden hangisi olur?",
    [
      "IV - II - III - I",
      "II - I - IV - III",
      "II - IV - I - III",
      "I - III - II - IV"
    ],
    "C",
    "Önce tema belirlenir, sonra eserler seçilir, açıklamalar hazırlanır ve son olarak yerleştirme yapılır."
  ),
  makeGrade6ReviewQuestion(
    "review6-090",
    "Dil ve anlatım",
    "Zor",
    "Akşam çökerken çarşının bakır dükkânları birer birer ışıklandı. Çekiçlerin düzenli sesi taş duvarlara çarpıp sokağın öbür ucuna kadar uzanıyordu. Tezgâhlardan yükselen sıcak metal kokusuna, köşedeki fırından gelen taze ekmek kokusu karıştı. Dar sokak, gün boyu sakladığı bütün sesleri ve kokuları aynı anda dışarı bırakmış gibiydi.",
    "Bu metnin dil ve anlatımıyla ilgili aşağıdakilerden hangisi söylenemez?",
    [
      "Birden fazla duyuya seslenen ayrıntılara yer verilmiştir.",
      "Bir kavram, bilimsel ve nesnel tanımlarla açıklanmıştır.",
      "Betimleyici ögeler kullanılmıştır.",
      "İnsan dışındaki bir varlığa insana özgü özellik verilmiştir."
    ],
    "B",
    "Metin sanatsal ve betimleyici bir anlatıma sahiptir; bilimsel tanımlara yer verilmemiştir."
  ),
  makeGrade6ReviewQuestion(
    "review6-091",
    "Anlatım biçimleri",
    "Orta",
    "Kanyonun tabanında ince bir dere, gri kayaların arasından gümüş bir şerit gibi kıvrılıyordu. Yüksek duvarların bazı yerleri yosunla kaplıydı; güneş yalnız öğle saatlerinde dar aralıktan süzülüp suyun üzerine düşüyordu. Serin hava, ıslak taş kokusunu vadinin içine yayıyordu.",
    "Bu metinde ağır basan anlatım biçimi aşağıdakilerden hangisidir?",
    [
      "Betimleme",
      "Tartışma",
      "Açıklama",
      "Öyküleme"
    ],
    "A",
    "Kanyonun görünüşü farklı duyulara seslenen ayrıntılarla okuyucunun zihninde canlandırılmıştır."
  ),
  makeGrade6ReviewQuestion(
    "review6-092",
    "Ana fikir",
    "Zor",
    "Müzede görme güçlüğü yaşayan ziyaretçiler için bazı eserlerin kabartmalı kopyaları hazırlandı. Eser açıklamaları sesli olarak dinlenebilir hâle getirildi, salonların zeminine yönlendirici yüzeyler eklendi. Bu düzenlemelerden çocuklar ve yaşlı ziyaretçiler de yararlandı. Böylece erişilebilirlik için yapılan bir çalışmanın, müzeyi herkes açısından daha anlaşılır ve rahat bir yere dönüştürdüğü görüldü.",
    "Bu metnin ana düşüncesi aşağıdakilerden hangisidir?",
    [
      "Müzelerde yalnızca tarihî eserler sergilenmelidir.",
      "Sesli açıklamalar yazılı açıklamalardan her zaman daha etkilidir.",
      "Müze ziyaretleri yalnız kalabalık gruplarla yapılmalıdır.",
      "Erişilebilirlik düzenlemeleri, farklı ziyaretçilerin müze deneyimini iyileştirir."
    ],
    "D",
    "Metinde farklı ihtiyaçlar için yapılan düzenlemelerin müzeyi birçok ziyaretçi açısından daha kullanışlı kıldığı vurgulanmaktadır."
  ),
  makeGrade6ReviewQuestion(
    "review6-093",
    "Yardımcı düşünce",
    "Orta",
    "Botanik bahçesindeki bitkilerin önünde yalnızca adlarının yazdığı levhalar bulunmaz. Bu levhalarda bitkinin doğal olarak yetiştiği bölge, su ihtiyacı ve çiçeklenme dönemi de belirtilir. Bazı levhalardaki karekodlar, bitkinin mevsimlere göre değişen görüntülerine ulaşmayı sağlar. Ziyaretçiler böylece karşılarındaki bitkiyi yılın farklı zamanlarıyla birlikte tanıyabilir.",
    "Bu metinde botanik bahçesindeki levhalarla ilgili aşağıdakilerin hangisine değinilmemiştir?",
    [
      "Bitkinin yetiştiği bölge hakkında bilgi verdiğine",
      "Levhaların hazırlanma maliyetine",
      "Bazılarında karekod bulunduğuna",
      "Bitkinin su ihtiyacını gösterdiğine"
    ],
    "B",
    "Metinde levhaların maliyetiyle ilgili herhangi bir bilgi verilmemiştir."
  ),
  makeGrade6ReviewQuestion(
    "review6-094",
    "Konu ve başlık",
    "Zor",
    "Bir tiyatro salonunda oyuncunun sesi yalnız yüksek çıkmasıyla her koltuğa anlaşılır biçimde ulaşmaz. Duvarların biçimi, tavanın yüksekliği ve kullanılan kaplama malzemeleri sesin yayılmasını etkiler. Sert yüzeylerin oluşturduğu fazla yankı konuşmaları anlaşılmaz kılabilir; sesi gereğinden çok emen yüzeylerse arka sıraların duymasını zorlaştırabilir. Bu nedenle salon tasarlanırken sesin dengeli dağılması amaçlanır.",
    "Bu metne getirilebilecek en uygun başlık aşağıdakilerden hangisidir?",
    [
      "Tiyatroda Kostüm Seçimi",
      "Oyuncuların Sahne Heyecanı",
      "Salon Tasarımında Ses Dengesi",
      "Tiyatro Biletlerinin Hazırlanması"
    ],
    "C",
    "Metin, tiyatro salonunun yapısının sesin dengeli ve anlaşılır biçimde yayılmasına etkisini ele almaktadır."
  ),
  makeGrade6ReviewQuestion(
    "review6-095",
    "Paragraf tamamlama",
    "Zor",
    "Bir ağacın gövdesindeki halkalar yalnızca yaşını göstermez. Yağışlı ve elverişli yıllarda oluşan halkalar daha geniş, kurak yıllarda oluşanlar daha dar olabilir. Bilim insanları aynı bölgede yaşamış farklı ağaçların halkalarını karşılaştırarak geçmişteki iklim koşulları hakkında bilgi edinir. Buna göre ağaç halkaları ----",
    "Bu metin düşüncenin akışına göre aşağıdakilerden hangisiyle tamamlanmalıdır?",
    [
      "geçmiş çevre koşullarını anlamaya yardım eden doğal kayıtlar gibidir.",
      "bütün ağaçlarda aynı genişlikte oluşur.",
      "yalnızca ağacın boyunu hesaplamak için kullanılır.",
      "yağış miktarından etkilenmeden gelişir."
    ],
    "A",
    "Halkaların genişliği geçmişteki iklim koşullarıyla ilgili bilgi taşıdığı için doğal bir kayıt niteliğindedir."
  ),
  makeGrade6ReviewQuestion(
    "review6-096",
    "Düşüncenin akışını bozan cümle",
    "Orta",
    "(I) Okulun çatısına yerleştirilen güneş panelleri, güneş ışığını elektrik enerjisine dönüştürüyor. (II) Üretilen enerji miktarı girişteki ekrandan gün boyunca izlenebiliyor. (III) Öğrenciler, hava durumuyla üretim miktarı arasındaki ilişkiyi bu veriler üzerinden inceliyor. (IV) Spor salonunun zemini yaz tatilinde yenilenerek çizgileri tekrar boyandı. (V) Proje, enerji üretmenin yanında öğrencilerin yenilenebilir enerji konusunda gözlem yapmasına da imkân sağlıyor.",
    "Bu metinde numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?",
    [
      "I",
      "II",
      "III",
      "IV"
    ],
    "D",
    "IV. cümlede spor salonunun zemini anlatılırken diğer cümlelerde güneş panelleri ve bunların eğitimde kullanımı ele alınmıştır."
  ),
  makeGrade6ReviewQuestion(
    "review6-097",
    "Dil ve anlatım",
    "Orta",
    "Yağmurdan kaçarken kendimi küçük kütüphanenin kapısında buldum. İçeri girince eski kitapların kokusu ve kaloriferin sıcaklığı beni karşıladı. Cam kenarındaki koltuğa oturup rastgele seçtiğim kitabı açtım. Dışarıdaki damlalar cama vurdukça sayfaların sesi onlara eşlik ediyor gibiydi. Birkaç dakika geçirmek için girdiğim bu yerde zamanın nasıl ilerlediğini fark etmedim.",
    "Bu metnin dil ve anlatımıyla ilgili aşağıdakilerden hangisi söylenemez?",
    [
      "Olaylar oluş sırasına göre anlatılmıştır.",
      "Birden fazla duyuyla ilgili ayrıntıya yer verilmiştir.",
      "Üçüncü kişi ağzıyla anlatım yapılmıştır.",
      "Benzetmeye başvurulmuştur."
    ],
    "C",
    "Metinde 'kendimi buldum, oturdum, fark etmedim' ifadeleri kullanıldığı için anlatım birinci kişi ağzındandır."
  ),
  makeGrade6ReviewQuestion(
    "review6-098",
    "Ana fikir",
    "Orta",
    "Mahallede kurulan eşya kütüphanesinde matkap, merdiven, kamp çadırı ve dikiş makinesi gibi sık kullanılmayan araçlar ödünç veriliyor. Üyeler ihtiyaç duydukları aracı belirli bir süre kullanıp geri getiriyor. Böylece her evin yılda birkaç kez kullanacağı eşyaları ayrı ayrı satın alması gerekmiyor; hem masraf hem de gereksiz üretim azalıyor.",
    "Bu metnin ana düşüncesi aşağıdakilerden hangisidir?",
    [
      "Nadiren kullanılan eşyaların ortaklaşa kullanılması ekonomik ve çevresel yarar sağlar.",
      "Evlerde yalnızca küçük araçlar bulundurulmalıdır.",
      "Ödünç alınan eşyalar satın alınanlardan daha dayanıklıdır.",
      "Her mahallede aynı tür araçlara ihtiyaç duyulur."
    ],
    "A",
    "Metin, seyrek kullanılan araçların paylaşılmasının satın alma ihtiyacını ve gereksiz üretimi azalttığını vurgulamaktadır."
  ),
  makeGrade6ReviewQuestion(
    "review6-099",
    "Yardımcı düşünce",
    "Zor",
    "Ahtapotlar, derilerindeki özel hücreler sayesinde renk ve desenlerini kısa sürede değiştirebilir. Bu özellik, çevrelerine uyum sağlayarak avcılardan saklanmalarına yardım eder. Bazı ahtapotların kabuk parçalarını barınak gibi kullandığı, kapalı bir kutunun kapağını açabildiği ve karşılaştığı basit sorunlara farklı çözümler ürettiği gözlemlenmiştir. Kollarındaki vantuzlar ise hem dokunmayı hem de nesneleri kavramayı sağlar.",
    "Bu metinde ahtapotlarla ilgili aşağıdakilerin hangisine değinilmemiştir?",
    [
      "Renk ve desenlerini değiştirebildiklerine",
      "Ortalama yaşam sürelerinin kaç yıl olduğuna",
      "Bazı nesneleri araç olarak kullanabildiklerine",
      "Vantuzlarının birden fazla işlev taşıdığına"
    ],
    "B",
    "Metinde ahtapotların yaşam süresiyle ilgili bilgi verilmemiştir."
  ),
  makeGrade6ReviewQuestion(
    "review6-100",
    "Dil ve anlatım",
    "Zor",
    "Yurttaş bilimi, uzman olmayan kişilerin bilimsel araştırmalara gönüllü olarak veri sağlamasıdır. Örneğin öğrenciler, yaşadıkları çevrede gördükleri kelebekleri belirli tarihlerde kaydedip araştırmacıların oluşturduğu sisteme yükleyebilir. Çok sayıda kişinin farklı bölgelerden gönderdiği bu gözlemler, türlerin yayılışındaki değişimleri incelemeye yardımcı olur.",
    "Bu metinde düşünceyi geliştirme yollarından hangileri kullanılmıştır?",
    [
      "Karşılaştırma ve tanık gösterme",
      "Sayısal verilerden yararlanma ve benzetme",
      "Tanımlama ve örneklendirme",
      "Tanık gösterme ve örneklendirme"
    ],
    "C",
    "İlk cümlede yurttaş biliminin tanımı yapılmış, sonraki cümlede öğrencilerin kelebek gözlemi örnek verilmiştir."
  )
];
