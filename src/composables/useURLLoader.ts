import axios from 'axios';
import { reactive, toRefs } from 'vue';

interface IResult {
	loading: boolean;
	error: any;
	result: any;
}

const useURLLoader = (url: string) => {
	const data: IResult = reactive({
		loading: true,
		error: null,
		result: null
	});

	axios
		.get(url)
		.then((rawData) => {
			data.result = rawData.data;
		})
		.catch((err) => {
			data.error = err;
		})
		.finally(() => {
			data.loading = false;
		});

	return toRefs(data);
};

export default useURLLoader;
