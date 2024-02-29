import {useRef, useEffect} from 'react';



export default function useInputKeys() {
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Enter') {
				const currentInput = inputRef.current;
				if (!currentInput) {
					return;
				}

				const tr = currentInput.closest('tr');
				if (!tr) {
					return;
				}

				const tds = tr.querySelectorAll('td');
				if (!tds) {
					return;
				}

				const currentIndex = Array.from(tds).indexOf(currentInput.parentElement as HTMLTableCellElement);
				const nextTd = tds[currentIndex + 1];
				let nextInput = nextTd.querySelector('input');
				if (nextInput) {
					nextInput.focus();
				} else {
					const nextTr = tr.nextElementSibling;
					if (nextTr) {
						nextInput = nextTr.querySelector('input');
						if (nextInput) {
							nextInput.focus();
						}
					}
				}
			}
		};

		const currentInput = inputRef.current;
		if (currentInput) {
			currentInput.addEventListener('keydown', handleKeyDown);
		}

		return () => {
			if (currentInput) {
				currentInput.removeEventListener('keydown', handleKeyDown);
			}
		};
	}, []);

	return inputRef;
}