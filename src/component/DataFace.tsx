import { useEffect, useState } from "react";

type User = {
    id: number;
    name: string;
    email: string;
};

export default function DataFace() {
    const [users, setUser] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data: User[]) => {
                setUser(data);
                setLoading(false);
            });
    }, []);

    if (loading) return <p className="text-center text-lg font-semibold mt-10">Loading...</p>;

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
                User Data Fetch
            </h1>
            <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
                <ul className="divide-y divide-gray-200">
                    {users.map((u) => (
                        <li
                            key={u.id}
                            className="py-4 px-3 hover:bg-indigo-50 transition rounded-md"
                        >
                            <p className="text-lg font-semibold text-gray-800">{u.name}</p>
                            <p className="text-sm text-gray-500">{u.email}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
