import React, { useState } from 'react';
import Image from 'next/image';

export function ModalBox({ onClose, rank, setRank, percentile, setPercentile, score, setScore }) {
    const [errors, setErrors] = useState({ stats: {} });
    const [stats, setStats] = useState({
        rank: '',
        percentile: '',
        score: ''
    });

    const validate = () => {
        let errors = { stats: {} };

        if (!stats.rank) {
            errors.stats.rank = 'Rank should be a number';
        } else if (isNaN(Number(stats.rank))) {
            errors.stats.rank = 'Rank should be a number';
        }

        if (!stats.percentile) {
            errors.stats.percentile = 'Required | Percentile 0-100';
        } else if (Number(stats.percentile) < 0 || Number(stats.percentile) > 100) {
            errors.stats.percentile = 'Percentile must be between 0 and 100';
        }

        if (!stats.score) {
            errors.stats.score = 'Score is required';
        } else if (Number(stats.score) < 0 || Number(stats.score) > 15) {
            errors.stats.score = 'Score should be between 0 and 15';
        } else if (isNaN(Number(stats.score))) {
            errors.stats.score = 'Score should be a number between 0-15';
        }

        return errors;
    };

    const handleSave = () => {
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors.stats).length === 0) {
            setRank(stats.rank);
            setPercentile(stats.percentile);
            setScore(stats.score);
            console.log({ rank: stats.rank, percentile: stats.percentile, score: stats.score });
            onClose();
        }
    };

    return (
        <div className="p-10 md:p-0 flex justify-center items-center fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg w-full max-w-3xl relative">
                <div className='flex justify-between mb-6'>
                    <div className="text-2xl font-bold">Update scores</div>
                    <div className='w-16 bg-white h-16'>
                    <Image
                        src={"https://res.cloudinary.com/debw7vpqa/image/upload/v1721431123/html_apn4wf.jpg"}
                        alt="html logo"
                        width={70} height={70}
                    ></Image>
                        </div>
                </div>
                <form className="space-y-6 flex flex-col gap-5">
                    <div className='flex gap-10'>
                        <label className="block w-11/12 text-lg font-semibold text-black mb-2">
                            1. Update your <span className="font-extrabold">Rank</span>
                        </label>
                        <div className='flex flex-col'>
                            <input
                                type="number"
                                value={stats.rank}
                                onChange={(e) => setStats(prev => ({
                                    ...prev,
                                    rank: e.target.value
                                }))}
                                className="w-full font-bold max-w-44 border border-gray-300 rounded p-2"
                            />
                            <div>
                                {errors.stats.rank && <p className="text-red-500 text-sm mt-1">{errors.stats.rank}</p>}
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-10'>
                        <label className="block w-11/12 text-lg font-semibold text-black mb-2">
                            2. Update your <span className="font-extrabold">Percentile</span>
                        </label>
                        <div className='flex flex-col'>
                            <input
                                type="number"
                                value={stats.percentile}
                                onChange={(e) => setStats(prev => ({
                                    ...prev,
                                    percentile: e.target.value
                                }))}
                                className="w-full font-bold max-w-44 border border-gray-300 rounded p-2"
                            />
                            <div>
                                {errors.stats.percentile && <p className="text-red-500 text-sm mt-1">{errors.stats.percentile}</p>}
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-10'>
                        <label className="block w-11/12 text-lg font-semibold text-black mb-2">
                            3. Update your <span className="font-extrabold">Current Score (out of 15)</span>
                        </label>
                        <div className='flex flex-col'>
                            <input
                                type="number"
                                value={stats.score}
                                onChange={(e) => setStats(prev => ({
                                    ...prev,
                                    score: e.target.value
                                }))}
                                className="w-full font-bold max-w-44 border border-gray-300 rounded p-2"
                            />
                            <div>
                                {errors.stats.score && <p className="text-red-500 text-sm mt-1">{errors.stats.score}</p>}
                            </div>
                        </div>
                    </div>
                </form>
                <div className="flex justify-end mt-6 space-x-4">
                    <button className="bg-white border-blue-800 border-2 font-bold text-blue-800 rounded px-4 py-2" onClick={onClose}>Cancel</button>
                    <button className="bg-blue-800 text-white rounded font-bold px-4 py-2" onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    );
}
