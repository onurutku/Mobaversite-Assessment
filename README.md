# MobaversiteAssessment

## installation

install angular CLI (run npm install -g @angular/cli)
(run nmp install)
(run ng serve)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Proje Hk.

İsterler:
1-Projede istediğiniz framework'ü kullanabilirsiniz (Angular13)
YANIT:Angular13

2-Solda Feed ekranında başlıklar var, ortadaki alan ilk başlığın detay sayfası diğer başlıklara tıkladıkça detay sayfası değişecek.
YANIT:HomeComponent olarak adlandırdığım component sol tarafta feed ekranını temsil ediyor. Başlıklara tıklandığında route değişiyor ve orta bölmedeki,TopicDetailComponent olarak adlandırdığım component'i yüklüyor.Sağ taraftaki Popular User kısmı yazdığım .json dosyanın içindeki tüm kullanıcılardır. Populer users'ı temsil ediyorlar.

3-tasarıma uygun kodlanmasını istiyoruz yani imaj alanı, yorumlar ve yorumlara yapılan cevapların tasarımını örnek tasarımdaki gibi görüntülemek istiyoruz.
YANIT:Adobe.xd ile paylaştığınız icon,resim ve renk kodlarını kullandım.Gördüğüm tasarımı css'e aktarmaya çalıştım.

4-Layoutu grid sisteme uygun hazırlayalım. Bootstrap’in Grid Sistemi gibi 12’li grid sistemini kullanabilirsiniz mobil için responsive gözüksün yeterli.
YANIT: Bu bu projede en başarısız olduğum kısım. Grid sistemi kullanma konusunda kendimi yetersiz görüyorum ama bu anlamda derinlemesine css eğitimine katıldım ve kısa zamanda açığımı kapatacağıma inanıyorum. Bunun haricinde bootstrap yükleyip .row grid sisteminden faydalandım,yine de bazı kısımları css ile yazdım.

5-Recent butonlarına basınca başlıkların tarihine göre sıralansın.
YANIT:Butona basınca tarihe göre sıralanıyor. En yakın tarihli en üste geliyor.Bunun haricinde uygulama ilk yüklendiğinde de yen yakın tarihli gönderi detay sayfasında gösteriliyor.

6- Hali hazırda bir API olmadığı için bir JSON dosyası oluşturup oradan çekebilirsiniz.
YANIT:src/assets/example.json yolunda oluşturduğum example.json dosyasına ulaşabilirsiniz. Yine de sanki bir API'den data çekiyormuş gibi servisleri oluşturdum ve datayı oradan get ettim.

7- CSS için SASS veya LESS kullanabilirsiniz.
YANIT:Css ve bootstrap kullandım.

8-Projeyi Component Based kodlamaya dikkat edin.
YANIT:Component Based kodladım.

9-Projenin bir demosunu Vercel veya Netlify gibi bir Front-end hosting servisinde deploy ediniz.
YANIT:Proje h1 başlığının altındaki linkte deploy edildi.
