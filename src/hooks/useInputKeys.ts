import {useRef, useEffect} from 'react';


const handleEnter = (currentInput: HTMLInputElement) => {
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
};

const handleArrowUp = (currentInput: HTMLInputElement) => {
	const tr = currentInput.closest('tr');
	if (!tr) {
		return;
	}

	const previousTr = tr.previousElementSibling;
	if (!previousTr) {
		return;
	}

	const previousTrTds = previousTr.querySelectorAll('td');
	const currentTdTds = tr.querySelectorAll('td');
	if (previousTrTds) {
		const currentIndex = Array.from(currentTdTds).indexOf(currentInput.parentElement as HTMLTableCellElement);
		const previousTd = previousTrTds[currentIndex];
		const previousInput = previousTd.querySelector('input');
		if (previousInput) {
			previousInput.focus();
		}
	}
};

const handleArrowDown = (currentInput: HTMLInputElement) => {
	const tr = currentInput.closest('tr');
	if (!tr) {
		return;
	}

	const nextTr = tr.nextElementSibling;
	if (!nextTr) {
		return;
	}

	const nextTrTds = nextTr.querySelectorAll('td');
	const currentTdTds = tr.querySelectorAll('td');
	if (nextTrTds) {
		const currentIndex = Array.from(currentTdTds).indexOf(currentInput.parentElement as HTMLTableCellElement);
		const nextTd = nextTrTds[currentIndex];
		const nextInput = nextTd.querySelector('input');
		if (nextInput) {
			nextInput.focus();
		}
	}
};

const handleArrowLeft = (currentInput: HTMLInputElement) => {
	// Don't execute if the cursor is not at the beginning of the input
	if (currentInput.selectionStart !== 0) {
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
	const previousTd = tds[currentIndex - 1];
	const previousInput = previousTd.querySelector('input');
	if (previousInput) {
		previousInput.focus();
	}
};

const handleArrowRight = (currentInput: HTMLInputElement) => {
	// Don't execute if the cursor is not at the end of the input
	if (currentInput.selectionStart !== currentInput.value.length) {
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
	const nextInput = nextTd.querySelector('input');
	if (nextInput) {
		nextInput.focus();
	}
};


export default function useInputKeys() {
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const currentInput = inputRef.current;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (!currentInput) {
				return;
			}

			if (e.key === 'Enter') {
				handleEnter(currentInput);
				
			} else if (e.key === 'ArrowUp') {
				handleArrowUp(currentInput);

			} else if (e.key === 'ArrowDown') {
				handleArrowDown(currentInput);
				
			} else if (e.key === 'ArrowLeft') {
				handleArrowLeft(currentInput);

			} else if (e.key === 'ArrowRight') {
				handleArrowRight(currentInput);
				
			}
		};

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