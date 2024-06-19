import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">ARTDOUGS</div>
          </Link>
          <p>
            Avenida Jerusalém, nº 46, Vila Palestina, Cariacica, Espirito Santo, Brasil.
          </p>
          <span className="font-semibold">henrycky_wottikosky@hotmail.com</span>
          <span className="font-semibold">+55 27997757019</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
            <Image src="/youtube.png" alt="" width={16} height={16} />
            <Image src="/pinterest.png" alt="" width={16} height={16} />
            <Image src="/x.png" alt="" width={16} height={16} />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">EMPRESA</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Sobre nós</Link>
              <Link href="">Carreira</Link>
              <Link href="">Afiliados</Link>
              <Link href="">Blog</Link>
              <Link href="">Contate-nos</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">LOJA</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Novos Itens</Link>
              <Link href="">Acessórios</Link>
              <Link href="">Todos os Produtos</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">AJUDA</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Serviço ao Consumidor</Link>
              <Link href="">Minha conta</Link>
              <Link href="">Termos de Privacidade</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">INSCREVA-SE</h1>
          <p>
            Seja o primeiro a receber as últimas notícias sobre tendências, promoções e muito mais
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-lama text-white">PARTICIPE</button>
          </div>
          <span className="font-semibold">Formas de Pagamento</span>
          <div className="flex justify-between">
            {/*<Image src="/paypal.png" alt="" width={40} height={20} />*/}
            <Image src="/mastercard.png" alt="" width={40} height={20} />
            <Image src="/visa.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">© 2024 ArtDoug Shop</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Idioma</span>
            <span className="font-medium">Brasil | Português</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Moeda</span>
            <span className="font-medium">R$ BRL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;