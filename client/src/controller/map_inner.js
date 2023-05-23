const form = document.querySelector('#search-bar');

form.addEventListener('change', async (e) => {
    e.preventDefault();

    const selectedValue = e.target.value;
    console.log(selectedValue)
    const encodedValue = encodeURIComponent(selectedValue);
    // json 형식으로 변환
    const payload = {
        place: selectedValue
    }
    console.log(payload)

    try {
        // POST 요청
        const res = await fetch(`http://localhost:8080/client/map/map`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(selectedValue)

        });
        console.log(res)

        if (res.ok) {
            const data = await res.json();
            console.log(`Data received: ${JSON.stringify(data)}`);

            // 받은 값으로 innerHTML 수정
            document.querySelector('#weather_desc').innerHTML = data.temp;
            document.querySelector('#road_desc').innerHTML = data.rain;
            document.querySelector('#people_desc').innerHTML = data.AREA_CONGEST_LVL;
        } else {
            throw new Error('검색 요청 실패');
        }
    } catch (error) {
        console.error(error);
    }
});
