'use client'

import { Checkbox } from "@heroui/checkbox";
import { RadioGroup, Radio } from "@heroui/radio";
import Image, { StaticImageData } from 'next/image';
// Interfaz para los textos
interface CartMemberShipTexts {
    membershipTitle: string;
    description: string;
    priceOption1: string;
    priceOption2: string;
}

interface Props {
    texts: CartMemberShipTexts;
    imageSrc: StaticImageData;
    // onCheckout: () => void; // Función recibida como prop para manejar el clic en el botón
}


export const CartMemberShip = ({texts,imageSrc}:Props) => {

    return (
        <div className="flex w-[100%] flex-col items-end right-[-50px] space-y-2 mb-10">
            <p className="mr-10 text-sm">{texts.membershipTitle}</p>
            <div className="flex w-[95%] bg-white rounded-l-full shadow-lg right-0 p-4 h-[110px] items-center" >
                {/* Elemento a la izquierda */}
                <div className="">
                <div className="flex items-center justify-center">
                    <div className="flex-shrink-0 w-[200px] h-[200px] overflow-hidden">
                        <Image
                            src={imageSrc}
                            alt="Starman"
                            className="object-cover"
                            width={250}
                            height={250}
                        />
                    </div>
                </div>
                </div>

                {/* Contenedor de los dos elementos a la derecha */}
                <div className="flex flex-col w-full ml-[-55px]">

                    <p className="text-xs text-gray-400 mb-2">
                        {texts.description}
                    </p>
                    <div className="flex items-center justify-between">
                        <RadioGroup color="success" orientation="horizontal">
                            <Radio value="buenos-aires">
                                <p className="text-sm text-blue-400">{texts.priceOption1}</p>
                            </Radio>
                            <Radio value="sydney">
                                <p className="text-sm text-blue-400">{texts.priceOption2}</p>
                            </Radio>
                        </RadioGroup>
                    </div>
                </div>
            </div>
            <div className='btn-primary w-[95%] h-[60px] flex  justify-center items-center'>
                <h1>Check out</h1>
            </div>
        </div>


    );
}