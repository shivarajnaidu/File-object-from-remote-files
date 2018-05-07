'use strict';
(function () {
	const imageConvertionBtn = document.querySelector('#convert-img-ctrl');
	const imageElem = document.querySelector('#target-img');

	imageConvertionBtn.addEventListener('click', onImageConvertionCtrlClikcHandler);

	async function onImageConvertionCtrlClikcHandler(event) {
		const { src } = imageElem;

		try {
			const fileName = src.split('/').pop();
			const response = await fetch(src);
			const fileBlob = await response.blob();
			const file = new File([fileBlob], fileName, { type: fileBlob.type });
			console.log(file);

			window.alert('Check The Console For Result');
		} catch(error) {
			console.error(error);
			window.alert(error.message);
		}
 
	}
})();