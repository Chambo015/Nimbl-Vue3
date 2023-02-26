const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1)
};

const cropImage = (base64orSrc: string, aspectRatio: number) => {
    return new Promise<HTMLCanvasElement>((resolve) => {
        // это изображение будет содержать данные нашего исходного изображения
        const inputImage = new Image();
        // выполняем работу с изображением только когда оно загрузится
        inputImage.onload = () => {
            const inputWidth = inputImage.naturalWidth;
            const inputHeight = inputImage.naturalHeight;

            // получаем соотношение сторон входного изображения
            const inputImageAspectRatio = inputWidth / inputHeight;

            // если входное соотношение сторон другое то подстраиваем под наше 
            let outputWidth = inputWidth;
            let outputHeight = inputHeight;
            if (inputImageAspectRatio > aspectRatio) {
                outputWidth = inputHeight * aspectRatio;
            } else if (inputImageAspectRatio < aspectRatio) {
                outputHeight = inputWidth / aspectRatio;
            }
            
            // создаем холст, который будет представлять выходное изображение
            const outputImage = document.createElement("canvas");

            // устанавливаем размер холста уже с нашими размерами
            outputImage.width = outputWidth;
            outputImage.height = outputHeight;

            //  вычисляем позицию для отрисовки изображения в холсте
            const outputX = (outputWidth - inputWidth) * 0.5;
            const outputY = (outputHeight - inputHeight) * 0.5;

            //  рисуем наше изображение на холсте
            const ctx = outputImage.getContext("2d");
            ctx?.drawImage(inputImage, outputX, outputY);

            // возвращаем канвас 
            resolve(outputImage);

            // или можем вернуть сразу base64 resolve(outputImage.toDataURL())
        };
        inputImage.src = base64orSrc
    });
};

const randomNumber = (min: number, max: number): string => {
    return Math.floor(Math.random() * (max - min) + min).toLocaleString().replace(/,/g, " ");
}


export {
    capitalize,
    cropImage,
    randomNumber
}


