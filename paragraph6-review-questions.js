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
  )
];
