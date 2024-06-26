const IconLoading = (): JSX.Element => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
            fill="currentColor"
            d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8"
            opacity=".5"
        />
        <path fill="currentColor" d="M20 12h2A10 10 0 0 0 12 2v2a8 8 0 0 1 8 8">
            <animateTransform
                attributeName="transform"
                dur="1s"
                from="0 12 12"
                repeatCount="indefinite"
                to="360 12 12"
                type="rotate"
            />
        </path>
    </svg>
);

export default IconLoading;
