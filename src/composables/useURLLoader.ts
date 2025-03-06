import axios from 'axios';
import { reactive, toRefs } from 'vue';

interface IResult<T> {
	loading: boolean;
	error: any;
	result: T | null;
}

const useURLLoader = <T>(url: string) => {
	const data: IResult<T> = reactive({
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
