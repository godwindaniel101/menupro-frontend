import { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import Rating from "./Rating";

type FeedbackModalProps = {
	openFeedbackModal: boolean;
	setOpenFeedbackModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const FeedbackModal = ({
	openFeedbackModal,
	setOpenFeedbackModal,
}: FeedbackModalProps) => {
	const [rating, setRating] = useState<number | null>(null);
	const [review, setReview] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

	const handleFeedback = () => {
		const payload = {
			rating,
			review,
			name,
			email,
			phone,
		};

		console.log(payload);
	};

	return (
		<ModalWrapper
			isOpen={openFeedbackModal}
			setIsOpen={setOpenFeedbackModal}
			title="Rate your experience">
			<div className="flex flex-col gap-6 py-8 px-6">
				<div className="flex flex-col gap-4">
					<p className="text-[18px] text-center text-neutral-200">
						How was the service today?
					</p>
					<Rating setRating={setRating} />
				</div>

				<textarea
					placeholder="Wtrite your review..."
					value={review}
					onChange={(e) => setReview(e.target.value)}
					className="block h-[150px] border rounded-lg p-4 border-medium-teal bg-very-dark-teal placeholder:text-neutral-600 outline-none text-neutral-200"></textarea>

				<div className="flex flex-col gap-4">
					<input
						type="text"
						placeholder="Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="border bg-very-dark-teal rounded-lg outline-none h-[44px] pl-4 text-[15px] border-medium-teal placeholder:text-neutral-600  text-neutral-200"
					/>
					<input
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="border bg-very-dark-teal rounded-lg outline-none h-[44px] pl-4 text-[15px] border-medium-teal placeholder:text-neutral-600  text-neutral-200"
					/>
					<input
						type="text"
						placeholder="Phone Number"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						className="border bg-very-dark-teal rounded-lg outline-none h-[44px] pl-4 text-[15px] border-medium-teal placeholder:text-neutral-600  text-neutral-200"
					/>
				</div>

				<button
					className="block h-[44px] rounded-lg font-bold text-very-dark-teal bg-light-teal"
					onClick={handleFeedback}>
					Submit
				</button>
			</div>
		</ModalWrapper>
	);
};

export default FeedbackModal;
