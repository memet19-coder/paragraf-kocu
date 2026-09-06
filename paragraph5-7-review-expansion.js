(() => {
  const profiles = [
    { kind: "expository", subject: "yerel tohumların saklanması", title: "Geleceğe Ayrılan Tohumlar", intro: "Yerel tohumlar yetiştikleri bölgenin iklimine uzun yıllar içinde uyum sağlar", detail: "Tohum evlerinde çiftçilerden alınan örnekler adları ve toplandıkları yerlerle birlikte kaydedilir", method: "Sağlıklı tohumlar nemden korunarak uygun sıcaklıkta saklanır ve belirli aralıklarla yeniden ekilir", effect: "Böylece hem çeşitlerin canlılığı sınanır hem de kaybolma tehlikesi azaltılır", limit: "Kaynağı yazılmadan biriktirilen tohumların özelliklerini sonradan belirlemek güçleşir", main: "Yerel tohumların korunması düzenli kayıt ve bakım gerektiren uzun süreli bir çalışmadır", falseClaim: "Yerel tohumlar etiketlenmeden ve kontrol edilmeden yıllarca saklanabilir" },
    { kind: "expository", subject: "gezici kütüphanelerin okurlara ulaşması", title: "Kitapların Çıktığı Yolculuk", intro: "Gezici kütüphaneler kitapları sabit bir binaya ulaşamayan okurların ayağına götürür", detail: "Araçtaki raflarda farklı yaşlara ve ilgi alanlarına uygun eserler bulunur", method: "Görevliler durakları önceden duyurur, ödünç alınan kitapları bir sonraki gelişte teslim alır", effect: "Bu düzen köylerde ve uzak mahallelerde yaşayanların düzenli okuma alışkanlığı kazanmasını kolaylaştırır", limit: "Okurların gereksinimleri izlenmezse araçta bulunan kitaplar kısa sürede yetersiz kalabilir", main: "Gezici kütüphaneler planlı çalıştığında kitapla okur arasındaki uzaklığı azaltır", falseClaim: "Gezici kütüphaneler yalnız büyük kentlerin merkezlerinde hizmet verir" },
    { kind: "expository", subject: "göçmen kuşların dinlenme alanları", title: "Uzun Yolun Sessiz Durakları", intro: "Göçmen kuşlar binlerce kilometrelik yolculuklarını tek seferde tamamlayamaz", detail: "Sulak alanlar kuşlara beslenme, su içme ve enerji toplama fırsatı sunar", method: "Gözlemciler kuşların geliş tarihlerini ve alanda ne kadar kaldıklarını her yıl kaydeder", effect: "Bu bilgiler göç yollarındaki önemli durakların korunmasına yardımcı olur", limit: "Dinlenme alanlarının küçülmesi kuşların yolculuğu tamamlamasını zorlaştırabilir", main: "Göçmen kuşların yaşamını sürdürmesi yol üzerindeki güvenli dinlenme alanlarının korunmasına bağlıdır", falseClaim: "Göçmen kuşlar uzun yolculuklarında hiçbir yerde durmaya ihtiyaç duymaz" },
    { kind: "expository", subject: "çömlek yapımında kurutma ve pişirme", title: "Çamurdan Sağlam Bir Kaba", intro: "Çömlek ustası biçim verdiği kabı hemen fırına koymaz", detail: "Yaş çamur önce gölgede ve yavaşça kurutulur", method: "Kuruyan kaplar aralarında boşluk bırakılarak fırına yerleştirilir ve sıcaklık aşamalı olarak yükseltilir", effect: "Bu işlemler kabın çatlamadan sertleşmesini sağlar", limit: "Fırının birden ısıtılması ya da soğutulması kapların kırılmasına yol açabilir", main: "Sağlam bir çömlek elde etmek biçim vermek kadar sabırlı kurutma ve kontrollü pişirme gerektirir", falseClaim: "Çömlek ne kadar hızlı kurutulursa o kadar dayanıklı olur" },
    { kind: "expository", subject: "yağmur suyunun evlerde değerlendirilmesi", title: "Çatıdan Depoya Düşen Su", intro: "Çatılara düşen yağmur suyu uygun bir düzenekle depolara yönlendirilebilir", detail: "Süzgeçler yaprak ve taş parçalarının depoya girmesini önler", method: "Toplanan su bahçe sulama ve temizlik gibi içme dışındaki işlerde kullanılır", effect: "Bu uygulama şebeke suyuna duyulan gereksinimi azaltır", limit: "Bakımı yapılmayan depolardaki su doğrudan kullanıma uygun olmayabilir", main: "Yağmur suyu doğru biçimde toplanıp uygun işlerde kullanıldığında önemli bir tasarruf sağlar", falseClaim: "Depolanan yağmur suyu hiçbir kontrol yapılmadan her amaçla kullanılabilir" },
    { kind: "expository", subject: "gölge oyununun hazırlanması", title: "Perdenin Ardındaki Emek", intro: "Gölge oyununda izleyicinin gördüğü hareketli görüntüler ince bir perdenin arkasında oluşturulur", detail: "Tasvir adı verilen renkli şekiller ışık kaynağı ile perde arasında hareket ettirilir", method: "Oyuncu bir yandan tasvirleri yönetirken bir yandan karakterleri farklı seslerle konuşturur", effect: "Işık, hareket ve ses birleşince perdede canlı bir hikâye ortaya çıkar", limit: "Işığın yanlış yere konması şekillerin bulanık görünmesine neden olur", main: "Gölge oyunu farklı becerilerin aynı anda ve uyum içinde kullanılmasına dayanan bir sahne sanatıdır", falseClaim: "Gölge oyununda görüntülerin oluşması için ışığa gerek yoktur" },
    { kind: "expository", subject: "okul bahçesinde sebze yetiştirme", title: "Toprakla Öğrenilen Ders", intro: "Okul bahçesinde kurulan küçük bostan öğrencileri toprağın değişimini yakından izlemeye çağırır", detail: "Her bitkinin su ve güneş gereksinimi aynı değildir", method: "Öğrenciler ekim tarihlerini, sulama günlerini ve bitkilerin boylarını bir çizelgeye kaydeder", effect: "Bu çalışma sorumluluk duygusunu geliştirirken doğadaki değişimlerin gözlenmesini sağlar", limit: "Görevler paylaşılmazsa bazı bitkiler fazla, bazıları ise az sulanabilir", main: "Okul bostanı planlı bakım sayesinde doğa bilgisini sorumlulukla birleştiren bir öğrenme alanına dönüşür", falseClaim: "Okul bostanındaki bütün bitkiler aynı miktarda suya ihtiyaç duyar" },
    { kind: "expository", subject: "deniz fenerlerinin gemilere yol göstermesi", title: "Kıyıdaki Işıklı İşaret", intro: "Deniz fenerleri özellikle gece ve sisli havalarda kıyının yerini gemilere bildirir", detail: "Her fenerin ışık rengi ve yanıp sönme aralığı farklı olabilir", method: "Denizciler haritalardaki işaretlerle uzaktan gördükleri ışık düzenini karşılaştırır", effect: "Böylece hangi kıyıya yaklaştıklarını anlayıp rotalarını güvenli biçimde düzenler", limit: "Fenerler yardımcı olsa da güncel haritaların ve seyir araçlarının yerini tek başına tutmaz", main: "Deniz fenerleri kendilerine özgü ışık düzenleriyle güvenli seyre katkı sağlayan önemli kıyı işaretleridir", falseClaim: "Bütün deniz fenerleri aynı biçimde yanıp söner" },
    { kind: "expository", subject: "arılar için kentte barınak oluşturma", title: "Küçük Tozlaştırıcılara Bir Durak", intro: "Bazı yabani arılar bal arıları gibi büyük kovanlarda yaşamaz", detail: "Bu arılar içi boş kamışlara ya da kuru ağaçlardaki küçük deliklere yuva yapar", method: "Kentte hazırlanan arı otelleri yağmurdan korunan ve çiçekli bitkilere yakın yerlere yerleştirilir", effect: "Uygun barınaklar tozlaştırıcıların kentte yaşamını sürdürmesine katkı sağlar", limit: "Kirli ve nemli bırakılan barınaklar yarar yerine hastalık riski oluşturabilir", main: "Arı otelleri doğru hazırlanıp düzenli temizlendiğinde yabani arılara güvenli yuvalar sunabilir", falseClaim: "Arı otelleri bakım yapılmasa da her zaman güvenli kalır" },
    { kind: "expository", subject: "arkeolojik kazılarda buluntuların kaydedilmesi", title: "Toprağın Altındaki Bilgi", intro: "Arkeolojik kazıda bulunan bir eşyanın değeri yalnız görünüşünden gelmez", detail: "Eşyanın hangi toprak katmanında ve hangi nesnelerin yanında bulunduğu geçmişi anlamak için önemlidir", method: "Kazı ekibi her buluntunun yerini ölçer, fotoğrafını çeker ve numarasını kaydeder", effect: "Bu kayıtlar farklı buluntular arasındaki ilişkinin kurulmasını sağlar", limit: "Yeri kaydedilmeden çıkarılan bir nesne tarihsel bilgisinin büyük bölümünü kaybeder", main: "Arkeolojik buluntular ancak bulundukları bağlam dikkatle kaydedildiğinde geçmiş hakkında güvenilir bilgi verir", falseClaim: "Bir arkeolojik eşyanın bulunduğu yerin kaydedilmesi önemli değildir" },
    { kind: "expository", subject: "eski kitapların onarılması", title: "Yıpranan Sayfalara Özen", intro: "Eski bir kitabı onarmak onu yeni görünür hâle getirmek anlamına gelmez", detail: "Uzmanlar önce kâğıdın, mürekkebin ve cildin durumunu inceler", method: "Yırtıklar kitaba zarar vermeyen ince malzemelerle desteklenir ve eksik bölümler ölçülü biçimde tamamlanır", effect: "Böylece eser özgün yapısı korunarak yeniden kullanılabilir", limit: "Güçlü yapıştırıcılar ve yanlış temizlik yöntemleri geri dönüşü olmayan hasarlar bırakabilir", main: "Kitap onarımı eserin özgünlüğünü koruyan dikkatli ve ölçülü uygulamalar gerektirir", falseClaim: "Eski kitaplar güçlü yapıştırıcılarla hızla onarılmalıdır" },
    { kind: "expository", subject: "sözlü tarih çalışmalarında anıların kullanılması", title: "Anlatılan Geçmişi Kaydetmek", intro: "Sözlü tarih çalışmaları geçmişte yaşananları insanların anılarından dinlemeye dayanır", detail: "Aynı olayı yaşayan kişiler ayrıntıları farklı biçimde hatırlayabilir", method: "Araştırmacı görüşmeleri kaydeder, anlatılanları fotoğraf ve yazılı belgelerle karşılaştırır", effect: "Bu yöntem günlük yaşamın resmî kayıtlara girmeyen yönlerini görünür kılar", limit: "Tek bir kişinin anlatısı bütün geçmişi eksiksiz temsil etmeyebilir", main: "Sözlü tarih anıları değerli bir kaynak olarak kullanırken onları başka kanıtlarla karşılaştırmayı gerektirir", falseClaim: "Bir kişinin anısı geçmişi tek başına ve eksiksiz biçimde kanıtlar" },
    { kind: "expository", subject: "güvenli bisiklet yollarının planlanması", title: "Pedallar İçin Güvenli Hat", intro: "Bir bisiklet yolunun yalnızca zemine çizgi çekilerek oluşturulması yeterli değildir", detail: "Yolun kavşaklarda görünür olması ve araç kapılarından uzak geçmesi gerekir", method: "Planlamacılar bisikletlilerin en çok kullandığı yönleri ve tehlikeli noktaları gözlemleyerek güzergâh belirler", effect: "Kesintisiz ve anlaşılır yollar daha çok kişinin bisikleti güvenle kullanmasını sağlar", limit: "Aniden biten şeritler bisikletliyi yoğun araç trafiğiyle karşı karşıya bırakabilir", main: "Güvenli bisiklet yolu bütün güzergâhı kapsayan dikkatli bir planlamayla oluşturulur", falseClaim: "Kısa bir yol çizgisi güvenli bisiklet ulaşımı için tek başına yeterlidir" },
    { kind: "expository", subject: "sulak alanların doğal dengeye katkısı", title: "Suyla Kara Arasındaki Yaşam", intro: "Sulak alanlar kara ile su ekosistemleri arasında özel bir geçiş bölgesidir", detail: "Sazlıklar birçok kuşa yuva, balıklara ve böceklere beslenme alanı sunar", method: "Uzmanlar su düzeyini ve alandaki canlı çeşitliliğini mevsimlere göre izler", effect: "Doğal yapısını koruyan sulak alanlar taşkın suyunu yayarak çevreyi de korur", limit: "Suyun yönünün değiştirilmesi birbirine bağlı çok sayıda canlıyı etkileyebilir", main: "Sulak alanlar hem canlı çeşitliliği hem de su dengesi için korunması gereken çok yönlü yaşam alanlarıdır", falseClaim: "Sulak alanların çevredeki su dengesi üzerinde hiçbir etkisi yoktur" },
    { kind: "expository", subject: "yıldız gözleminde karanlık gökyüzü", title: "Işıklardan Uzak Bir Gökyüzü", intro: "Kent ışıkları gece gökyüzündeki sönük yıldızların görülmesini zorlaştırır", detail: "Havaya yayılan gereksiz ışık gökyüzünde parlak bir tabaka oluşturur", method: "Gözlemciler açık havada, çevresinde az ışık bulunan yüksek noktaları tercih eder", effect: "Karanlık bir ortamda daha çok yıldız ve gök cismi seçilebilir", limit: "Ayın çok parlak olduğu gecelerde de sönük cisimleri görmek güçleşir", main: "Başarılı bir yıldız gözlemi uygun hava kadar yapay ışıktan uzak bir ortam seçmeyi gerektirir", falseClaim: "Kent merkezindeki güçlü ışıklar sönük yıldızların daha kolay görülmesini sağlar" },
    { kind: "expository", subject: "harita işaretlerinin doğru okunması", title: "Küçük İşaretlerin Büyük Anlamı", intro: "Haritalar gerçek alanları küçülterek ve simgelerle gösterir", detail: "Yol, akarsu, yükselti ve yerleşim yeri farklı renk ya da işaretlerle belirtilir", method: "Haritayı kullanan kişi önce açıklama bölümünü ve ölçeği inceler", effect: "Bu bilgiler uzaklıkların ve yönlerin doğru yorumlanmasını sağlar", limit: "Simgelerin anlamı bilinmeden yapılan yorumlar kişiyi yanlış bir sonuca götürebilir", main: "Haritadan doğru bilgi edinmek simgeleri, yönleri ve ölçeği birlikte okumaya bağlıdır", falseClaim: "Haritadaki simgeler açıklama bölümüne bakmadan her zaman doğru anlaşılır" },
    { kind: "expository", subject: "ekşi mayalı ekmeğin hazırlanması", title: "Mayalanan Hamurun Sabrı", intro: "Ekşi maya un ve su içindeki yararlı mikroorganizmaların etkinliğiyle canlı kalır", detail: "Mayanın düzenli aralıklarla un ve suyla beslenmesi gerekir", method: "Yoğrulan hamur uygun sıcaklıkta dinlendirilir ve kabarması için acele edilmez", effect: "Yavaş mayalanma ekmeğin dokusunu ve kokusunu geliştirir", limit: "Çok sıcak ortam mayanın dengesini bozabilir ve hamurun gereğinden hızlı ekşimesine yol açabilir", main: "Ekşi mayalı ekmek hazırlamak düzenli bakım, uygun sıcaklık ve sabır gerektirir", falseClaim: "Ekşi maya hiç beslenmeden canlılığını sürekli korur" },
    { kind: "expository", subject: "bir müzik topluluğunda uyum", title: "Aynı Ezgide Buluşmak", intro: "Bir müzik topluluğunda her çalgının sesi ve görevi farklıdır", detail: "Müzisyen yalnız kendi bölümünü doğru çalmakla yetinmez, diğer çalgıları da dinler", method: "Provalarda tempo, ses yüksekliği ve giriş anları birlikte çalışılır", effect: "Bu dikkat ayrı seslerin dengeli bir bütün oluşturmasını sağlar", limit: "Bir çalgının sürekli öne çıkması ezginin dengesini bozabilir", main: "Toplu müzikte başarı bireysel becerinin karşılıklı dinleme ve ortak çalışmayla birleşmesine bağlıdır", falseClaim: "Bir toplulukta her müzisyen diğerlerini dinlemeden yalnız kendi bölümünü çalmalıdır" },
    { kind: "expository", subject: "herkes için erişilebilir tasarım", title: "Engelleri Azaltan Tasarım", intro: "Erişilebilir tasarım bir ürünü ya da alanı farklı gereksinimleri olan kişilerin kullanabilmesini amaçlar", detail: "Rampalar, sesli uyarılar ve okunaklı yönlendirmeler farklı kullanıcıların hareketini kolaylaştırır", method: "Tasarımcılar çözüm geliştirmeden önce kullanıcıların karşılaştığı güçlükleri gözlemler", effect: "Başlangıçta düşünülmüş erişilebilirlik sonradan yapılacak pahalı değişiklikleri de azaltır", limit: "Yalnız tek bir kullanıcı grubunu düşünmek yeni engeller ortaya çıkarabilir", main: "İyi tasarım farklı kullanıcıların gereksinimlerini en başından birlikte değerlendirmelidir", falseClaim: "Erişilebilirlik yalnız binalar tamamlandıktan sonra düşünülmesi gereken bir ayrıntıdır" },
    { kind: "expository", subject: "semt pazarlarında gıda israfının azaltılması", title: "Tezgâhtan Çöpe Gitmeyen Ürünler", intro: "Semt pazarlarında görünüşü kusurlu olduğu için satılmayan birçok sebze ve meyve kalabilir", detail: "Biçimi farklı ürünlerin besin değeri çoğu zaman diğerlerinden az değildir", method: "Bazı pazarlar yenilebilir durumdaki ürünleri gün sonunda ayırıp ihtiyaç sahiplerine ulaştırır", effect: "Bu uygulama hem gıda israfını hem de çöpe taşınan atık miktarını azaltır", limit: "Bozulmuş ürünlerle yenilebilir olanlar dikkatle ayrılmadığında sağlık riski doğabilir", main: "Pazarlardaki yenilebilir ürünlerin doğru ayrılıp değerlendirilmesi gıda israfını azaltabilir", falseClaim: "Görünüşü düzgün olmayan bütün ürünler tüketilemez durumdadır" },
    { kind: "narrative", subject: "kaybolan bir defterin dikkatle aranması", title: "Sıranın Altındaki İz", intro: "Mert, teneffüsten dönünce not defterini sırasında bulamadı", detail: "Önce telaşla çantasını boşalttı, sonra son derste gittiği yerleri düşünmeye başladı", method: "Kütüphanedeki masanın altında kendi kaleminden düşmüş küçük bir etiket görünce görevliye haber verdi", effect: "Defterin teslim masasında olduğunu öğrenen Mert acele etmek yerine izleri sırayla takip etmenin işe yaradığını anladı", limit: "Arkadaşlarını suçlasaydı hem zaman kaybedecek hem de onları kıracaktı", main: "Bir sorun karşısında sakin kalıp eldeki ipuçlarını sırayla değerlendirmek çözüme ulaşmayı kolaylaştırır", falseClaim: "Mert defterini bulmak için arkadaşlarını suçlamıştır" },
    { kind: "narrative", subject: "köy otobüsünde yapılan küçük bir yardımlaşma", title: "Yolculuktaki Boş Koltuk", intro: "Elif sabah köy otobüsüne bindiğinde yaşlı bir yolcunun elindeki ağır çantaları fark etti", detail: "Otobüs kalabalık olduğu için yolcu hem tutunmakta hem de çantalarını taşımakta zorlanıyordu", method: "Elif yerini verdi, çantalardan birini de ineceği durağa kadar taşıdı", effect: "Yolcunun rahatladığını gören diğer öğrenciler de araçtan inerken ona yardım etti", limit: "Elif çevresine dikkat etmese yolcunun güçlüğünü fark etmeyecekti", main: "Çevremizdeki insanların gereksinimlerini fark etmek küçük bir davranışı ortak bir yardımlaşmaya dönüştürebilir", falseClaim: "Otobüsteki öğrenciler yaşlı yolcunun güçlüğünü görmezden gelmiştir" },
    { kind: "narrative", subject: "müzede bir ayrıntının peşine düşme", title: "Küçük Mührün Hikâyesi", intro: "Duru, müzede büyük heykellerden çok cam vitrindeki küçük bir mühre takıldı", detail: "Mührün yanındaki etikette onun eski mektupları kapatmak için kullanıldığı yazıyordu", method: "Duru görevliye sorular sordu ve başka vitrinlerde aynı işareti taşıyan mektupları aradı", effect: "Gezinin sonunda küçücük bir eşyanın geçmişteki haberleşme biçimini anlatabildiğini fark etti", limit: "Yalnız uzaktan bakıp geçseydi mührün ne işe yaradığını anlayamayacaktı", main: "Merakla sorulan sorular sıradan görünen bir ayrıntıyı anlamlı bir öğrenme fırsatına dönüştürür", falseClaim: "Duru müzedeki açıklamaları okumadan yalnız heykellerle ilgilenmiştir" },
    { kind: "narrative", subject: "karlı bir günde dayanışma", title: "Kar Altındaki Yol", intro: "Gece yağan kar sabah okul yolunu bütünüyle kapatmıştı", detail: "Mahalleli kapılarının önünü açsa da yokuşun başındaki dar geçit hâlâ kullanılamıyordu", method: "Çocuklar ve yetişkinler kürekleri paylaşıp geçidi iki yönden temizlemeye başladı", effect: "Kısa sürede yol açıldı ve herkes güvenle durağa ulaşabildi", limit: "Her aile yalnız kendi kapısının önünü düşünseydi ortak yol kapalı kalacaktı", main: "Ortak bir sorun ancak herkes kendi payına düşen işi üstlendiğinde daha kolay çözülebilir", falseClaim: "Mahalledeki herkes yalnız kendi evinin önünü temizlemiştir" },
    { kind: "narrative", subject: "bozulan saati onarmaya çalışan bir çocuk", title: "Duran Akrebin Sırrı", intro: "Arda dedesinin eski duvar saatinin birden durduğunu görünce onu hemen açmak istedi", detail: "Dedesi önce saatin ne zaman durduğunu ve daha önce nasıl ses çıkardığını düşünmesini söyledi", method: "İkisi pili, bağlantıları ve gevşeyen parçaları sırayla kontrol etti", effect: "Sorunun küçük bir temas noktasından kaynaklandığını bulup saati yeniden çalıştırdılar", limit: "Parçaları gelişigüzel sökselerdi saati daha fazla bozabilirlerdi", main: "Bir arızayı çözmek aceleyle müdahale etmekten önce dikkatli gözlem ve düzenli kontrol gerektirir", falseClaim: "Arda saatin bütün parçalarını düşünmeden sökmüştür" },
    { kind: "narrative", subject: "tiyatro provasındaki iş birliği", title: "Perde Açılmadan Önce", intro: "Okul tiyatrosunun son provasında sahnenin ışıkları beklenmedik biçimde söndü", detail: "Oyuncular ilk anda durdu ancak öğretmen oyuna karanlıkta nasıl devam edebileceklerini sordu", method: "Bir grup el fenerlerini yerleştirirken diğerleri sahne girişlerini yeniden düzenledi", effect: "Prova tamamlandığında ekip beklenmedik bir soruna birlikte çözüm üretmenin güvenini yaşadı", limit: "Herkes yalnız kendi rolünü düşünseydi oyun yarıda kalacaktı", main: "Bir ekipte esneklik ve görev paylaşımı beklenmedik sorunların aşılmasını kolaylaştırır", falseClaim: "Işıklar sönünce prova hiçbir çözüm aranmadan bitirilmiştir" },
    { kind: "narrative", subject: "kıyı temizliğinde verilerin kullanılması", title: "Kumların Arasında Kalanlar", intro: "Zeynep ve arkadaşları kıyı temizliğine yalnız çöp toplamak için gittiklerini sanıyordu", detail: "Görevli her atığı türüne göre ayırıp saymalarını istedi", method: "Öğrenciler plastik kapakları, ip parçalarını ve metal kutuları ayrı torbalarda topladı", effect: "Günün sonunda en çok hangi atığın kıyıya ulaştığını gösteren bir tablo hazırladılar", limit: "Atıklar birbirine karıştırılsaydı kirliliğin kaynağı hakkında yorum yapmak zorlaşacaktı", main: "Çevre çalışmaları temizlik kadar gözlem ve kayıt yoluyla sorunun kaynağını anlamayı da gerektirir", falseClaim: "Öğrenciler topladıkları bütün atıkları saymadan aynı torbaya koymuştur" },
    { kind: "narrative", subject: "aileden kalan tohumların paylaşılması", title: "Büyükannenin Küçük Keseleri", intro: "Selin büyükannesinin dolabında adları yazılı küçük bez keseler buldu", detail: "Keselerde yıllardır aynı bahçede yetiştirilen fasulye ve domates tohumları vardı", method: "Büyükannesi en sağlıklı bitkilerden aldığı tohumları kurutup komşularıyla paylaştığını anlattı", effect: "Selin de tohumların bir bölümünü okul bostanında yetiştirmek için izin istedi", limit: "Keselerin üzerindeki adlar silinseydi hangi tohumun nereden geldiği bilinmeyecekti", main: "Kuşaktan kuşağa aktarılan bilgi ve düzenli kayıt yerel tohumların yaşamasını sağlar", falseClaim: "Büyükannenin sakladığı keselerin üzerinde hiçbir bilgi yoktur" },
    { kind: "narrative", subject: "kütüphanede sessizliği birlikte koruma", title: "Fısıltıyla Gelen Çözüm", intro: "Kütüphanedeki çalışma masasında oturan öğrenciler yan gruptan gelen sesler yüzünden metne odaklanamıyordu", detail: "Ece öfkelenmek yerine masaya küçük bir sessizlik kartı bırakmayı önerdi", method: "Kartın arkasına herkesin aynı ortamı paylaştığını hatırlatan nazik bir cümle yazdılar", effect: "Yan gruptaki öğrenciler sesi azalttı ve çıkarken kart için teşekkür etti", limit: "Sert bir uyarı iki grup arasında gereksiz bir tartışma çıkarabilirdi", main: "Ortak alanlardaki sorunlar saygılı ve açık bir iletişimle daha kolay çözülebilir", falseClaim: "Ece sorunu çözmek için yüksek sesle tartışmayı seçmiştir" },
    { kind: "narrative", subject: "doğa yürüyüşünde işaretleri izleme", title: "Patikadaki Kırmızı İzler", intro: "Can, doğa yürüyüşünde arkadaşlarının önüne geçince yol ayrımında hangi yöne gideceğini şaşırdı", detail: "Ağaç gövdelerindeki kırmızı işaretlerin aynı aralıklarla devam ettiğini fark etti", method: "Geri dönüp son işareti buldu ve haritadaki rota rengiyle karşılaştırdı", effect: "Doğru patikaya ulaştığında hızdan çok işaretleri dikkatle izlemenin önemli olduğunu anladı", limit: "Rastgele bir yola sapması gruptan daha fazla uzaklaşmasına neden olabilirdi", main: "Doğada güvenli ilerlemek acele etmek yerine yol işaretlerini ve haritayı dikkatle izlemeyi gerektirir", falseClaim: "Can hiçbir işarete bakmadan rastgele bir patikaya girmiştir" },
    { kind: "descriptive", subject: "sabah saatlerinde bir balıkçı limanı", title: "Güne Uyanan Liman", intro: "Güneş daha görünmeden limanın üzerine ince, mavimsi bir aydınlık yayıldı", detail: "Islak halatlar tahta iskeleye sürtünüyor, teknelerin bordalarına vuran su düzenli bir ses çıkarıyordu", method: "Balıkçılar tuz kokusuna karışan motor dumanı arasında ağlarını sessizce teknelere taşıdı", effect: "Martıların çığlığı yükseldikçe limanın ağır uykusu yerini hareketli bir sabaha bıraktı", limit: "Kıyının ötesindeki sis açık denizi hâlâ gözlerden saklıyordu", main: "Metin, sabah limanının ses, koku, renk ve hareketlerle yavaş yavaş canlanışını anlatmaktadır", falseClaim: "Liman öğle saatlerinde bütünüyle sessiz ve hareketsizdir" },
    { kind: "descriptive", subject: "sonbaharda bir ormanın görünümü", title: "Yaprakların Değişen Sesi", intro: "Ormanın girişinde sarı ve kızıl yapraklar toprağın üzerini yumuşak bir örtü gibi kaplamıştı", detail: "Her adımda kuru dallar çıtırdıyor, serin rüzgâr reçine kokusunu patikaya taşıyordu", method: "Güneş dalların arasından ince çizgiler hâlinde süzülüyor ve yosunlu taşları parlatıyordu", effect: "Uzakta akan derenin sesi ormanın sakinliğine kesintisiz bir ezgi katıyordu", limit: "Gölgede kalan çukurlarda sabahın ayazı henüz çözülmemişti", main: "Metinde sonbahar ormanı farklı duyulara seslenen ayrıntılarla betimlenmiştir", falseClaim: "Ormanda yalnız görme duyusuna ilişkin ayrıntılara yer verilmiştir" },
    { kind: "descriptive", subject: "eski bir tren istasyonunun görünümü", title: "Bekleyen İstasyon", intro: "Kasabanın eski istasyonu paslı tabelası ve solmuş duvarlarıyla rayların kıyısında sessizce duruyordu", detail: "Bilet gişesinin küçük penceresinde yılların bıraktığı ince çizikler seçiliyordu", method: "Rüzgâr perondaki kuru yaprakları sürüklüyor, gevşek çatı sacı arada bir tok bir ses çıkarıyordu", effect: "Uzakta duyulan tren düdüğü boş bankların çevresinde kısa süre dolaşıp kayboldu", limit: "İstasyonun saati hâlâ üçü gösteriyor ve sanki geçmiş bir yolculuğu bekliyordu", main: "Metin, eski bir istasyonun terk edilmiş görünümünü görsel ve işitsel ayrıntılarla yansıtmaktadır", falseClaim: "İstasyon yeni, kalabalık ve gürültülü bir yer olarak anlatılmıştır" },
    { kind: "descriptive", subject: "dağ yamacındaki bir köy", title: "Bulutlara Yakın Evler", intro: "Taş evler dağın yamacına basamak basamak dizilmişti", detail: "Dar sokaklardan yükselen odun kokusu, bacalardan çıkan ince dumanla serin havaya karışıyordu", method: "Çatılardaki yağmur damlaları oluklardan küçük derelere dönüşerek aşağı akıyordu", effect: "Vadiden gelen çan sesleri sisin içinde yumuşayıp evlerin arasına yayılıyordu", limit: "Köyün üstündeki bulutlar güneşi zaman zaman bütünüyle örtüyordu", main: "Metinde dağ köyünün doğayla iç içe görünümü farklı duyulara seslenen ayrıntılarla verilmiştir", falseClaim: "Köy geniş bir ovanın ortasında sıcak ve kurak bir yer olarak anlatılmıştır" },
    { kind: "descriptive", subject: "bir bakır ustasının çalışma ortamı", title: "Çekiç Sesli Atölye", intro: "Dar atölyenin duvarlarında irili ufaklı bakır tabaklar kızıl bir ışıkla parlıyordu", detail: "Ustanın çekici levhaya her vuruşunda kısa ve berrak bir ses tavana yükseliyordu", method: "Kömür ateşinin sıcaklığı kapıya kadar ulaşıyor, metal kokusu havada ağır ağır dolaşıyordu", effect: "Ustanın parmakları her vuruşta yüzeye yeni bir çizgi ekliyor ve desen yavaşça belirginleşiyordu", limit: "Tezgâhın köşesinde tamamlanmayı bekleyen kararmış kaplar sessizce sıralanmıştı", main: "Metin, bakır atölyesini ses, renk, koku ve hareket ayrıntılarıyla betimlemektedir", falseClaim: "Atölye yalnız sessizliğiyle anlatılmış ve hiçbir görsel ayrıntı verilmemiştir" },
    { kind: "argumentative", subject: "ekrandan ve kâğıttan okumanın birlikte değerlendirilmesi", title: "Okuma Aracı mı, Okuma Amacı mı?", intro: "Bazıları ekrandan okumanın her durumda kâğıttan okumaya göre daha yüzeysel olduğunu savunur; oysa sonucu yalnız araca bağlamak eksik bir değerlendirmedir", detail: "Kısa bir bilgi ararken ekranın hızı yararlı olabilir, uzun ve yoğun bir metinde ise not alma olanağı kâğıdı öne çıkarabilir", method: "Okur metnin uzunluğuna, amacına ve kendi dikkat durumuna göre araç seçmelidir", effect: "Bilinçli seçim her iki ortamda da anlamayı güçlendirebilir", limit: "Tek bir yöntemi bütün okuma görevleri için zorunlu saymak farklı gereksinimleri gözden kaçırır", main: "Okuma aracının değeri metnin amacı ve okurun gereksinimleriyle birlikte değerlendirilmelidir", falseClaim: "Bütün metinler yalnız kâğıttan okunursa anlaşılabilir" },
    { kind: "argumentative", subject: "ders çalışma planlarının esnek olması", title: "Plan Değişirse Başarı Bozulur mu?", intro: "Ders planına harfi harfine uymayan bir öğrencinin başarısız olacağı düşünülür; oysa iyi plan değişen koşullara uyum sağlayabilmelidir", detail: "Beklenmedik bir görev çıktığında süreler yeniden düzenlenebilir ancak temel hedefler korunur", method: "Öğrenci haftanın sonunda hangi işi neden ertelediğini değerlendirip yeni planını buna göre kurmalıdır", effect: "Esnek ama izlenen bir plan çalışma düzeninin bütünüyle bozulmasını önler", limit: "Her değişikliği bahane ederek hedefleri sürekli ertelemek esneklik değil plansızlıktır", main: "Etkili çalışma planı hedefleri korurken gerektiğinde bilinçli biçimde güncellenebilmelidir", falseClaim: "Bir çalışma planında hiçbir koşulda değişiklik yapılmamalıdır" },
    { kind: "argumentative", subject: "kentte oyun alanlarının gerekliliği", title: "Oyun İçin Ayrılan Yer", intro: "Kentlerde boş alanların yalnız otopark için kullanılması gerektiğini düşünenler vardır; ancak çocukların güvenli oyun alanlarına da ihtiyacı bulunur", detail: "Oyun alanları çocukların hareket etmesine, arkadaşlık kurmasına ve çevresini tanımasına imkân verir", method: "Bu alanlar farklı yaşlara uygun, gölgeli ve trafikten uzak biçimde planlanmalıdır", effect: "İyi düzenlenmiş parklar mahallenin bütün sakinleri için canlı bir buluşma noktasına dönüşür", limit: "Bakımı yapılmayan ve güvenliği düşünülmeyen alanlar beklenen yararı sağlamaz", main: "Kent planlamasında çocukların güvenli oyun gereksinimi temel bir ihtiyaç olarak ele alınmalıdır", falseClaim: "Kentlerdeki bütün boş alanlar yalnız araçlar için ayrılmalıdır" },
    { kind: "argumentative", subject: "toplu taşımanın kent yaşamındaki yeri", title: "Bir Araçtan Daha Fazlası", intro: "Kimi insanlar toplu taşımayı yalnız özel aracı olmayanların seçeneği sayar; oysa bu yaklaşım kentteki ortak yararı gözden kaçırır", detail: "Aynı yönde giden çok sayıda kişinin tek araçta yolculuk etmesi yoldaki araç sayısını azaltır", method: "Seferlerin düzenli, durakların erişilebilir ve aktarmaların kolay olması kullanım oranını artırır", effect: "Güçlü bir toplu taşıma sistemi trafik yoğunluğunu ve enerji tüketimini azaltabilir", limit: "Seyrek ve düzensiz seferler insanları yeniden özel araca yöneltir", main: "Toplu taşıma bütün kent için güvenilir ve erişilebilir bir ulaşım seçeneği olarak geliştirilmelidir", falseClaim: "Toplu taşımanın kent trafiği üzerinde hiçbir etkisi yoktur" },
    { kind: "argumentative", subject: "yerel ürünlerin bilinçli tüketilmesi", title: "Yakındaki Ürünün Değeri", intro: "Bir ürünün uzaktan gelmesi onun her zaman daha nitelikli olduğu anlamına gelmez", detail: "Mevsiminde yetişen yerel ürünler daha kısa bir taşıma yoluyla tüketiciye ulaşabilir", method: "Tüketici seçim yaparken ürünün üretim koşulunu, mevsimini ve gerçek gereksinimini birlikte düşünmelidir", effect: "Bilinçli tercih hem yerel üreticiyi destekler hem de gereksiz taşıma yükünü azaltabilir", limit: "Yalnız yerel etiketi taşıması bir ürünün her koşulda iyi üretildiğini kanıtlamaz", main: "Ürün seçiminde uzaklık tek ölçüt olmamalı, yerel üretimin koşulları ve gerçek ihtiyaç birlikte değerlendirilmelidir", falseClaim: "Uzaktan getirilen her ürün yerel üründen daha kalitelidir" },
    { kind: "expository", subject: "mercan beyazlamasının izlenmesi", title: "Rengini Yitiren Resif", intro: "Mercanlar dokularında yaşayan küçük canlılarla karşılıklı yarara dayalı bir ilişki kurar", detail: "Deniz suyu uzun süre normalden sıcak olduğunda mercanlar bu canlıları uzaklaştırıp beyaz görünebilir", method: "Araştırmacılar aynı bölgelerde su sıcaklığını ve mercanların renk değişimini düzenli olarak kaydeder", effect: "Erken belirlenen beyazlama alanları koruma çalışmalarının doğru yere yönelmesini sağlar", limit: "Beyazlayan her mercan hemen ölmese de olumsuz koşullar uzadıkça iyileşme ihtimali azalır", main: "Mercan beyazlaması denizdeki çevresel baskıyı gösteren ve düzenli izlenmesi gereken önemli bir uyarıdır", falseClaim: "Beyazlayan bütün mercanlar aynı anda kesin olarak ölür" },
    { kind: "expository", subject: "doğadaki seslerin haritalanması", title: "Seslerden Oluşan Harita", intro: "Bir bölgenin yalnız görüntüsü değil sesleri de çevresel değişimler hakkında bilgi verir", detail: "Kuş çağrıları, su sesi ve araç gürültüsü farklı noktalarda farklı yoğunlukta duyulur", method: "Araştırmacılar aynı saatlerde kayıt yapıp seslerin yerini ve süresini harita üzerinde işaretler", effect: "Tekrarlanan kayıtlar doğal seslerin azaldığı ya da gürültünün arttığı alanları gösterir", limit: "Rüzgârlı günlerde yapılan kayıtlar bazı seslerin olduğundan güçlü duyulmasına yol açabilir", main: "Ses haritaları düzenli ve karşılaştırılabilir kayıtlarla bir çevrenin zaman içindeki değişimini ortaya koyabilir", falseClaim: "Bir bölgenin sesleri çevresel değişimler hakkında hiçbir bilgi vermez" },
    { kind: "expository", subject: "mikroplastiklerin su kaynaklarında araştırılması", title: "Gözle Görülmeyen Plastik İzleri", intro: "Büyük plastik parçaları zamanla aşınıp çok küçük parçalara ayrılabilir", detail: "Mikroplastik adı verilen bu parçalar akarsulara ve göllere taşınabilir", method: "Araştırmacılar farklı noktalardan su örnekleri alıp özel filtrelerle parçacıkları ayırır", effect: "Örneklerin karşılaştırılması kirliliğin hangi bölgelerde yoğunlaştığını göstermeye yardımcı olur", limit: "Tek bir günde alınan örnek su kaynağındaki bütün değişimi temsil etmeyebilir", main: "Mikroplastik kirliliğini anlamak farklı yer ve zamanlarda düzenli örnekleme yapmayı gerektirir", falseClaim: "Tek bir su örneği bütün yılın kirlilik düzeyini kesin olarak gösterir" },
    { kind: "expository", subject: "kent ağaçlarının doğru planlanması", title: "Sokağın Sessiz Koruyucuları", intro: "Kent ağaçları gölge sağlamanın yanında havadaki bazı parçacıkları tutar ve yağmur suyunun toprağa karışmasına yardım eder", detail: "Her ağaç türünün kök yapısı, su ihtiyacı ve taç genişliği farklıdır", method: "Uzmanlar dikimden önce kaldırım genişliğini, altyapıyı ve sokağın güneş alma durumunu inceler", effect: "Doğru tür doğru yere dikildiğinde ağaç uzun yıllar sağlıklı kalır ve çevresine yarar sağlar", limit: "Dar alana uygun olmayan türler kökleriyle zemine zarar verebilir", main: "Kent ağaçlarından kalıcı yarar sağlamak tür özellikleriyle dikilecek yerin koşullarını birlikte değerlendirmeye bağlıdır", falseClaim: "Bütün ağaç türleri her sokakta aynı başarıyla yetişir" },
    { kind: "expository", subject: "güneş ocağıyla yemek pişirme", title: "Güneşle Isınan Tencere", intro: "Güneş ocakları ışığı koyu renkli bir kabın çevresinde toplayarak ısıya dönüştürür", detail: "Yansıtıcı yüzeyler ışığı kaba yönlendirirken saydam kapak içerideki sıcaklığın korunmasına yardım eder", method: "Ocak güneşe doğru çevrilir ve gölgeye düşmemesi için belirli aralıklarla kontrol edilir", effect: "Açık ve güneşli havada yakıt kullanmadan bazı yiyecekler pişirilebilir", limit: "Bulutlu havada ya da yanlış açıyla yerleştirildiğinde yeterli sıcaklığa ulaşmak güçleşir", main: "Güneş ocağının verimli çalışması ışığın doğru toplanmasına ve düzenli yönlendirmeye bağlıdır", falseClaim: "Güneş ocağı kapalı ve karanlık bir ortamda aynı verimle çalışır" },
    { kind: "expository", subject: "işaret dilinde yüz ifadelerinin rolü", title: "Ellerden Fazlasını Anlatmak", intro: "İşaret dili yalnız el hareketlerinden oluşan bir iletişim sistemi değildir", detail: "Yüz ifadesi, bakış yönü ve beden duruşu söylenenin anlamını değiştirebilir", method: "İşaret dili öğrenen kişi el biçimlerini bu hareketlerle birlikte çalışır", effect: "Bütün ögelerin uyumlu kullanılması düşüncenin açık ve doğru aktarılmasını sağlar", limit: "Yüz ifadesini göz ardı etmek sorunun, vurgunun ya da duygunun anlaşılmasını güçleştirebilir", main: "İşaret dilinde anlam eller, yüz ve bedenin birlikte kullanılmasına dayanır", falseClaim: "İşaret dilinde yüz ve beden hareketlerinin hiçbir görevi yoktur" },
    { kind: "expository", subject: "halk hikâyelerinin kuşaktan kuşağa değişmesi", title: "Anlatıldıkça Yenilenen Hikâyeler", intro: "Halk hikâyeleri uzun yıllar boyunca farklı anlatıcıların diliyle kuşaktan kuşağa aktarılır", detail: "Anlatıcı yaşadığı bölgenin sözlerini ve dinleyicinin ilgisini hikâyeye katabilir", method: "Araştırmacılar aynı hikâyenin farklı yerlerde kaydedilen biçimlerini karşılaştırır", effect: "Bu karşılaştırma ortak olayların yanında zamanla değişen ayrıntıları da gösterir", limit: "Tek bir anlatımı hikâyenin değişmez ve tek biçimi saymak çeşitliliği gözden kaçırır", main: "Halk hikâyeleri temel izlerini korurken her anlatıcı ve çevreyle yeni ayrıntılar kazanabilir", falseClaim: "Halk hikâyeleri her yerde hiçbir sözü değişmeden anlatılır" },
    { kind: "expository", subject: "müze etiketlerinin hazırlanması", title: "Bir Eşyayı Anlatan Küçük Kart", intro: "Müzede bir eserin yanındaki etiket ziyaretçiye yalnız ad ve tarih vermek için hazırlanmaz", detail: "Kısa açıklama eşyanın ne işe yaradığını ve hangi koşullarda kullanıldığını da gösterebilir", method: "Uzmanlar bilgileri doğruladıktan sonra farklı yaşlardan okurların anlayacağı açık bir metin yazar", effect: "İyi hazırlanmış bir etiket ziyaretçinin eserle geçmiş yaşam arasında bağ kurmasını sağlar", limit: "Çok uzun ve ağır bir anlatım önemli bilginin gözden kaçmasına neden olabilir", main: "Müze etiketi doğru bilgiyi kısa, açık ve anlamlı biçimde sunmalıdır", falseClaim: "Müze etiketlerinde yalnız eserin adı bulunmalı, açıklama verilmemelidir" },
    { kind: "expository", subject: "okul hava istasyonunda ölçüm yapılması", title: "Bahçedeki Küçük İstasyon", intro: "Okul bahçesindeki hava istasyonu sıcaklık, yağış ve rüzgârla ilgili günlük veriler toplar", detail: "Ölçüm araçlarının doğrudan güneşten ve binaların oluşturduğu etkiden korunması gerekir", method: "Öğrenciler verileri her gün aynı saatte okuyup tarihleriyle birlikte çizelgeye işler", effect: "Uzun süreli kayıtlar mevsim içindeki değişimlerin karşılaştırılmasını sağlar", limit: "Farklı saatlerde ve farklı koşullarda yapılan ölçümler yanıltıcı sonuçlar verebilir", main: "Hava olaylarını güvenilir biçimde izlemek araçları uygun yere kurup ölçümleri düzenli yapmayı gerektirir", falseClaim: "Hava ölçümlerinin hangi saatte yapıldığı sonuçları etkilemez" },
    { kind: "expository", subject: "robotik kulübünde sorun çözme", title: "Çalışmayan Robotun Öğrettikleri", intro: "Robotik kulübünde bir robotun çalışmaması yalnız başarısızlık anlamına gelmez", detail: "Sorun yazılımdan, bağlantıdan ya da mekanik bir parçadan kaynaklanabilir", method: "Öğrenciler olası nedenleri sıraya koyar ve her denemede yalnız bir değişiklik yapar", effect: "Sonuçları kaydetmek hatanın kaynağını bulmayı ve aynı sorunu yeniden yaşamamayı kolaylaştırır", limit: "Birden çok parçayı aynı anda değiştirmek hangi işlemin işe yaradığını belirsizleştirir", main: "Teknik bir sorunu çözmek düzenli deneme, dikkatli kayıt ve sabırlı değerlendirme gerektirir", falseClaim: "Robot çalışmayınca bütün parçalar aynı anda değiştirilmelidir" }
  ];

  const gradeSettings = {
    5: {
      total: 200,
      startId: 1,
      collection: "grade5-original-review-200",
      types: ["main", "supportYes", "supportNo", "topic", "title", "inference", "completion", "flow", "order", "cause", "purpose", "summary"]
    },
    6: {
      total: 200,
      startId: 101,
      collection: "grade6-original-review-expansion-200",
      types: ["main", "supportYes", "supportNo", "topic", "title", "inference", "completion", "flow", "order", "cause", "purpose", "summary", "narration", "language", "development", "compareCommon", "structure", "evidence"]
    },
    7: {
      total: 150,
      startId: 1,
      collection: "grade7-original-review-150",
      types: ["main", "supportYes", "supportNo", "topic", "title", "inference", "completion", "flow", "order", "cause", "purpose", "summary", "narration", "language", "development", "compareCommon", "compareDiff", "structure", "evidence", "keywords", "split", "insert", "attitude", "question"]
    }
  };

  const typeLabels = {
    main: "Ana fikir",
    supportYes: "Yardımcı düşünce",
    supportNo: "Yardımcı düşünce",
    topic: "Konu",
    title: "Konu ve başlık",
    inference: "Çıkarım yapma",
    completion: "Paragraf tamamlama",
    flow: "Düşüncenin akışını bozan cümle",
    order: "Paragrafta sıralama",
    cause: "Neden-sonuç ilişkisi",
    purpose: "Metnin yazılış amacı",
    summary: "Parçada anlam",
    narration: "Anlatım biçimleri",
    language: "Dil ve anlatım",
    development: "Düşünceyi geliştirme yolları",
    compareCommon: "Metin karşılaştırma",
    compareDiff: "Metin karşılaştırma",
    structure: "Paragrafta yapı",
    evidence: "Kanıt ve sonuç",
    keywords: "Anahtar sözcükler",
    split: "Paragrafı ikiye ayırma",
    insert: "Cümle yerleştirme",
    attitude: "Yazarın yaklaşımı",
    question: "Metnin yanıtladığı soru"
  };

  const sentence = (value) => {
    const text = String(value || "").trim().replace(/[.!?]+$/u, "");
    if (text === "- - - -") return text;
    return text ? `${text}.` : "";
  };

  const lowerFirst = (value) => {
    const text = String(value || "").trim();
    return text ? `${text.charAt(0).toLocaleLowerCase("tr-TR")}${text.slice(1)}` : "";
  };

  const upperFirst = (value) => {
    const text = String(value || "").trim();
    return text ? `${text.charAt(0).toLocaleUpperCase("tr-TR")}${text.slice(1)}` : "";
  };

  const joinSentences = (...values) => values.filter(Boolean).map(sentence).join(" ");

  function passage(profile, grade, variant) {
    const full = grade === 5
      ? [profile.intro, profile.detail, profile.effect, profile.main]
      : grade === 6
        ? [profile.intro, profile.detail, profile.method, profile.effect, profile.main]
        : [profile.intro, profile.detail, profile.method, profile.effect, profile.limit, profile.main];

    if (profile.kind === "narrative") {
      if (variant === 0) return joinSentences(...full);
      if (variant === 1) return joinSentences(profile.intro, `Bunun ardından ${lowerFirst(profile.detail)}`, `Bu sırada ${lowerFirst(profile.method)}`, profile.effect, ...(grade > 5 ? [profile.limit] : []), profile.main);
      if (variant === 2) return joinSentences(profile.intro, `Olayın yönünü değiştiren ayrıntı şuydu: ${lowerFirst(profile.detail)}`, profile.method, `Sonunda ${lowerFirst(profile.effect)}`, ...(grade === 7 ? [profile.limit] : []), profile.main);
      return joinSentences(profile.intro, profile.detail, `Bunun üzerine ${lowerFirst(profile.method)}`, profile.effect, ...(grade > 5 ? [profile.limit] : []), profile.main);
    }

    if (profile.kind === "descriptive") {
      if (variant === 0) return joinSentences(...full);
      if (variant === 1) return joinSentences(profile.intro, `Çevredeki ayrıntılar dikkatle incelendiğinde ${lowerFirst(profile.detail)}`, profile.method, profile.effect, ...(grade > 5 ? [profile.limit] : []), profile.main);
      if (variant === 2) return joinSentences(profile.limit, profile.intro, profile.detail, profile.method, ...(grade > 5 ? [profile.effect] : []), profile.main);
      return joinSentences(profile.intro, profile.method, profile.detail, profile.effect, ...(grade > 5 ? [profile.limit] : []), profile.main);
    }

    if (variant === 0) return joinSentences(...full);
    if (variant === 1) return joinSentences(profile.intro, `Bu noktada ${lowerFirst(profile.detail)}`, profile.method, `Böylece ${lowerFirst(profile.effect)}`, ...(grade > 5 ? [profile.limit] : []), profile.main);
    if (variant === 2) return joinSentences(profile.limit, profile.intro, profile.detail, ...(grade > 5 ? [profile.method] : []), profile.effect, profile.main);
    return joinSentences(profile.intro, profile.method, profile.detail, profile.effect, ...(grade > 5 ? [profile.limit] : []), profile.main);
  }

  function seededAnswers(total, seed) {
    let state = seed >>> 0;
    const random = () => {
      state = (state * 1664525 + 1013904223) >>> 0;
      return state / 4294967296;
    };
    const letters = ["A", "B", "C", "D"];
    const remaining = { A: 0, B: 0, C: 0, D: 0 };
    for (let index = 0; index < total; index += 1) remaining[letters[index % 4]] += 1;
    const answers = [];
    while (answers.length < total) {
      const last = answers.at(-1);
      let candidates = letters.filter((letter) => remaining[letter] > 0 && letter !== last);
      if (!candidates.length) candidates = letters.filter((letter) => remaining[letter] > 0);
      const highest = Math.max(...candidates.map((letter) => remaining[letter]));
      const weighted = candidates.filter((letter) => remaining[letter] >= highest - 1);
      const picked = weighted[Math.floor(random() * weighted.length)];
      answers.push(picked);
      remaining[picked] -= 1;
    }
    return answers;
  }

  function arrangeOptions(correct, distractors, answer) {
    const options = Array(4).fill("");
    const answerIndex = "ABCD".indexOf(answer);
    const uniqueDistractors = [];
    distractors.forEach((item) => {
      const value = String(item || "").trim();
      if (value && value !== correct && !uniqueDistractors.includes(value)) uniqueDistractors.push(value);
    });
    const fallbacks = [
      "Metinde bu yargıyı destekleyen bir bilgiye yer verilmemiştir.",
      "Bu açıklama metnin yalnız küçük bir ayrıntısını farklı yönde yorumlamaktadır.",
      "Bu yargı metnin bütünüyle ilişkilendirilemez."
    ];
    fallbacks.forEach((item) => {
      if (uniqueDistractors.length < 3 && item !== correct && !uniqueDistractors.includes(item)) uniqueDistractors.push(item);
    });
    options[answerIndex] = correct;
    let distractorIndex = 0;
    for (let index = 0; index < options.length; index += 1) {
      if (index !== answerIndex) options[index] = uniqueDistractors[distractorIndex++];
    }
    return options;
  }

  const narrationMode = (kind) => ({ narrative: "Öyküleme", descriptive: "Betimleme", argumentative: "Tartışma", expository: "Açıklama" }[kind] || "Açıklama");

  const purposeFor = (profile) => {
    if (profile.kind === "narrative") return `Yaşanan bir olay üzerinden ${profile.subject} konusunda okura bir düşünce sezdirmek`;
    if (profile.kind === "descriptive") return `${upperFirst(profile.subject)} ile ilgili görünüm ve izlenimleri duyusal ayrıntılarla canlandırmak`;
    if (profile.kind === "argumentative") return `${upperFirst(profile.subject)} konusunda ileri sürülen eksik bir görüşü gerekçelerle tartışmak`;
    return `${upperFirst(profile.subject)} hakkında açıklayıcı bilgi vermek`;
  };

  const languageFor = (profile) => {
    if (profile.kind === "narrative") return "Olaylar oluş sırası içinde aktarılmıştır.";
    if (profile.kind === "descriptive") return "Birden fazla duyuya seslenen ayrıntılara yer verilmiştir.";
    if (profile.kind === "argumentative") return "Karşı çıkılan bir görüş gerekçelerle değerlendirilmiştir.";
    return "Bilgi vermeye yönelik açık ve anlaşılır bir anlatım kullanılmıştır.";
  };

  const approachFor = (profile) => {
    if (profile.kind === "narrative") return "Yaşanan olaydan hareketle düşündürücü ve ders çıkarıcı";
    if (profile.kind === "descriptive") return "Gözleme dayalı, ayrıntılı ve izlenim uyandırıcı";
    if (profile.kind === "argumentative") return "Sorgulayıcı, gerekçeli ve savunmacı";
    return "Bilgilendirici, açıklayıcı ve ölçülü";
  };

  const unsupportedClaims = (profile) => [
    profile.falseClaim,
    `${upperFirst(profile.subject)} konusunda hiçbir hazırlık, gözlem ya da düzenleme gerekmez`,
    `${upperFirst(profile.subject)} her yerde ve her koşulda aynı sonucu verir`
  ];

  const topicDistractors = (profile) => {
    const subject = lowerFirst(profile.subject);
    if (profile.kind === "narrative") {
      return [
        `${subject} sırasında kullanılan eşyaların teknik özellikleri`,
        `${subject} olayının geçtiği yerin tarihçesi`,
        `${subject} kahramanlarının dış görünüşleri`
      ];
    }
    if (profile.kind === "descriptive") {
      return [
        `${subject} çevresindeki yerleşimin nüfusu`,
        `${subject} ile ilgili tarihsel belgeler`,
        `${subject} bölgesinde yapılan ekonomik etkinlikler`
      ];
    }
    return [
      `${subject} için kullanılan araçların fiyatları`,
      `${subject} konusunun tarihsel gelişimi`,
      `${subject} hakkında anlatılan kişisel anılar`
    ];
  };

  const titleDistractors = (profile) => {
    const subject = upperFirst(profile.subject);
    return [
      `${subject}: Değişmeyen Tek Yöntem`,
      `${subject}: Bakım Gerektirmeyen Bir Süreç`,
      `${subject}: Yalnızca Görünüşten İbaret`
    ];
  };

  const purposeDistractors = (profile) => {
    const subject = upperFirst(profile.subject);
    return [
      `${subject} ile ilgili bir ürünü tanıtıp okuru satın almaya yönlendirmek`,
      `${subject} konusunda olağanüstü bir olayı yalnızca eğlendirmek amacıyla anlatmak`,
      `${subject} hakkında gerekçe sunmadan kişisel bir yakınmayı dile getirmek`
    ];
  };

  function keywordPair(profile) {
    const words = profile.subject.split(/\s+/u).filter((word) => word.length > 3);
    return `${words.slice(0, 2).join(" ")} - ${words.slice(2, 4).join(" ") || profile.kind}`;
  }

  function keywordDistractors(profile) {
    const words = profile.subject.split(/\s+/u).filter((word) => word.length > 3);
    const first = words.slice(0, 2).join(" ");
    const second = words.slice(2, 4).join(" ") || words.at(-1) || "konu";
    return [
      `${first} - satış`,
      `${second} - yarışma`,
      `${words.at(0) || "konu"} - fiyat`
    ];
  }

  function buildQuestion(profile, profileIndex, grade, serial, variant, answer, settings) {
    const neighbor1 = profiles[(profileIndex + 7) % profiles.length];
    const neighbor2 = profiles[(profileIndex + 19) % profiles.length];
    const neighbor3 = profiles[(profileIndex + 31) % profiles.length];
    let type = settings.types[(serial * 7 + Math.floor(serial / 9)) % settings.types.length];
    if (type === "cause" && profile.kind === "descriptive") type = "language";
    const baseText = passage(profile, grade, variant);
    let text = baseText;
    let stem = "";
    let correct = "";
    let distractors = [];
    let solution = "";

    if (type === "main") {
      stem = "Bu metnin ana düşüncesi aşağıdakilerden hangisidir?";
      correct = profile.main;
      distractors = [profile.falseClaim, profile.detail, profile.limit];
      solution = "Doğru seçenek, metindeki açıklama ve ayrıntıların birlikte desteklediği temel yargıyı vermektedir.";
    } else if (type === "supportYes") {
      stem = "Bu metinden aşağıdakilerin hangisine ulaşılabilir?";
      correct = profile.effect;
      distractors = unsupportedClaims(profile);
      solution = "Bu yargı metinde verilen sonuç bilgisiyle doğrudan desteklenmektedir.";
    } else if (type === "supportNo") {
      stem = "Bu metinde aşağıdakilerden hangisine değinilmemiştir?";
      correct = profile.falseClaim;
      distractors = [profile.intro, profile.detail, profile.effect];
      solution = "Doğru seçenekteki yargı metinde yer almamakta, diğer seçenekler metindeki bilgilerle karşılanmaktadır.";
    } else if (type === "topic") {
      stem = "Bu metnin konusu aşağıdakilerden hangisidir?";
      correct = upperFirst(profile.subject);
      distractors = topicDistractors(profile).map(upperFirst);
      solution = "Metnin bütününde üzerinde durulan kavram ve olay doğru seçenekte verilmiştir.";
    } else if (type === "title") {
      stem = "Bu metne getirilebilecek en uygun başlık aşağıdakilerden hangisidir?";
      correct = profile.title;
      distractors = titleDistractors(profile);
      solution = "Doğru başlık metnin konusunu ve temel yönünü birlikte yansıtmaktadır.";
    } else if (type === "inference") {
      stem = "Bu metinden hareketle aşağıdakilerin hangisi söylenebilir?";
      correct = profile.main;
      distractors = unsupportedClaims(profile);
      solution = "Metindeki neden, yöntem ve sonuçlar birlikte değerlendirildiğinde doğru seçenekteki çıkarıma ulaşılır.";
    } else if (type === "completion") {
      text = joinSentences(profile.intro, profile.detail, ...(grade > 5 ? [profile.method] : []), "- - - -");
      stem = "Bu metin düşüncenin akışına göre aşağıdakilerden hangisiyle tamamlanmalıdır?";
      correct = profile.main;
      distractors = unsupportedClaims(profile);
      solution = "Metinde verilen ayrıntılar doğru seçenekteki sonuç yargısına hazırlık yapmaktadır.";
    } else if (type === "flow") {
      text = `(I) ${sentence(profile.intro)} (II) ${sentence(profile.detail)} (III) ${sentence(profile.method)} (IV) ${sentence(profile.falseClaim)} (V) ${sentence(profile.effect)}`;
      stem = "Numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?";
      correct = "IV. cümle";
      distractors = ["I. cümle", "II. cümle", "III. cümle"];
      solution = "IV. cümle metindeki bilgilerle çeliştiği için paragrafın anlam bütünlüğünü bozmaktadır.";
    } else if (type === "order") {
      text = `(I) ${sentence(profile.effect)} (II) ${sentence(profile.intro)} (III) ${sentence(profile.main)} (IV) ${sentence(profile.method)}`;
      stem = "Numaralanmış cümlelerle anlamlı bir paragraf oluşturulduğunda sıralama nasıl olur?";
      correct = "II - IV - I - III";
      distractors = ["I - II - IV - III", "II - I - III - IV", "IV - II - III - I"];
      solution = "Konu II. cümlede tanıtılır, IV. cümlede yöntem, I. cümlede sonuç verilir ve III. cümlede genel yargıya ulaşılır.";
    } else if (type === "cause") {
      text = joinSentences(profile.intro, profile.detail, profile.method, profile.effect, ...(grade === 7 ? [profile.main] : []));
      stem = "Aşağıdakilerin hangisinde metindeki neden-sonuç ilişkisi doğru verilmiştir?";
      correct = `${profile.method}; bunun sonucunda ${lowerFirst(profile.effect)}`;
      distractors = [`${profile.falseClaim}; bunun sonucunda ${lowerFirst(profile.effect)}`, `${profile.detail}; bunun sonucunda ${lowerFirst(profile.method)}`, `${profile.effect}; bunun sonucunda ${lowerFirst(profile.method)}`];
      solution = "Doğru seçenekte metindeki uygulama ile bu uygulamanın ortaya çıkardığı sonuç doğru ilişkilendirilmiştir.";
    } else if (type === "purpose") {
      stem = "Bu metnin yazılış amacı aşağıdakilerden hangisidir?";
      correct = purposeFor(profile);
      distractors = purposeDistractors(profile);
      solution = "Metnin içeriği ve anlatım yolu doğru seçenekte belirtilen amaca yöneliktir.";
    } else if (type === "summary") {
      stem = "Bu metni en doğru biçimde özetleyen yargı aşağıdakilerden hangisidir?";
      correct = profile.main;
      distractors = [profile.detail, profile.falseClaim, profile.limit];
      solution = "Doğru seçenek metnin ana düşüncesini ayrıntıya sapmadan kapsamaktadır.";
    } else if (type === "narration") {
      const modes = ["Açıklama", "Öyküleme", "Betimleme", "Tartışma"];
      correct = narrationMode(profile.kind);
      stem = "Bu metinde ağır basan anlatım biçimi aşağıdakilerden hangisidir?";
      distractors = modes.filter((mode) => mode !== correct);
      solution = `${correct}, metnin kuruluşuna ve kullanılan anlatım özelliklerine en uygun anlatım biçimidir.`;
    } else if (type === "language") {
      stem = "Bu metnin dil ve anlatımıyla ilgili aşağıdakilerden hangisi söylenebilir?";
      correct = languageFor(profile);
      distractors = ["Yoğun biçimde sayısal verilerden yararlanılmıştır.", "Anlatım bütünüyle karşılıklı konuşmalarla kurulmuştur.", "Kanıtlanması mümkün olmayan olağanüstü olaylara yer verilmiştir."];
      solution = "Doğru seçenek metindeki anlatımın belirgin özelliğini karşılamaktadır.";
    } else if (type === "development") {
      text = joinSentences(profile.intro, `Örneğin, ${lowerFirst(profile.detail)}`, profile.effect, ...(grade === 7 ? [profile.main] : []));
      stem = "Bu metinde düşünceyi geliştirme yollarından hangisine başvurulmuştur?";
      correct = "Örneklendirme";
      distractors = ["Tanık gösterme", "Sayısal verilerden yararlanma", "Benzetme"];
      solution = "Metinde genel düşünceyi somutlaştırmak için “örneğin” ifadesiyle bir örnek verilmiştir.";
    } else if (type === "compareCommon") {
      text = `I. Metin: ${joinSentences(profile.intro, profile.effect)}\n\nII. Metin: ${joinSentences(neighbor1.intro, neighbor1.effect)}`;
      stem = "Bu iki metnin ortak özelliği aşağıdakilerden hangisidir?";
      correct = "Ele aldıkları konunun bir sonucunu açıklamaları";
      distractors = ["Aynı konu ve örnekler üzerinde durmaları", "Olayları birinci kişi ağzından anlatmaları", "Yalnız kişisel duygulara yer vermeleri"];
      solution = "Her iki metinde de farklı bir konu tanıtılmış ve bu konuyla ilgili bir sonuç açıklanmıştır.";
    } else if (type === "compareDiff") {
      text = `I. Metin: ${joinSentences(profile.intro, profile.detail, profile.effect)}\n\nII. Metin: ${joinSentences(neighbor1.intro, neighbor1.detail, neighbor1.effect)}`;
      stem = "Bu iki metin arasındaki fark aşağıdakilerin hangisinde doğru verilmiştir?";
      correct = `İlk metin ${profile.subject}, ikinci metin ${neighbor1.subject} üzerinde durmaktadır.`;
      distractors = [`İlk metin ${neighbor1.subject}, ikinci metin ${profile.subject} üzerinde durmaktadır.`, "İki metin de bütünüyle aynı konuyu aynı ayrıntılarla işlemektedir.", "İlk metinde bilgi verilmiş, ikinci metinde hiçbir düşünceye yer verilmemiştir."];
      solution = "İki metnin odaklandığı konular doğru seçenekte uygun sırayla belirtilmiştir.";
    } else if (type === "structure") {
      stem = "Aşağıdaki cümlelerden hangisi bu metnin giriş cümlesi olmaya en uygundur?";
      correct = profile.intro;
      distractors = [profile.effect, profile.main, profile.method];
      solution = "Doğru seçenek kendinden önce başka bir açıklamaya ihtiyaç duymadan konuyu tanıtmaktadır.";
    } else if (type === "evidence") {
      text = `(I) ${sentence(profile.intro)} (II) ${sentence(profile.detail)} (III) ${sentence(profile.method)} (IV) ${sentence(profile.effect)}`;
      stem = "Numaralanmış cümlelerin hangisinde uygulamanın ya da durumun ortaya çıkardığı sonuç verilmiştir?";
      correct = "IV. cümle";
      distractors = ["I. cümle", "II. cümle", "III. cümle"];
      solution = "IV. cümlede önceki açıklamaların ortaya çıkardığı sonuç doğrudan verilmiştir.";
    } else if (type === "keywords") {
      stem = "Bu metnin içeriğini en iyi yansıtan anahtar sözcükler aşağıdakilerin hangisinde birlikte verilmiştir?";
      correct = keywordPair(profile);
      distractors = keywordDistractors(profile);
      solution = "Doğru seçenekteki kavramlar metnin konusu ve temel içeriğiyle doğrudan ilişkilidir.";
    } else if (type === "split") {
      text = `(I) ${sentence(profile.intro)} (II) ${sentence(profile.detail)} (III) ${sentence(profile.effect)} (IV) ${sentence(neighbor1.intro)} (V) ${sentence(neighbor1.detail)} (VI) ${sentence(neighbor1.effect)}`;
      stem = "Bu metin iki paragrafa ayrılmak istendiğinde ikinci paragraf numaralanmış cümlelerin hangisiyle başlar?";
      correct = "IV. cümle";
      distractors = ["II. cümle", "III. cümle", "V. cümle"];
      solution = "İlk üç cümle birinci konuyu, IV. cümleden itibaren başlayan bölüm ise farklı bir konuyu işlemektedir.";
    } else if (type === "insert") {
      text = `(I) ${sentence(profile.intro)} (II) ${sentence(profile.detail)} (III) ${sentence(profile.effect)} (IV) ${sentence(profile.main)}`;
      stem = `“${sentence(profile.method)}” cümlesi anlam akışına göre numaralanmış yerlerin hangisine getirilmelidir?`;
      correct = "III numaralı yere";
      distractors = ["I numaralı yere", "II numaralı yere", "IV numaralı yere"];
      solution = "Verilen cümle, ayrıntıdan sonra yöntemi açıklar ve sonuç cümlesine geçiş sağlar.";
    } else if (type === "attitude") {
      stem = "Yazarın bu konuya yaklaşımı aşağıdakilerin hangisinde doğru verilmiştir?";
      correct = approachFor(profile);
      distractors = [
        "Bilgilendirici, açıklayıcı ve ölçülü",
        "Yaşanan olaydan hareketle düşündürücü ve ders çıkarıcı",
        "Gözleme dayalı, ayrıntılı ve izlenim uyandırıcı",
        "Sorgulayıcı, gerekçeli ve savunmacı",
        "Küçümseyici ve alaycı"
      ].filter((option) => option !== correct).slice(0, 3);
      solution = "Metnin anlatım biçimi ve sözcük seçimi doğru seçenekteki yaklaşımı yansıtmaktadır.";
    } else {
      stem = "Bu metin aşağıdaki sorulardan hangisine cevap vermek amacıyla yazılmıştır?";
      correct = `${upperFirst(profile.subject)} hakkında bilinmesi gereken temel noktalar nelerdir?`;
      distractors = [
        `${upperFirst(profile.subject)} tarih boyunca hangi yıllarda değişmiştir?`,
        `${upperFirst(profile.subject)} için kullanılan ürünlerin satış fiyatı nasıl belirlenir?`,
        `${upperFirst(profile.subject)} yalnızca hangi ülkelerde görülür?`
      ];
      solution = "Metnin bütününde doğru seçenekte sorulan konu açıklanmaktadır.";
    }

    const idNumber = settings.startId + serial;
    return {
      id: `review${grade}-${String(idNumber).padStart(3, "0")}`,
      grade,
      topic: typeLabels[type],
      difficulty: grade === 5 ? (serial % 4 === 0 ? "Kolay" : "Orta") : grade === 6 ? (serial % 3 === 0 ? "Zor" : "Orta") : (serial % 4 === 0 ? "Orta" : "Zor"),
      text,
      stem,
      options: arrangeOptions(correct, distractors, answer),
      answer,
      solution,
      reviewOnly: true,
      collection: settings.collection
    };
  }

  function buildGrade(grade) {
    const settings = gradeSettings[grade];
    const answers = seededAnswers(settings.total, 7300 + grade * 97);
    const generated = [];
    for (let serial = 0; serial < settings.total; serial += 1) {
      const profileIndex = serial % profiles.length;
      const variant = Math.floor(serial / profiles.length) % 4;
      generated.push(buildQuestion(profiles[profileIndex], profileIndex, grade, serial, variant, answers[serial], settings));
    }
    return generated;
  }

  function tuneDuplicateText(text, profile, grade) {
    const connectorMap = grade === 6
      ? { narrative: "Ardından,", descriptive: "Bu sırada,", argumentative: "Bu noktada,", expository: "Ayrıca," }
      : { narrative: "Olayın devamında,", descriptive: "Bunun yanı sıra,", argumentative: "Üstelik,", expository: "Bunun yanında," };
    const connector = connectorMap[profile.kind] || connectorMap.expository;
    if (text.includes(" (II) ")) return text.replace(" (II) ", ` (II) ${connector} `);
    const firstBreak = text.indexOf(". ");
    if (firstBreak >= 0) {
      return `${text.slice(0, firstBreak + 2)}${connector} ${lowerFirst(text.slice(firstBreak + 2))}`;
    }
    return `${text} ${sentence(profile.limit)}`.trim();
  }

  function keepTextsUnique(groups, initialQuestions = []) {
    const normalize = (value) => String(value || "").toLocaleLowerCase("tr-TR").replace(/\s+/gu, " ").trim();
    const seen = new Set(initialQuestions.map((question) => normalize(question.text)));
    groups.forEach(({ grade, questions }) => {
      questions.forEach((question, index) => {
        let key = normalize(question.text);
        if (seen.has(key)) {
          question.text = tuneDuplicateText(question.text, profiles[index % profiles.length], grade);
          key = normalize(question.text);
        }
        seen.add(key);
      });
    });
  }

  const grade5Questions = buildGrade(5);
  const grade6Questions = buildGrade(6);
  const grade7Questions = buildGrade(7);
  const currentGrade6 = Array.isArray(window.PARAGRAPH6_REVIEW_QUESTIONS) ? window.PARAGRAPH6_REVIEW_QUESTIONS : [];
  keepTextsUnique([
    { grade: 5, questions: grade5Questions },
    { grade: 6, questions: grade6Questions },
    { grade: 7, questions: grade7Questions }
  ], currentGrade6);

  window.PARAGRAPH5_REVIEW_QUESTIONS = [
    ...(Array.isArray(window.PARAGRAPH5_REVIEW_QUESTIONS) ? window.PARAGRAPH5_REVIEW_QUESTIONS : []),
    ...grade5Questions
  ];
  window.PARAGRAPH6_REVIEW_QUESTIONS = [
    ...currentGrade6,
    ...grade6Questions
  ];
  window.PARAGRAPH7_REVIEW_QUESTIONS = [
    ...(Array.isArray(window.PARAGRAPH7_REVIEW_QUESTIONS) ? window.PARAGRAPH7_REVIEW_QUESTIONS : []),
    ...grade7Questions
  ];
})();
