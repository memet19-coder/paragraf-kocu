(() => {
  const makeProfile = (domain, kind, subject, title, parts, main, falseClaim) => ({
    domain, kind, subject, title, parts, main, falseClaim,
    intro: parts[0], detail: parts[1], method: parts[2], effect: parts[3], limit: parts[4], extension: parts[5]
  });

  const profiles = [
    makeProfile("bilim ve çevre", "expository", "kent ağaçlarının sokak sıcaklığı üzerindeki etkisinin ölçülmesi", "Ağaç Gölgesindeki Serinlik", [
      "Yaz aylarında aynı mahalledeki iki sokak arasında belirgin sıcaklık farkları oluşabilir",
      "Geniş taçlı ağaçlar güneş ışınlarının kaldırıma doğrudan ulaşmasını azaltırken yapraklarından su buharı verir",
      "Araştırmacılar ağaçlı ve ağaçsız sokaklarda aynı saatlerde, aynı yükseklikte ölçüm yaparak sonuçları karşılaştırır",
      "Düzenli kayıtlar ağaçların gölge ve buharlaşma yoluyla çevreyi serinlettiğini ortaya koyar",
      "Yalnız bir gün yapılan ölçüm rüzgâr ve bulutluluk gibi geçici koşullardan etkilenebilir",
      "Ağaç türü, gövde aralığı ve çevredeki beton yüzey miktarı da serinleme düzeyini değiştirebilir"
    ], "Kent ağaçlarının serinletici etkisi güvenilir ve karşılaştırılabilir ölçümlerle değerlendirilebilir", "Ağaç bulunan ve bulunmayan bütün sokaklar günün her saatinde aynı sıcaklıktadır"),
    makeProfile("bilim ve çevre", "expository", "gece uçan tozlaştırıcıların bahçedeki rolü", "Gecenin Sessiz Tozlaştırıcıları", [
      "Çiçeklerin tozlaşmasına yalnız gündüz görülen böcekler katkı sağlamaz",
      "Bazı güveler akşam açan açık renkli ve kokulu çiçeklerden nektar alırken polenleri başka bitkilere taşır",
      "Araştırmacılar gece boyunca çiçekleri gözlemleyip ziyaretçi sayısını ve tohum oluşumunu kaydeder",
      "Bu gözlemler gece etkin canlıların bitkilerin çoğalmasında önemli bir payı bulunduğunu gösterir",
      "Bahçedeki güçlü ve sürekli aydınlatma bu canlıların yön bulmasını zorlaştırabilir",
      "Gece aydınlatmasını gereksiz saatlerde azaltmak hem enerji kullanımını hem de doğal yaşam üzerindeki baskıyı düşürür"
    ], "Gece etkin tozlaştırıcılar bitkilerin yaşam döngüsüne katkı sağlar ve uygun çevre koşullarına ihtiyaç duyar", "Bitkilerin tozlaşması yalnız güneşli saatlerde gerçekleşebilir"),
    makeProfile("bilim ve çevre", "expository", "gelgit havuzlarındaki canlıların dikkatli gözlenmesi", "Kayaların Arasında Küçük Bir Deniz", [
      "Deniz çekildiğinde kıyı kayalarının arasında suyla dolu küçük çukurlar kalır",
      "Bu havuzlarda yosunlar, kabuklular ve küçük deniz canlıları sıcaklık ile tuzluluktaki hızlı değişimlere uyum sağlar",
      "Gözlem yapanlar canlıları sudan çıkarmadan sayılarını, bulundukları yüzeyi ve suyun durumunu not eder",
      "Aynı havuzun farklı saatlerde incelenmesi gelgitin yaşam alanını nasıl değiştirdiğini gösterir",
      "Kayaları yerinden oynatmak ya da canlılara dokunmak hassas dengeyi bozabilir",
      "Gözlem saatinin gelgit çizelgesine göre seçilmesi hem güvenlik hem de karşılaştırılabilir veri için önemlidir"
    ], "Gelgit havuzları değişken koşullara uyum sağlayan canlıları zarar vermeden gözlemleme olanağı sunar", "Gelgit havuzlarındaki canlıları incelemek için hepsini sudan çıkarmak gerekir"),
    makeProfile("bilim ve çevre", "expository", "eğimli arazide toprak kaybının teraslarla azaltılması", "Toprağı Tutan Basamaklar", [
      "Şiddetli yağmur eğimli bir arazide hızla aşağı akarken verimli üst toprağı sürükleyebilir",
      "Yamaç boyunca oluşturulan basamak biçimli teraslar suyun hızını keser ve toprağın tutulmasına yardımcı olur",
      "Çiftçiler teras kenarlarını bitkilendirir, su çıkışlarını açık tutar ve yağmurdan sonra çatlakları kontrol eder",
      "Bakımı yapılan teraslar hem erozyonu azaltır hem de suyun toprağa süzülmesi için zaman kazandırır",
      "Eğime uygun yapılmayan veya çıkışı tıkanan bir teras su baskısına dayanamayabilir",
      "Bu yöntem arazi yapısı, yağış miktarı ve yetiştirilecek ürün birlikte değerlendirilerek planlanmalıdır"
    ], "Teraslama eğimli arazide suyu yavaşlatıp toprağı korur ancak düzenli bakım ve doğru planlama gerektirir", "Teraslar yağmur suyunun daha hızlı akmasını sağlayarak toprağı korur"),
    makeProfile("bilim ve çevre", "expository", "göçmen kuşların yapay ışıklardan etkilenmesi", "Gökyüzündeki Yol ve Şehir Işıkları", [
      "Birçok göçmen kuş gece yol alırken yıldızlardan ve doğal ışık işaretlerinden yararlanır",
      "Gökyüzüne yayılan güçlü kent ışıkları kuşların yönünü şaşırmasına ve gereksiz yere enerji harcamasına neden olabilir",
      "Uzmanlar göç dönemlerinde yüksek binalardaki gereksiz ışıkların kapatılmasını ve ışığın yere yöneltilmesini önerir",
      "Bu önlemler kuşların güvenli geçişini kolaylaştırırken elektrik tüketimini de azaltır",
      "Her ışık kaynağı aynı şiddette ve aynı yönde olmadığı için etkileri ayrı ayrı değerlendirilmelidir",
      "Göç rotalarındaki gözlem sonuçları hangi bölgelerde daha sıkı aydınlatma düzenlemesi gerektiğini gösterebilir"
    ], "Göç dönemlerinde bilinçli aydınlatma kullanımı kuşların yön bulmasını destekleyip enerji tasarrufu sağlayabilir", "Gece kullanılan şehir ışıkları göçmen kuşların yönünü hiçbir biçimde etkilemez"),
    makeProfile("bilim ve çevre", "expository", "mağara oluşumlarının ziyaretçi etkisinden korunması", "Binlerce Yılda Büyüyen Damlalar", [
      "Mağara tavanından süzülen mineralli su çok uzun zamanda sarkıt ve dikitleri oluşturur",
      "Bir kişinin eliyle dokunması bile yüzeyde yağ tabakası bırakıp yeni mineral birikimini etkileyebilir",
      "Ziyaret yolları belirlenir, hassas bölümlere yaklaşmayı engelleyen sınırlar kurulur ve içerideki nem düzenli ölçülür",
      "Denetimli ziyaret hem insanların mağarayı tanımasını hem de kırılgan oluşumların korunmasını sağlar",
      "Mağaradaki ışık ve ziyaretçi sayısı arttığında sıcaklık ile nem dengesi değişebilir",
      "Aydınlatmanın yalnız gerektiğinde açılması yüzeylerde istenmeyen yosun gelişimini de sınırlar"
    ], "Mağara oluşumları yavaş geliştiği için ziyaretler bilimsel ölçümler ve koruyucu kurallarla yönetilmelidir", "Sarkıt ve dikitlere dokunmak onların daha hızlı büyümesini sağlar"),
    makeProfile("bilim ve çevre", "expository", "evlerde oluşan gıda atığının kayıtla azaltılması", "Çöpe Gitmeden Önce", [
      "Bir evde hangi yiyeceklerin neden çöpe gittiği bilinmeden gıda atığını azaltmak güçtür",
      "Bir hafta boyunca atılan ürünün türü, miktarı ve atılma nedeni küçük bir çizelgeye yazılabilir",
      "Aile üyeleri kayıtları inceleyip fazla alınan, yanlış saklanan veya zamanında tüketilmeyen ürünleri belirler",
      "Bu bilgiler alışveriş listesini ve porsiyonları gerçek ihtiyaca göre düzenlemeyi kolaylaştırır",
      "Yalnız toplam ağırlığı bilmek atığın hangi alışkanlıktan doğduğunu açıklamayabilir",
      "Düzenli aralıklarla tekrarlanan ölçüm alınan önlemlerin işe yarayıp yaramadığını gösterir"
    ], "Gıda atığı nedenleriyle birlikte kaydedilip sonuçlara göre alışkanlıklar değiştirildiğinde azaltılabilir", "Gıda atığını azaltmak için hangi ürünün neden atıldığını bilmeye gerek yoktur"),
    makeProfile("bilim ve çevre", "expository", "sulak alanların taşkın sularını yavaşlatması", "Suyun Yayılabildiği Alan", [
      "Nehirlerin çevresindeki sulak alanlar fazla suyun kısa sürede yerleşimlere ulaşmasını engelleyebilir",
      "Yoğun bitki örtüsü akışı yavaşlatır, çukur alanlar ise suyun bir bölümünü geçici olarak depolar",
      "Uzmanlar yağış öncesi ve sonrası su düzeyini ölçüp sulak alanın ne kadar su tuttuğunu hesaplar",
      "Bu doğal alanların korunması taşkın riskini azaltırken birçok canlıya yaşam ortamı sağlar",
      "Sulak alanın doldurulması suyun yayılacağı alanı daraltarak aşağı bölgelerdeki baskıyı artırabilir",
      "Taşkın yönetiminde setler kadar nehrin doğal yayılma alanları da birlikte düşünülmelidir"
    ], "Sulak alanlar taşkın suyunu yavaşlatıp depolayan ve korunması gereken doğal güvenlik alanlarıdır", "Sulak alanların doldurulması taşkın sularının yerleşimlere ulaşmasını kesin olarak önler"),
    makeProfile("bilim ve çevre", "expository", "çamaşır yıkarken suya karışan sentetik liflerin azaltılması", "Görünmeyen Liflerin Yolculuğu", [
      "Sentetik kumaşlar yıkanırken gözle zor görülen çok küçük lifler suya karışabilir",
      "Bu liflerin bir bölümü arıtma tesislerinden geçerek akarsulara ve denizlere ulaşır",
      "Düşük sürtünmeli program seçmek, makineyi uygun dolulukta çalıştırmak ve özel filtre kullanmak lif kaybını azaltabilir",
      "Küçük önlemlerin yaygınlaşması su ortamına taşınan plastik parçacık miktarını düşürür",
      "Her kumaş aynı miktarda lif bırakmadığı için ürün yapısı ve yıkama koşulları birlikte incelenmelidir",
      "Dayanıklı giysileri uzun süre kullanmak üretim ve atık aşamalarındaki çevresel yükü de azaltır"
    ], "Sentetik lif kirliliği uygun yıkama alışkanlıkları ve filtrelerle azaltılabilecek görünmez bir çevre sorunudur", "Sentetik kumaşlardan yıkama sırasında hiçbir parçacık ayrılmaz"),
    makeProfile("bilim ve çevre", "expository", "yerel tohumların kayıtlı biçimde saklanması", "Gelecek Mevsime Ayrılan Tohum", [
      "Bir bölgede uzun yıllardır yetiştirilen bitkiler o yerin iklim ve toprak koşullarına uyum sağlamış olabilir",
      "Tohum bankaları sağlıklı örnekleri nemden korunan kaplarda saklar ve her pakete tür, yer ile tarih bilgisi ekler",
      "Saklanan tohumların çimlenme gücü belirli aralıklarla sınanır ve gerektiğinde yeni ürünlerden örnek alınır",
      "Bu çalışma tarımsal çeşitliliğin gelecek kuşaklara aktarılmasına katkı sağlar",
      "Etiketsiz bir tohumun nereden geldiği ve hangi özelliği taşıdığı sonradan belirlenemeyebilir",
      "Tohumların çiftçilerle kontrollü paylaşılması saklanan çeşitlerin yeniden tarlada yetişmesini sağlar"
    ], "Yerel tohumlar doğru bilgi, uygun saklama ve düzenli yenilemeyle korunarak yaşatılabilir", "Tohum paketlerine yer ve tarih bilgisi yazmak saklama çalışmasını gereksiz yere zorlaştırır"),

    makeProfile("kültür ve sanat", "expository", "ebru sanatında boyanın su üzerinde yönlendirilmesi", "Suyun Üstünde Açılan Desen", [
      "Ebru sanatında renkler doğrudan kâğıda değil yoğunlaştırılmış suyun yüzeyine bırakılır",
      "Usta damlaların büyüklüğünü, aralarındaki uzaklığı ve bizle verdiği yönü dikkatle ayarlar",
      "Desen tamamlandığında emici kâğıt suyun üzerine yatırılır ve renkler tek hamlede yüzeye aktarılır",
      "Bu süreç aynı malzemeler kullanılsa bile her baskıda küçük farklılıklar oluşmasına yol açar",
      "Suyun kıvamı ya da boyanın dengesi uygun değilse renkler çöker veya gereğinden fazla yayılır",
      "Geleneksel motifleri öğrenen sanatçı zamanla kendi renk ve hareket düzenini geliştirebilir"
    ], "Ebru sanatı malzeme dengesi, kontrollü hareket ve suyun doğal değişkenliğini birlikte kullanır", "Ebruda desen önceden basılmış bir kâğıdın suya batırılmasıyla çoğaltılır"),
    makeProfile("kültür ve sanat", "expository", "gölge oyununda tasvirlerin perde arkasında canlandırılması", "Perdenin Ardındaki Hareket", [
      "Gölge oyununda seyirci renkli tasvirleri değil onların aydınlatılmış perdeye düşen görüntülerini izler",
      "Tasvirlerin eklemli parçaları ince çubuklarla hareket ettirilir ve karakterin yürüdüğü ya da konuştuğu duygusu oluşturulur",
      "Hayalî, farklı kişilerin seslerini değiştirirken hareketleri konuşmanın ritmine uydurur",
      "Işık, ses ve el becerisi birleştiğinde düz tasvirler canlı bir sahne dünyasına dönüşür",
      "Tasvir perdeye çok yaklaştırılırsa görüntü küçülür, uzaklaştırılırsa büyüyüp bulanıklaşabilir",
      "Güncel konuların geleneksel karakterlerle işlenmesi bu sanatın yeni izleyicilere ulaşmasına yardım eder"
    ], "Gölge oyunu tasvir, ışık, ses ve hareketin uyumuyla perde üzerinde canlılık kazanır", "Gölge oyununda seyirci oyuncuların yüzlerini doğrudan sahnede izler"),
    makeProfile("kültür ve sanat", "expository", "eski fotoğrafların dijital olarak onarılması", "Solmuş Karelerin İzinde", [
      "Eski bir fotoğraftaki çizik ve solmalar geçmişe ait ayrıntıların görülmesini zorlaştırabilir",
      "Dijital onarımda önce yüksek çözünürlüklü kopya alınır, asıl fotoğrafa fiziksel müdahale edilmez",
      "Uzman kayıp bölümleri çevredeki doku ve ışık bilgisine bakarak dikkatle tamamlar",
      "Bu yöntem aile ve kent belleğine ait görüntülerin daha rahat incelenmesini sağlar",
      "Aşırı düzeltme yüz ifadelerini veya döneme özgü izleri değiştirerek belgenin güvenilirliğini azaltabilir",
      "Yapılan işlemlerin kaydedilmesi özgün görüntüyle onarılmış sürümün birbirinden ayrılmasını sağlar"
    ], "Dijital fotoğraf onarımı geçmişin izlerini koruyacak ölçüde ve yapılan değişiklikler belgelenerek uygulanmalıdır", "Eski fotoğraflar onarılırken özgün görüntüde bulunmayan ayrıntılar serbestçe eklenmelidir"),
    makeProfile("kültür ve sanat", "expository", "çocuk korosunda farklı seslerin uyum sağlaması", "Tek Şarkıda Birçok Ses", [
      "Bir koroda güçlü söylemek kadar çevredeki sesleri dinlemek de önemlidir",
      "Çocuklar nefes yerlerini birlikte belirler, sözcükleri aynı anda başlatır ve ses yüksekliklerini dengeler",
      "Zor bir bölüm önce küçük gruplarla yavaş çalışılır, ardından bütün koro aynı tempoda birleşir",
      "Bu çalışma ayrı seslerin birbirini bastırmadan ortak bir anlatı oluşturmasını sağlar",
      "Bir grubun sürekli daha yüksek söylemesi ezginin dengesini ve sözlerin anlaşılmasını bozabilir",
      "Koro şefi el hareketleriyle giriş, duruş ve ses şiddetindeki değişimleri görünür hâle getirir"
    ], "Koro uyumu bireysel seslerin dikkatli dinleme, ortak nefes ve dengeli söyleyişle birleşmesine bağlıdır", "Koroda uyum sağlamak için herkesin diğerlerinden daha yüksek sesle söylemesi gerekir"),
    makeProfile("kültür ve sanat", "expository", "arkeolojik çömlek parçalarının bir araya getirilmesi", "Parçalardan Kabın Öyküsüne", [
      "Kazıda bulunan küçük bir çömlek parçası tek başına önemsiz görünebilir",
      "Parçanın rengi, kalınlığı, kıvrımı ve üzerindeki desen hangi kaba ait olduğuna ilişkin ipuçları taşır",
      "Uzmanlar parçaları numaralandırır, çizimlerini yapar ve kırık kenarları birbirine zarar vermeden karşılaştırır",
      "Uyumlu parçalar bir araya geldiğinde kabın biçimi ve kullanıldığı dönem hakkında daha güçlü sonuçlara ulaşılır",
      "Eksik bölümlerin kesin biçimde tamamlandığını varsaymak yanlış bir görüntü oluşturabilir",
      "Buluntu yeri bilgisi korunmadığında parçanın tarihsel bağlamını açıklamak zorlaşır"
    ], "Arkeolojik çömlek parçaları ayrıntılı kayıt ve dikkatli karşılaştırmayla geçmişe ilişkin anlamlı kanıtlara dönüşür", "Bir çömlek parçasının bulunduğu yer ve kırık kenarları araştırma için hiçbir bilgi taşımaz"),
    makeProfile("kültür ve sanat", "expository", "eski kitapların özgün yapısını koruyarak ciltlenmesi", "Sayfaları Bir Arada Tutan Emek", [
      "Yıpranmış bir kitabı onarmak kapağını yeni ve parlak bir malzemeyle değiştirmekten ibaret değildir",
      "Cilt ustası önce dikişleri, kâğıdın lif yönünü ve hasarın hangi bölümlerde yoğunlaştığını inceler",
      "Kopan sayfalar uygun kâğıtla desteklenir, gevşeyen formalar özgün deliklerden yeniden dikilir",
      "Böylece kitap hem kullanılabilir duruma gelir hem de geçmişinden taşıdığı izleri korur",
      "Kâğıda uygun olmayan güçlü yapıştırıcı zamanla sertleşip yeni yırtıklara yol açabilir",
      "Onarımda eklenen parçaların uzmanlarca ayırt edilebilir olması belgenin özgünlüğünü destekler"
    ], "Kitap ciltleme ve onarımı kullanım ile özgünlüğü dengede tutan dikkatli bir koruma çalışmasıdır", "Eski bir kitabı korumanın en doğru yolu bütün özgün parçalarını atıp yenileriyle değiştirmektir"),
    makeProfile("kültür ve sanat", "expository", "yer adlarının sözlü tarih yoluyla araştırılması", "Bir İsmin Sakladığı Geçmiş", [
      "Bir tepenin, çeşmenin veya sokağın adı o yerde yaşanmış bir olaya ilişkin iz taşıyabilir",
      "Araştırmacılar farklı yaşlardaki kişilerle görüşerek adın nasıl söylendiğini ve hangi öyküyle açıklandığını kaydeder",
      "Sözlü anlatılar eski harita, belge ve kitabelerdeki bilgilerle karşılaştırılır",
      "Birden fazla kaynağın birleşmesi yer adının geçmişini daha güvenilir biçimde açıklamayı sağlar",
      "Yalnız tek kişinin hatırasını kesin bilgi saymak zamanla değişen ayrıntıları gözden kaçırabilir",
      "Aynı adın farklı söylenişleri bölgenin dil özellikleri hakkında da bilgi verebilir"
    ], "Yer adlarının geçmişi sözlü anlatılar ile yazılı kaynaklar birlikte değerlendirilerek araştırılmalıdır", "Bir yer adının kökenini anlamak için yalnız günümüzdeki tabelaya bakmak yeterlidir"),
    makeProfile("kültür ve sanat", "expository", "tiyatro kostümünün karakteri anlatmadaki görevi", "Sahneye Çıkmadan Konuşan Giysi", [
      "Tiyatro kostümü oyuncunun üzerine giydiği süslü bir giysiden daha fazlasıdır",
      "Kumaşın rengi, kesimi ve eskilik düzeyi karakterin yaşı, işi ve yaşadığı dönem hakkında ipucu verebilir",
      "Tasarımcı metni inceler, yönetmenin yorumunu dinler ve oyuncunun rahat hareket edeceği denemeler yapar",
      "Doğru kostüm karakter sahneye gelir gelmez seyircinin onu tanımasına yardımcı olur",
      "Görünüşü etkileyici olsa da oyuncunun hareketini engelleyen bir kıyafet sahnedeki anlatımı aksatabilir",
      "Işık altında değişen renklerin prova sırasında görülmesi beklenmedik görüntüleri önler"
    ], "Tiyatro kostümü karakter, dönem, hareket ve sahne ışığı birlikte düşünülerek tasarlanır", "Tiyatro kostümünün metindeki karakterle ve oyuncunun hareketiyle ilgisi yoktur"),
    makeProfile("kültür ve sanat", "expository", "kamusal alandaki heykelin çevresiyle kurduğu ilişki", "Meydandaki Ölçek", [
      "Bir heykelin atölyede etkileyici görünmesi yerleştirildiği meydanda da aynı etkiyi oluşturacağı anlamına gelmez",
      "Eserin boyutu çevredeki binalar, yaya yolları ve insanların bakış uzaklığıyla ilişkilidir",
      "Sanatçı küçük modeli farklı açılardan inceler, alanın ışığını ve gün içindeki hareketini gözlemler",
      "Bu değerlendirme heykelin çevreyi kapatmadan fark edilmesini ve mekânla bağ kurmasını sağlar",
      "Yalnız yüksekliği artırmak eserin anlamını güçlendirmeyebilir, hatta çevredeki yapıları görünmez kılabilir",
      "İnsanların alandaki kullanım biçimi yerleştirme sonrasında da izlenerek gerektiğinde çevre düzeni yenilenir"
    ], "Kamusal bir heykelin etkisi yalnız biçimine değil ölçek, konum ve çevresindeki yaşamla kurduğu ilişkiye bağlıdır", "Bir heykel ne kadar büyük yapılırsa bulunduğu her çevreye o kadar iyi uyum sağlar"),
    makeProfile("kültür ve sanat", "expository", "halk türkülerinin yörelere göre değişen yorumları", "Aynı Ezginin Farklı Yolları", [
      "Bir halk türküsü farklı yörelerde söylenirken ezgisinde veya sözlerinde küçük değişiklikler görülebilir",
      "Yerel söyleyiş, kullanılan çalgı ve icracının tavrı türkünün yeni bir yorum kazanmasını sağlar",
      "Müzik araştırmacıları farklı kayıtları karşılaştırıp ortak bölümleri ve değişen motifleri belirler",
      "Bu çeşitlilik türkünün temel duygusunu korurken yaşayan kültür içinde yenilendiğini gösterir",
      "Yalnız bir kaydı tek doğru biçim saymak diğer yörelerin katkısını görünmez kılabilir",
      "Kayıtların yer, tarih ve icracı bilgisiyle saklanması değişimin izlenmesini kolaylaştırır"
    ], "Halk türküleri temel duygularını koruyup farklı yörelerin söyleyiş ve çalgılarıyla çeşitlenerek yaşar", "Bir halk türküsünün bütün yorumları ses, söz ve çalgı bakımından bütünüyle aynı olmak zorundadır"),

    makeProfile("öğrenme ve yaşam", "expository", "aralıklı tekrarın kalıcı öğrenmeye katkısı", "Unutmadan Önce Hatırlamak", [
      "Bir bilgiyi tek akşam uzun süre çalışmak ertesi gün için hızlı bir başarı sağlayabilir",
      "Aynı konuyu günlere yayılan kısa aralıklarla yeniden hatırlamak ise bilginin bellekte güçlenmesine yardım eder",
      "Öğrenci her tekrarda yalnız okumak yerine kendine soru sorar ve cevabı kaynağa bakmadan bulmaya çalışır",
      "Bu çaba hangi bilginin öğrenildiğini, hangisinin yeniden çalışılması gerektiğini gösterir",
      "Tekrar aralıkları gereğinden fazla uzarsa bazı ayrıntılar tamamen unutulabilir",
      "Zor konulara daha sık, iyi bilinen konulara daha seyrek dönmek çalışma zamanını verimli kullanmayı sağlar"
    ], "Kalıcı öğrenme bilgiyi farklı zamanlarda etkin biçimde hatırlamaya ve tekrar aralıklarını ihtiyaca göre ayarlamaya dayanır", "Bir konuyu kalıcı öğrenmenin tek yolu aynı gece aralıksız saatlerce okumaktır"),
    makeProfile("öğrenme ve yaşam", "expository", "akran geri bildiriminde yapıcı öneri verilmesi", "Eleştiriden Gelişime", [
      "Bir arkadaşın yazısını değerlendirmek yalnız yanlışları işaretlemek anlamına gelmez",
      "Yapıcı geri bildirim metnin güçlü bir yönünü belirtir, geliştirilmesi gereken bölümü kanıtla gösterir",
      "Değerlendiren kişi belirsiz bir yargı yerine uygulanabilir ve açık bir öneri sunar",
      "Yazar bu açıklamalardan yararlanarak metnini hangi yönde değiştireceğine karar verebilir",
      "Kişiliğe yönelik sert sözler savunma duygusu oluşturup metin üzerindeki çalışmayı zorlaştırır",
      "Geri bildirimi alan kişinin de her öneriyi düşünmesi, ancak kendi amacına uygun olanı seçmesi gerekir"
    ], "Akran geri bildirimi kanıta dayalı, saygılı ve uygulanabilir olduğunda yazının gelişmesine katkı sağlar", "Etkili geri bildirim vermek için yazarın kişiliğini sert biçimde eleştirmek gerekir"),
    makeProfile("öğrenme ve yaşam", "expository", "okul tartışmasında iddiaların kanıtlarla desteklenmesi", "Sözün Dayanağı", [
      "Bir tartışmada görüşü yüksek sesle söylemek onun doğru kabul edilmesi için yeterli değildir",
      "İddianın güvenilir veri, örnek veya uzman görüşüyle desteklenmesi gerekir",
      "Öğrenciler konuşmadan önce kaynaklarını karşılaştırır ve karşı görüşün güçlü yanlarına da cevap hazırlar",
      "Bu hazırlık tartışmayı kişisel çekişmeden çıkarıp düşüncelerin değerlendirildiği bir ortama dönüştürür",
      "Kaynağı belirsiz bir sayı etkileyici görünse bile iddiayı güvenilir biçimde kanıtlamaz",
      "Konuşmacının kanıt ile yorum arasındaki farkı açıkça belirtmesi dinleyicinin değerlendirmesini kolaylaştırır"
    ], "Nitelikli tartışma iddiaların güvenilir kanıtlarla desteklenmesine ve karşı görüşlerin dikkatle ele alınmasına dayanır", "Bir tartışmada en yüksek sesle konuşan kişinin iddiası kanıta gerek kalmadan doğru sayılır"),
    makeProfile("öğrenme ve yaşam", "expository", "okuma günlüğünün metni anlamaya yardımcı olması", "Okurken Bırakılan İzler", [
      "Okunan bir kitabın yalnız sayfa sayısını kaydetmek okuma deneyimini açıklamaya yetmez",
      "Okuma günlüğüne merak edilen bir soru, dikkat çeken bir cümle ve karakterle ilgili değişen düşünce yazılabilir",
      "Öğrenci belirli aralıklarla eski notlarına dönüp ilk tahminleriyle sonraki gelişmeleri karşılaştırır",
      "Bu kayıtlar metindeki ayrıntıların ve düşünce değişimlerinin fark edilmesini kolaylaştırır",
      "Her sayfayı özetlemeye çalışmak okumayı kesintiye uğratıp günlüğü yorucu bir göreve dönüştürebilir",
      "Kısa ama anlamlı notlar kitap üzerine yapılacak sınıf konuşmalarına da hazırlık sağlar"
    ], "Okuma günlüğü seçilmiş soru ve gözlemlerle tutulduğunda metni derinlemesine anlamayı destekler", "Okuma günlüğünde yalnız bitirilen sayfa sayısını yazmak metni bütünüyle anlamak için yeterlidir"),
    makeProfile("öğrenme ve yaşam", "expository", "acil durum tatbikatında doğru davranışların denenmesi", "Panikten Önce Prova", [
      "Acil durum planının duvarda asılı olması herkesin ne yapacağını bildiği anlamına gelmez",
      "Tatbikat sırasında çıkış yolları, toplanma alanı ve yardıma ihtiyaç duyan kişilere destek biçimi uygulanarak görülür",
      "Görevliler süreyi ölçer, karşılaşılan engelleri not eder ve tatbikat sonrasında katılımcıların görüşünü alır",
      "Bu değerlendirme gerçek bir olay yaşanmadan önce planın eksiklerinin düzeltilmesini sağlar",
      "Tatbikatın önceden konuşulmadan yalnız hız yarışına çevrilmesi güvenli davranışların gözden kaçmasına yol açabilir",
      "Farklı saat ve koşullarda yapılan tekrarlar planın yalnız tek bir duruma göre hazırlanmasını önler"
    ], "Acil durum tatbikatı planı uygulamada sınayıp eksikleri düzeltmeye yarayan düzenli bir öğrenme çalışmasıdır", "Acil durum planı bir kez yazıldıktan sonra uygulanmasına ve değerlendirilmesine gerek yoktur"),
    makeProfile("öğrenme ve yaşam", "expository", "takım çalışmasında görevlerin açıkça paylaşılması", "Aynı Hedefe Ayrı Sorumluluklar", [
      "Bir grup projesinde herkesin her işi yapmaya çalışması zaman ve emek kaybına yol açabilir",
      "Görevler kişilerin becerileri ve projenin aşamaları dikkate alınarak açıkça paylaşılır",
      "Ekip ortak bir çizelgede tamamlanan işleri, yaklaşan tarihleri ve ihtiyaç duyulan desteği gösterir",
      "Düzenli kısa görüşmeler parçaların zamanında birleşmesini ve sorunların erken fark edilmesini sağlar",
      "Görev paylaşımı bir kişinin yalnız bırakılması değil gerektiğinde birbirine destek olunması demektir",
      "Proje sonunda sürecin değerlendirilmesi sonraki çalışmalarda daha adil ve etkili bir düzen kurulmasına yardım eder"
    ], "Başarılı takım çalışması açık görev paylaşımını, düzenli iletişimi ve gerektiğinde karşılıklı desteği gerektirir", "Takım çalışmasında görevlerin belirsiz bırakılması herkesin daha verimli çalışmasını sağlar"),
    makeProfile("öğrenme ve yaşam", "expository", "çalışma aralarının dikkat üzerindeki etkisi", "Kısa Bir Durak, Taze Bir Dikkat", [
      "Uzun süre hiç ara vermeden çalışmak masada geçirilen zamanı artırsa da dikkati aynı düzeyde tutmayabilir",
      "Belirli bir çalışma süresinin ardından verilen kısa ara zihnin dinlenmesine ve bedensel gerginliğin azalmasına yardım eder",
      "Öğrenci arada ekrandan uzaklaşıp su içer, hareket eder ve dönüş saatini önceden belirler",
      "Planlı ara sonrasında göreve dönmek bilgiyi daha dikkatli işlemeyi kolaylaştırabilir",
      "Sınırı olmayan bir ara çalışmayı tamamen bırakmaya dönüşebilir",
      "Çalışma ve ara süresi kişinin yaşına, görevin güçlüğüne ve kendi dikkatini gözlemlemesine göre ayarlanmalıdır"
    ], "Verimli çalışma dikkat süresine uygun, sınırları belli molalarla desteklenmelidir", "Dikkati korumanın en iyi yolu yorulunsa bile saatlerce yerinden kalkmamaktır"),
    makeProfile("öğrenme ve yaşam", "expository", "müze gezisinde gözlem notlarının düzenlenmesi", "Eserin Önünde Sorulan Sorular", [
      "Müze gezisinde bütün vitrinleri hızla dolaşmak çok sayıda eser görmek anlamına gelebilir",
      "Ancak seçilen birkaç eserin malzemesi, biçimi ve kullanım izleri üzerinde durmak daha derin bir gözlem sağlar",
      "Öğrenci gördüğünü, bundan çıkardığı yorumu ve merak ettiği soruyu ayrı başlıklarla not eder",
      "Bu ayrım gözlem ile tahminin birbirine karışmasını önler ve gezi sonrasındaki araştırmayı yönlendirir",
      "Etikette yazan bilgiyi aynen kopyalamak eserin ayrıntılarına dikkat edildiğini göstermeyebilir",
      "Notların sınıfta başka öğrencilerin gözlemleriyle karşılaştırılması aynı eserin farklı yönlerini görünür kılar"
    ], "Müze gezisi seçilmiş eserleri dikkatle gözlemleyip gözlem, yorum ve soruları ayrı kaydetmekle verimli hâle gelir", "Müze gezisinde başarılı olmak için bütün etiketleri düşünmeden aynen kopyalamak yeterlidir"),
    makeProfile("öğrenme ve yaşam", "expository", "internetteki bir bilginin kaynağını sorgulama", "Bilginin İzini Sürmek", [
      "İnternette sık paylaşılan bir bilgi çok sayıda kişi tarafından tekrarlandığı için doğru olmayabilir",
      "Okur içeriği kimin hazırladığını, hangi tarihte yayımlandığını ve iddiaların hangi kaynaklara dayandığını inceler",
      "Aynı konu güvenilir kurumların güncel sayfaları ve birden fazla bağımsız kaynakla karşılaştırılır",
      "Bu kontrol yanlış veya bağlamından koparılmış bilgilerin yayılmasını azaltır",
      "Yalnız başlığa bakarak karar vermek metindeki sınırlamaları ve kanıt eksiklerini gözden kaçırabilir",
      "Görsel arama araçları eski bir fotoğrafın yeni bir olayla ilişkilendirilip ilişkilendirilmediğini anlamaya yardım edebilir"
    ], "İnternetteki bilgiler yazar, tarih, kanıt ve başka güvenilir kaynaklar birlikte incelenerek değerlendirilmelidir", "Bir bilgi çok kez paylaşıldığında kaynağını kontrol etmeye gerek kalmadan doğru kabul edilir"),
    makeProfile("öğrenme ve yaşam", "expository", "yeni kelimelerin iki dilli bir defterde öğrenilmesi", "Kelimenin Tek Karşılıktan Fazlası", [
      "Yeni öğrenilen bir kelimenin yanına yalnız başka dildeki tek karşılığını yazmak kullanımını anlamaya yetmeyebilir",
      "Kelimenin geçtiği cümle, birlikte kullanıldığı sözcükler ve farklı anlamları da kaydedilir",
      "Öğrenci birkaç gün sonra defterin çeviri bölümünü kapatıp kelimeyi yeni bir cümlede kullanmayı dener",
      "Bu çalışma kelimenin yalnız tanınmasını değil uygun bağlamda hatırlanmasını sağlar",
      "Her kelimeyi uzun listeler hâlinde ezberlemek benzer anlamların karışmasına yol açabilir",
      "Kişisel örnekler ve küçük çizimler kelimeyle kurulan anlam bağını güçlendirebilir"
    ], "Kelime öğrenimi çevirinin yanında bağlam, kullanım ve etkin hatırlama çalışmalarıyla güçlenir", "Yeni bir kelimeyi öğrenmek için yalnız ilk çevirisini bir kez okumak yeterlidir"),

    makeProfile("anlatı ve betimleme", "narrative", "okul tiyatrosunda kaybolan anahtarın bulunması", "Perde Açılmadan Önce", [
      "Gösteriye yarım saat kala kostüm odasının anahtarı yerinde bulunamayınca kuliste telaş başladı",
      "Ece herkesin aynı yerlere tekrar tekrar bakmak yerine anahtarı en son kullananların sırasını yazmayı önerdi",
      "Listeyi izleyince dekor ekibinin anahtarı ışık masasının yanında geçici olarak bıraktığı hatırlandı",
      "Ece masanın altındaki kablo kutularını kontrol etti ve anahtarı düşmüş bir program kâğıdının altında buldu",
      "Anahtar bulunmasaydı oyuncular kostümlere zamanında ulaşamayacak, gösterinin başlangıcı gecikecekti",
      "O günden sonra anahtar teslimleri kulisteki küçük çizelgeye saat ve adla kaydedilmeye başlandı"
    ], "Telaş anında süreci adım adım izlemek kaybolan bir nesneyi rastgele aramaktan daha etkili olabilir", "Ece anahtarı aramaktan vazgeçip gösterinin ertelenmesini istedi"),
    makeProfile("anlatı ve betimleme", "narrative", "dededen kalan saatin yeniden çalıştırılması", "Duran Akrebin Ardındaki Ses", [
      "Mert, yıllardır salondaki rafta duran ahşap saatin bir sabah hafifçe tıkırdadığını duydu",
      "Saati hemen kurmak istedi ancak büyükannesi eski mekanizmayı zorlamadan önce ustaya göstermelerini söyledi",
      "Usta arka kapağı açınca dişlilerin arasına sıkışmış küçük bir vida buldu ve aşınan parçaları temizledi",
      "Sarkaç yeniden hareket ettiğinde odanın sessizliğine düzenli bir ses yayıldı",
      "Mert acele edip kurma kolunu zorlasaydı kırılgan yay bütünüyle kopabilirdi",
      "Saatin yanına ustanın önerdiği bakım tarihini yazan küçük bir kart bırakıldı"
    ], "Değerli ve eski eşyalar aceleyle zorlanmak yerine uzman yardımı ve düzenli bakımla korunmalıdır", "Mert saati çalıştırmak için bütün parçalarını kendi başına söküp attı"),
    makeProfile("anlatı ve betimleme", "narrative", "bilim şenliğinde elektrik kesilince sunumun sürdürülmesi", "Işıklar Sönünce", [
      "Deniz tam güneş enerjisi modelini anlatmaya başladığında salonun bütün ışıkları söndü",
      "Bilgisayardaki sunum açılmayınca bir an durdu, sonra masadaki gerçek modeli pencereye taşıdı",
      "Modelin parçalarını tek tek gösterip deney sırasında tuttuğu basılı ölçüm notlarını arkadaşlarına dağıttı",
      "Dinleyiciler ekransız anlatımı dikkatle izledi ve modelin nasıl çalıştığını sorularla daha ayrıntılı öğrendi",
      "Deniz yalnız slaytlara güvenmiş olsaydı sunumunu tamamlayamayacaktı",
      "Şenlikten sonra her ekip için elektrik gerektirmeyen kısa bir yedek sunum hazırlanmasına karar verildi"
    ], "Beklenmedik bir aksaklık karşısında eldeki araçları uyarlamak çalışmanın sürmesini sağlayabilir", "Elektrik kesilince Deniz hiçbir açıklama yapmadan salonu terk etti"),
    makeProfile("anlatı ve betimleme", "narrative", "sisli yürüyüşte harita işaretlerinden yararlanılması", "Patikanın Sessiz İşaretleri", [
      "Dağ yürüyüşü sırasında sis sıklaşınca grubun önündeki patika kısa sürede görünmez oldu",
      "Kerem telefon çekmediği için yönü tahmin etmek yerine kâğıt haritadaki dere ve köprü işaretlerini karşılaştırdı",
      "Grup son gördüğü işaretli noktaya döndü, pusulayla yönünü belirledi ve rehberin gelmesini bekledi",
      "Kısa süre sonra sis hafiflediğinde doğru patikanın hemen aşağıdaki çamların arasında olduğu görüldü",
      "Grup gelişigüzel ilerleseydi işaretli rotadan daha fazla uzaklaşabilirdi",
      "Dönüşte herkes çevrim dışı harita ve acil durum iletişim planı hazırlamanın önemini konuştu"
    ], "Belirsiz bir durumda tahminle ilerlemek yerine güvenilir işaretlere dönmek ve güvenliği öncelemek gerekir", "Kerem sis içinde yolu hızla bulmak için haritaya bakmadan rastgele yürüdü"),
    makeProfile("anlatı ve betimleme", "narrative", "çatlayan seramik vazoyu dikkatle onarma girişimi", "Kırıkların Arasındaki Desen", [
      "Atölyedeki eski seramik vazo raftan kayıp yere düştüğünde Selin parçaları hemen toplamaya koştu",
      "Öğretmeni keskin kenarlara dokunmamasını, önce alanı boşaltıp parçaların yerini fotoğraflamasını istedi",
      "Eldiven takıldıktan sonra parçalar boyutlarına göre ayrıldı ve desen çizgileri bir kâğıt üzerinde eşleştirildi",
      "Uzman onarımcı bu kayıtlar sayesinde eksik parçaları belirleyip vazoyu güvenli biçimde birleştirdi",
      "Parçalar rastgele yapıştırılsaydı desen kayacak ve sonraki onarım güçleşecekti",
      "Vazo daha alçak ve sabit bir standa yerleştirilerek benzer bir kazanın tekrarlanması önlendi"
    ], "Hasarlı bir eseri korumak güvenlik, kayıt ve uzman desteğini içeren planlı bir çalışma gerektirir", "Selin kırık parçaları incelemeden gelişigüzel yapıştırarak vazoyu hemen kullandı"),
    makeProfile("anlatı ve betimleme", "descriptive", "kış sabahında küçük bir limanın görünümü", "Buzlu Halatların Arasında", [
      "Şafak sökerken küçük limanın taşları gece ayazından ince bir buz tabakasıyla parlıyordu",
      "Kıyıya bağlı tekneler ağır ağır yükselip alçalıyor, gerilen halatlar boğuk seslerle gıcırdıyordu",
      "Tuzlu havaya uzaktaki çay ocağından gelen kömür ve dem kokusu karışıyordu",
      "Balıkçılar kalın eldivenlerle ağları toplarken nefesleri soluk bulutlar hâlinde yüzlerinin önünde dağılıyordu",
      "Dalgaların iskele altındaki düzenli vuruşu uykulu sessizliği aralıklarla bölüyordu",
      "Güneş yükseldikçe sisin içinden beliren kırmızı şamandıralar suyun üzerinde küçük işaretler gibi görünüyordu"
    ], "Kış limanı soğuk, tuzlu hava, boğuk sesler ve yavaş hareketlerle uyanan canlı bir görünüm sunuyordu", "Liman öğle sıcağında kupkuru, teknelerden ve deniz kokusundan uzak bir meydan olarak anlatılmıştır"),
    makeProfile("anlatı ve betimleme", "descriptive", "yaz sabahında meyve bahçesinin görünümü", "Dalların Arasındaki Gün Işığı", [
      "Güneş henüz yükselirken meyve bahçesinin çiyli otları ayakların altında serin bir iz bırakıyordu",
      "Olgun kayısıların tatlı kokusu ısınan yapraklardan yükselen keskin yeşil kokuya karışmıştı",
      "Dalların arasından geçen ışık sarı meyvelerin üzerinde küçük parlak lekeler oluşturuyordu",
      "Uzakta çalışan su motorunun tekdüze sesi arada bir kovaların metal şakırtısıyla kesiliyordu",
      "Toplanan meyveler hasır sepetlere bırakıldıkça bahçedeki sessiz hareketlilik artıyordu",
      "Sabah rüzgârı hafiflediğinde yapraklar duruluyor, sıcaklığın yaklaşmakta olduğu hissediliyordu"
    ], "Yaz sabahındaki bahçe koku, serinlik, ışık ve çalışma sesleriyle yavaşça canlanan bereketli bir ortamdır", "Meyve bahçesi kış gecesinde karla örtülü ve bütünüyle kokusuz bir yer olarak betimlenmiştir"),
    makeProfile("anlatı ve betimleme", "descriptive", "eski bir sinemanın fuaye bölümü", "Gösterimden Kalan Işık", [
      "Eski sinemanın fuayesinde bordo halının rengi yılların ayak izleriyle yer yer solmuştu",
      "Duvarlardaki çerçevelerde gülümseyen oyuncuların siyah beyaz yüzleri sarı lambaların altında parlıyordu",
      "Kapalı gişenin küçük penceresinde yırtık bilet ruloları ve pirinç bir zil duruyordu",
      "Kadife perdenin ağır toz kokusuna cilalı ahşap korkulukların keskin kokusu karışmıştı",
      "Boş salondan gelen hafif uğultu yüksek tavanın altında uzun bir yankıya dönüşüyordu",
      "Sokağın ışığı cam kapıdan içeri süzülünce fuaye geçmiş gösterimleri bekleyen sessiz bir sahneye benziyordu"
    ], "Eski sinema fuayesi solmuş renkleri, kokuları ve yankılarıyla geçmiş gösterilerin izlerini taşıyan sessiz bir mekândır", "Fuaye yeni açılmış bir spor salonunun parlak aletleri ve yüksek müziğiyle doludur"),
    makeProfile("anlatı ve betimleme", "descriptive", "öğle sıcağında arkeolojik kazı alanı", "Toprağın Altındaki Öğle", [
      "Öğle güneşi kazı alanındaki açık renkli toprağı neredeyse beyaz bir parıltıya dönüştürmüştü",
      "Gerilmiş gölgeliklerin altında çalışanların küçük fırçaları kuru zeminde ince hışırtılar çıkarıyordu",
      "Havada toz, sıcak taş ve uzaktaki kekiklerin buruk kokusu vardı",
      "Numaralı iplerle ayrılan karelerde her taş parçası bulunduğu yerde sessizce bekliyordu",
      "Arada yükselen fotoğraf makinesi sesi alanın ağır sessizliğini kısa bir an için bölüyordu",
      "Ufukta titreyen sıcak hava, çevredeki tepeleri sanki ince bir perdenin arkasına çekiyordu"
    ], "Kazı alanı öğle sıcağı, tozlu kokular ve ölçülü çalışma sesleriyle sabır isteyen bir araştırma ortamı görünümündedir", "Kazı alanı serin yağmur altında gelişigüzel koşan kalabalıkların bulunduğu bir eğlence yeridir"),
    makeProfile("anlatı ve betimleme", "descriptive", "akşam yolculuğunda tren kompartımanı", "Rayların Ritminde Akşam", [
      "Akşam inerken kompartımanın camında içerideki sarı lambalarla dışarıdaki koyu tarlalar üst üste görünüyordu",
      "Tekerleklerin ray birleşimlerinde çıkardığı düzenli ses koltukların hafif titreşimine karışıyordu",
      "Koridordan geçen çay arabasıyla birlikte dem ve limon kokusu dar bölmeye yayıldı",
      "Yolcuların alçak konuşmaları istasyonlarda açılan kapının soğuk uğultusuyla kısa süre kesiliyordu",
      "Uzak köylerin ışıkları camın kenarından hızla geçip karanlıkta kayboluyordu",
      "Tren geceye ilerledikçe kompartımandaki hareket azaldı ve rayların ritmi daha belirgin duyulmaya başladı"
    ], "Akşam treninin kompartımanı ışık, koku, titreşim ve düzenli seslerin iç içe geçtiği sakin bir yolculuk ortamıdır", "Kompartıman gündüz vakti deniz dalgalarının ve martı seslerinin doldurduğu açık bir güverte olarak betimlenmiştir")
  ];

  const letters = ["A", "B", "C", "D"];
  const typeKeys = [
    "main", "supportNo", "supportYes", "topic", "title",
    "inference", "completion", "flow", "order", "cause",
    "purpose", "summary", "narration", "language", "compareCommon",
    "compareDiff", "split", "insert", "evidence", "attitude"
  ];
  const settings = {
    5: { start: 401, difficulty: ["Kolay", "Orta"], seed: 5391 },
    6: { start: 501, difficulty: ["Orta", "Orta"], seed: 6391 },
    7: { start: 351, difficulty: ["Orta", "Zor"], seed: 7391 },
    8: { start: 1251, difficulty: ["Orta", "Zor"], seed: 8391 }
  };

  const trimPeriod = (value) => String(value || "").trim().replace(/[.!?…]+$/u, "");
  const sentence = (value) => {
    const text = trimPeriod(value);
    return text ? `${text}.` : "";
  };
  const lowerFirst = (value) => {
    const text = String(value || "").trim();
    return text ? text[0].toLocaleLowerCase("tr-TR") + text.slice(1) : text;
  };
  const upperFirst = (value) => {
    const text = String(value || "").trim();
    return text ? text[0].toLocaleUpperCase("tr-TR") + text.slice(1) : text;
  };
  const joinSentences = (...values) => values.filter(Boolean).map(sentence).join(" ");
  const numbered = (items) => items.map((item, index) => `(${["I", "II", "III", "IV"][index]}) ${sentence(item)}`).join(" ");

  function fieldsFor(profile, grade) {
    if (grade === 5) return [profile.intro, profile.detail, profile.effect, profile.main];
    if (grade === 6) return [profile.intro, profile.detail, profile.method, profile.effect, profile.main];
    if (grade === 7) return [profile.intro, profile.detail, profile.method, profile.effect, profile.limit, profile.main];
    return [profile.intro, profile.detail, profile.method, profile.effect, profile.limit, profile.extension, profile.main];
  }

  function passage(profile, grade, variant) {
    const fields = fieldsFor(profile, grade);
    if (profile.kind === "narrative") {
      const leads = ["", "Olay başladığında hızlı davranmak kadar doğru sırayı izlemek de önemliydi. ", "Kısa süre içinde verilen karar, yaşanan güçlüğün sonucunu değiştirecekti. ", "Herkes bir çözüm ararken küçük bir ayrıntı yol gösterdi. ", "Acele etmek kolaydı; asıl gereken eldeki ipuçlarını dikkatle değerlendirmekti. "];
      return `${leads[variant]}${joinSentences(...fields)}`;
    }
    if (profile.kind === "descriptive") {
      const leads = ["", "Mekânın kendine özgü havası daha ilk anda hissediliyordu. ", "Bakıldıkça yeni ayrıntılar beliriyor, sesler ve kokular görünümü tamamlıyordu. ", "Çevredeki ışık değiştikçe aynı yer başka bir görünüm kazanıyordu. ", "Orada zaman, küçük seslerin ve yavaş hareketlerin ritmiyle ilerliyor gibiydi. "];
      return `${leads[variant]}${joinSentences(...fields)}`;
    }
    if (variant === 0) return joinSentences(...fields);
    if (variant === 1) return joinSentences(profile.intro, `Örneğin ${lowerFirst(profile.detail)}`, ...(grade > 5 ? [profile.method] : []), `Bu nedenle ${lowerFirst(profile.effect)}`, ...(grade > 6 ? [profile.limit] : []), ...(grade > 7 ? [profile.extension] : []), profile.main);
    if (variant === 2) return joinSentences(`Bazıları ${lowerFirst(profile.falseClaim)}`, `Oysa ${lowerFirst(profile.intro)}`, profile.detail, ...(grade > 5 ? [profile.method] : []), profile.effect, ...(grade > 6 ? [profile.limit] : []), ...(grade > 7 ? [profile.extension] : []), profile.main);
    if (variant === 3) return joinSentences(`Bu konuyu doğru değerlendirmek için önce şu noktaya dikkat edilmelidir: ${lowerFirst(profile.intro)}`, profile.detail, ...(grade > 5 ? [profile.method] : []), `Sonuçta ${lowerFirst(profile.effect)}`, ...(grade > 6 ? [profile.limit] : []), ...(grade > 7 ? [profile.extension] : []), profile.main);
    return joinSentences(profile.intro, ...(grade > 5 ? [profile.method] : []), profile.detail, ...(grade > 6 ? [profile.limit] : []), `Böylece ${lowerFirst(profile.effect)}`, ...(grade > 7 ? [profile.extension] : []), profile.main);
  }

  function sameDomain(profileIndex, offset) {
    const profile = profiles[profileIndex];
    const peers = profiles.filter((item) => item.domain === profile.domain && item !== profile);
    return peers[(offset - 1) % peers.length];
  }

  function sameKind(profileIndex, offset) {
    const profile = profiles[profileIndex];
    const peers = profiles.filter((item) => item.domain === profile.domain && item.kind === profile.kind && item !== profile);
    return peers[(offset - 1) % peers.length];
  }

  function seededAnswers(total, seed) {
    let state = seed >>> 0;
    const random = () => {
      state = (state * 1664525 + 1013904223) >>> 0;
      return state / 4294967296;
    };
    const remaining = Object.fromEntries(letters.map((letter) => [letter, total / letters.length]));
    const answers = [];
    while (answers.length < total) {
      const candidates = letters.filter((letter) => {
        if (!remaining[letter]) return false;
        const last = answers.length - 1;
        return last < 1 || answers[last] !== letter || answers[last - 1] !== letter;
      });
      const totalWeight = candidates.reduce((sum, letter) => sum + remaining[letter], 0);
      let cursor = random() * totalWeight;
      let selected = candidates.at(-1);
      for (const letter of candidates) {
        cursor -= remaining[letter];
        if (cursor <= 0) {
          selected = letter;
          break;
        }
      }
      answers.push(selected);
      remaining[selected] -= 1;
    }
    return answers;
  }

  function arrangeOptions(correct, distractors, answer) {
    const unique = [...new Set(distractors.filter((item) => item && item !== correct))].slice(0, 3);
    if (unique.length !== 3) throw new Error(`Yetersiz çeldirici: ${correct}`);
    const options = [...unique];
    options.splice(letters.indexOf(answer), 0, correct);
    return options;
  }

  function narrationMode(kind) {
    return { expository: "Açıklama", narrative: "Öyküleme", descriptive: "Betimleme" }[kind];
  }

  function purpose(profile) {
    if (profile.kind === "narrative") return `${upperFirst(profile.subject)} üzerinden okura bir düşünce sezdirmek`;
    if (profile.kind === "descriptive") return `${upperFirst(profile.subject)} görünümünü duyusal ayrıntılarla canlandırmak`;
    return `${upperFirst(profile.subject)} konusunda açıklayıcı bilgi vermek`;
  }

  function commonDirection(profile) {
    if (profile.kind === "narrative") return "Her ikisinin de bir güçlüğün planlı davranışlarla çözülmesini olay içinde aktarması";
    if (profile.kind === "descriptive") return "Her ikisinin de bir mekânı farklı duyulara seslenen ayrıntılarla canlandırması";
    return `Her ikisinin de ${profile.domain} alanındaki bir konuyu uygulama ve sonuçlarıyla açıklaması`;
  }

  function makeQuestion(grade, idNumber, topic, difficulty, text, stem, correct, distractors, solution, answer) {
    return {
      id: `review${grade}-${String(idNumber).padStart(4, "0")}`,
      grade,
      topic,
      difficulty,
      text,
      stem,
      options: arrangeOptions(correct, distractors, answer),
      answer,
      solution,
      reviewOnly: true,
      collection: "grade5-8-original-review-expansion-3"
    };
  }

  function detailFor(profile, grade) {
    if (grade === 5) return profile.detail;
    if (grade === 6) return `${trimPeriod(profile.detail)}; ayrıca ${lowerFirst(profile.method)}`;
    if (grade === 7) return `${trimPeriod(profile.detail)}; ancak ${lowerFirst(profile.limit)}`;
    return `${trimPeriod(profile.detail)}; bunun yanında ${lowerFirst(profile.extension)}`;
  }

  function compareFields(profile, grade, mode) {
    if (mode === "common") {
      if (grade === 5) return [profile.intro, profile.effect];
      if (grade === 6) return [profile.intro, profile.detail, profile.effect];
      if (grade === 7) return [profile.intro, profile.method, profile.effect];
      return [profile.intro, profile.limit, profile.extension, profile.effect];
    }
    if (grade === 5) return [profile.intro, profile.method];
    if (grade === 6) return [profile.intro, profile.detail, profile.method];
    if (grade === 7) return [profile.intro, profile.method, profile.limit];
    return [profile.intro, profile.method, profile.extension];
  }

  function buildGrade(grade) {
    const gradeSettings = settings[grade];
    const answers = seededAnswers(200, gradeSettings.seed);
    const generated = [];
    let serial = 0;

    for (let variant = 0; variant < 5; variant += 1) {
      profiles.forEach((profile, profileIndex) => {
        const typeKey = typeKeys[(profileIndex * 7 + variant * 4) % typeKeys.length];
        const answer = answers[serial];
        const idNumber = gradeSettings.start + serial;
        const difficulty = gradeSettings.difficulty[(profileIndex + variant) % gradeSettings.difficulty.length];
        const neighbor1 = sameDomain(profileIndex, 1);
        const neighbor2 = sameDomain(profileIndex, 2);
        const neighbor3 = sameDomain(profileIndex, 3);
        const kindNeighbor = sameKind(profileIndex, grade + variant - 4);
        const baseText = passage(profile, grade, variant);
        let question;

        if (typeKey === "main") {
          question = makeQuestion(grade, idNumber, "Ana fikir", difficulty, baseText, "Bu metinde asıl anlatılmak istenen aşağıdakilerden hangisidir?", profile.main, [profile.detail, profile.effect, profile.falseClaim], "Doğru seçenek parçadaki açıklamaların tamamını kapsayan temel yargıdır.", answer);
        } else if (typeKey === "supportNo") {
          question = makeQuestion(grade, idNumber, "Yardımcı düşünce", difficulty, baseText, "Bu metinden aşağıdakilerin hangisine ulaşılamaz?", profile.falseClaim, [profile.intro, profile.detail, profile.effect], "Doğru seçenekteki yargı metindeki bilgilerle çelişmektedir.", answer);
        } else if (typeKey === "supportYes") {
          question = makeQuestion(grade, idNumber, "Yardımcı düşünce", difficulty, baseText, "Bu metinden hareketle aşağıdakilerden hangisine ulaşılabilir?", profile.detail, [profile.falseClaim, neighbor1.detail, neighbor2.effect], "Doğru seçenek metinde verilen yardımcı bilgiyi doğru biçimde yansıtmaktadır.", answer);
        } else if (typeKey === "topic") {
          question = makeQuestion(grade, idNumber, "Konu", difficulty, baseText, "Bu metnin konusu aşağıdakilerden hangisidir?", upperFirst(profile.subject), [neighbor1.subject, neighbor2.subject, neighbor3.subject].map(upperFirst), "Doğru seçenek metin boyunca üzerinde durulan konuyu kapsamaktadır.", answer);
        } else if (typeKey === "title") {
          question = makeQuestion(grade, idNumber, "Konu ve başlık", difficulty, baseText, "Bu metne getirilebilecek en uygun başlık aşağıdakilerden hangisidir?", profile.title, [neighbor1.title, neighbor2.title, neighbor3.title], "Doğru başlık metnin konusunu ve yönünü birlikte yansıtmaktadır.", answer);
        } else if (typeKey === "inference") {
          question = makeQuestion(grade, idNumber, "Çıkarım yapma", difficulty, baseText, "Bu metindeki bilgiler birlikte değerlendirildiğinde aşağıdakilerden hangisi söylenebilir?", profile.main, [profile.falseClaim, neighbor1.main, neighbor2.effect], "Doğru çıkarım metindeki kanıtların ortak sonucuna dayanmaktadır.", answer);
        } else if (typeKey === "completion") {
          const lead = fieldsFor(profile, grade).slice(0, -1);
          question = makeQuestion(grade, idNumber, "Paragraf tamamlama", difficulty, `${joinSentences(...lead)} ----`, "Bu metin düşüncenin akışına göre aşağıdakilerden hangisiyle tamamlanmalıdır?", profile.main, [profile.falseClaim, neighbor1.main, neighbor2.main], "Metindeki ayrıntıları ortak bir sonuca bağlayan cümle doğru tamamlamadır.", answer);
        } else if (typeKey === "flow") {
          const text = numbered([profile.intro, detailFor(profile, grade), detailFor(neighbor3, grade), profile.effect]);
          question = makeQuestion(grade, idNumber, "Düşüncenin akışını bozan cümle", difficulty, text, "Numaralanmış cümlelerden hangisi metnin düşünce akışını bozmaktadır?", "III", ["I", "II", "IV"], "III. cümle aynı geniş alan içinde olsa da metnin özel konusundan ayrılmaktadır.", answer);
        } else if (typeKey === "order") {
          if (profile.kind === "descriptive") {
            question = makeQuestion(grade, idNumber, "Betimleyici anlatım", difficulty, baseText, "Bu metindeki ortamın okurun zihninde canlanmasını sağlayan temel özellik aşağıdakilerden hangisidir?", "Farklı duyulara seslenen ayrıntıların bir arada kullanılması", ["Olayların tarihlerle kronolojik biçimde sıralanması", "Bir görüşün istatistiklerle kanıtlanması", "Kişilerin karşılıklı konuşmalarına ağırlık verilmesi"], "Metinde görme, işitme, koklama ve dokunma duyularını harekete geçiren ayrıntılar vardır.", answer);
          } else {
            const text = `I. Böylece ${sentence(lowerFirst(profile.effect))}\nII. ${sentence(profile.intro)}\nIII. Bu amaçla ${sentence(lowerFirst(profile.method))}\nIV. ${sentence(detailFor(profile, grade))}`;
            question = makeQuestion(grade, idNumber, "Paragrafta sıralama", difficulty, text, "Numaralanmış cümlelerle anlamlı bir paragraf oluşturulduğunda doğru sıralama aşağıdakilerden hangisi olur?", "II - IV - III - I", ["I - III - II - IV", "II - III - I - IV", "IV - I - II - III"], "Konu tanıtıldıktan sonra ayrıntı ve yöntem verilir; sonuç cümlesi paragrafı tamamlar.", answer);
          }
        } else if (typeKey === "cause") {
          if (profile.kind === "descriptive") {
            question = makeQuestion(grade, idNumber, "Dil ve anlatım", difficulty, baseText, "Bu metnin dil ve anlatımıyla ilgili aşağıdakilerden hangisi söylenebilir?", "Duyusal ayrıntılarla mekânın belirgin bir görünümü oluşturulmuştur", ["Yalnız sayısal verilerden yararlanılmıştır", "Düşünceler karşılıklı konuşmalarla verilmiştir", "Bir kavramın sözlük anlamı açıklanmıştır"], "Metindeki ayrıntılar farklı duyuları harekete geçirerek mekânı canlandırmaktadır.", answer);
          } else {
            const tail = grade === 5 ? [] : grade === 6 ? [profile.main] : grade === 7 ? [profile.limit] : [profile.limit, profile.extension];
            const causeLead = grade === 5 ? "Parçada bir uygulamanın ortaya çıkardığı sonuç anlatılmaktadır" : grade === 6 ? "Aşağıdaki açıklamada uygulama ile sonuç arasındaki bağa dikkat edilmelidir" : grade === 7 ? "Metin, izlenen yöntemin ortaya çıkardığı sonucu gerekçeleriyle açıklamaktadır" : "Parçada yöntem, sınırlılık ve sonuç arasındaki neden ilişkisi birlikte kurulmaktadır";
            const text = joinSentences(causeLead, profile.intro, profile.detail, profile.method, profile.effect, ...tail);
            question = makeQuestion(grade, idNumber, "Neden-sonuç ilişkisi", difficulty, text, "Metindeki temel neden-sonuç ilişkisi aşağıdakilerin hangisinde doğru verilmiştir?", `${trimPeriod(profile.method)} / ${trimPeriod(profile.effect)}`, [`${trimPeriod(profile.effect)} / ${trimPeriod(profile.method)}`, `${trimPeriod(profile.falseClaim)} / ${trimPeriod(profile.detail)}`, `${trimPeriod(profile.detail)} / ${trimPeriod(profile.intro)}`], "Uygulanan yöntem neden, ortaya çıkan durum ise sonuç olarak verilmiştir.", answer);
          }
        } else if (typeKey === "purpose") {
          question = makeQuestion(grade, idNumber, "Metnin yazılış amacı", difficulty, baseText, "Bu metnin yazılış amacı aşağıdakilerden hangisidir?", purpose(profile), [`${upperFirst(profile.subject)} konusunda bütün uygulamaları kanıtsız biçimde reddetmek`, `${upperFirst(profile.subject)} ile ilgili bir ürünü satın almaya yönlendirmek`, `${upperFirst(profile.subject)} hakkında yalnız tarih ve kişi adlarını sıralamak`], "Metnin içeriği ve anlatım biçimi doğru seçenekteki amaca yöneliktir.", answer);
        } else if (typeKey === "summary") {
          question = makeQuestion(grade, idNumber, "Özetleme", difficulty, baseText, "Bu metni en iyi özetleyen cümle aşağıdakilerden hangisidir?", profile.main, [profile.detail, profile.effect, profile.falseClaim], "Doğru seçenek ayrıntılara sapmadan metnin temel iletisini kapsamaktadır.", answer);
        } else if (typeKey === "narration") {
          const correct = narrationMode(profile.kind);
          const distractors = ["Açıklama", "Öyküleme", "Betimleme", "Tartışma"].filter((item) => item !== correct).slice(0, 3);
          question = makeQuestion(grade, idNumber, "Anlatım biçimleri", difficulty, baseText, "Bu metinde ağır basan anlatım biçimi aşağıdakilerden hangisidir?", correct, distractors, `Metnin kuruluşu ve amacı ${correct.toLocaleLowerCase("tr-TR")} biçimini öne çıkarmaktadır.`, answer);
        } else if (typeKey === "language") {
          const claims = {
            expository: { wrong: "Olay çevresinde gelişen öyküleyici anlatım ağır basmaktadır", rights: ["Bilgi vermeye yönelik bir anlatım kullanılmıştır", "Neden-sonuç ilişkilerine yer verilmiştir", "Açıklayıcı ayrıntılardan yararlanılmıştır"] },
            narrative: { wrong: "Bilimsel bir kavram yalnız sayısal verilerle açıklanmıştır", rights: ["Olaylar oluş sırasına göre verilmiştir", "Hareket bildiren fiiller kullanılmıştır", "Üçüncü kişi anlatımına başvurulmuştur"] },
            descriptive: { wrong: "Bir sorun aşamalı işlemlerle çözüme ulaştırılmıştır", rights: ["Birden fazla duyuya seslenilmiştir", "Niteleyici sözcüklerden yararlanılmıştır", "Mekâna ilişkin ayrıntılar aktarılmıştır"] }
          }[profile.kind];
          question = makeQuestion(grade, idNumber, "Dil ve anlatım", difficulty, baseText, "Bu metnin dil ve anlatımıyla ilgili aşağıdakilerden hangisi söylenemez?", claims.wrong, claims.rights, "Doğru seçenek metnin anlatım biçimi ve kuruluşuyla uyuşmamaktadır.", answer);
        } else if (typeKey === "compareCommon") {
          const text = `I. metin: ${joinSentences(...compareFields(profile, grade, "common"))}\n\nII. metin: ${joinSentences(...compareFields(kindNeighbor, grade, "common"))}`;
          question = makeQuestion(grade, idNumber, "Metin karşılaştırma", difficulty, text, "Bu iki metnin ortak yönü aşağıdakilerden hangisidir?", commonDirection(profile), ["Her ikisinin de aynı kişileri ve aynı olayı anlatması", "İki metnin de yalnız ürün tanıtımı amacı taşıması", "Her ikisinin de ele aldığı konuyu hiçbir kanıt sunmadan reddetmesi"], "İki metnin içerik ve anlatım bakımından ortak yönü doğru seçenekte verilmiştir.", answer);
        } else if (typeKey === "compareDiff") {
          const text = `I. metin: ${joinSentences(...compareFields(profile, grade, "difference"))}\n\nII. metin: ${joinSentences(...compareFields(neighbor1, grade, "difference"))}`;
          question = makeQuestion(grade, idNumber, "Metin karşılaştırma", difficulty, text, "Bu iki metin arasındaki fark aşağıdakilerin hangisinde doğru verilmiştir?", `Birinci metin ${profile.subject}, ikinci metin ${neighbor1.subject} üzerinde durmaktadır`, [`Birinci metin ${neighbor1.subject}, ikinci metin ${profile.subject} üzerinde durmaktadır`, "İki metin aynı özel konuyu aynı örneklerle açıklamaktadır", "Birinci metin yalnız bir reklamı, ikinci metin yalnız bir masalı aktarmaktadır"], "Metinlerin aynı geniş alan içinde odaklandığı özel konular farklıdır.", answer);
        } else if (typeKey === "split") {
          const text = numbered([profile.intro, detailFor(profile, grade), neighbor1.intro, detailFor(neighbor1, grade)]);
          question = makeQuestion(grade, idNumber, "Paragrafı ikiye ayırma", difficulty, text, "Bu metin iki paragrafa ayrılmak istendiğinde ikinci paragraf numaralanmış cümlelerin hangisiyle başlar?", "III", ["I", "II", "IV"], "İlk iki cümlede bir konu, III. cümleden itibaren aynı alandaki başka bir konu işlenmektedir.", answer);
        } else if (typeKey === "insert") {
          const conclusion = grade === 5 ? profile.main : grade === 6 ? `${trimPeriod(profile.main)}; ancak ${lowerFirst(profile.limit)}` : grade === 7 ? `${trimPeriod(profile.main)}; ayrıca ${lowerFirst(profile.extension)}` : `${trimPeriod(profile.extension)}; sonuç olarak ${lowerFirst(profile.main)}`;
          const text = `${numbered([profile.intro, profile.detail, profile.effect, conclusion])}\n\n“Bu süreçte izlenen yol şöyledir: ${sentence(lowerFirst(profile.method))}”`;
          question = makeQuestion(grade, idNumber, "Cümle yerleştirme", difficulty, text, "Tırnak içinde verilen cümle düşüncenin akışına göre numaralanmış cümlelerin hangisinden sonra getirilmelidir?", "II. cümleden sonra", ["I. cümleden sonra", "III. cümleden sonra", "IV. cümleden sonra"], "Yöntemi açıklayan cümle ayrıntıdan sonra ve yöntemin sonucu verilmeden önce gelmelidir.", answer);
        } else if (typeKey === "evidence") {
          const evidenceDetail = grade === 5 ? profile.detail : grade === 6 ? profile.limit : grade === 7 ? profile.extension : `${trimPeriod(profile.detail)}; ayrıca ${lowerFirst(profile.extension)}`;
          const text = numbered([profile.intro, evidenceDetail, profile.method, profile.effect]);
          question = makeQuestion(grade, idNumber, "Kanıt ve sonuç", difficulty, text, `“${trimPeriod(profile.effect)}” yargısı numaralanmış cümlelerin hangisinde doğrudan verilmiştir?`, "IV", ["I", "II", "III"], "Aranan sonuç IV. cümlede doğrudan ifade edilmiştir.", answer);
        } else {
          const correct = profile.kind === "expository" ? "Bilgilendirici ve ölçülü" : profile.kind === "narrative" ? "Gözlemci ve çözüm odaklı" : "Duyusal ayrıntılara önem veren";
          const distractors = profile.kind === "expository" ? ["Alaycı ve küçümseyici", "Kanıtsız ve korkutucu", "Öfkeli ve suçlayıcı"] : profile.kind === "narrative" ? ["Karamsar ve çaresiz", "Küçümseyici ve alaycı", "İlgisiz ve kayıtsız"] : ["Sayısal ve tartışmacı", "Buyurgan ve sert", "Alaycı ve küçümseyici"];
          question = makeQuestion(grade, idNumber, "Yazarın tutumu", difficulty, baseText, "Bu metinde yazarın konuya yaklaşımı aşağıdakilerden hangisidir?", correct, distractors, "Metnin sözcük seçimi ve anlatım amacı yazarın yaklaşımını göstermektedir.", answer);
        }

        generated.push(question);
        serial += 1;
      });
    }

    return generated;
  }

  for (const grade of [5, 6, 7, 8]) {
    const key = `PARAGRAPH${grade}_REVIEW_QUESTIONS`;
    const current = Array.isArray(window[key]) ? window[key] : [];
    window[key] = [...current, ...buildGrade(grade)];
  }
})();
