import RequestWizard from "@/components/wizard/RequestWizard";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-6 lg:p-24 bg-reparai-background dark:bg-zinc-900">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex mb-8">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Reparaí v0.3&nbsp;
                    <code className="font-mono font-bold">A Inteligência das Casas</code>
                </p>
            </div>

            <div className="w-full max-w-lg mb-12">
                <RequestWizard />
            </div>

            <div className="grid text-center lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left gap-4">
                <a
                    href="/user"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                >
                    <h2 className="mb-3 text-xl font-semibold">
                        Sou Cliente{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        Acompanhe seus chamados.
                    </p>
                </a>

                <a
                    href="/provider"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                >
                    <h2 className="mb-3 text-xl font-semibold">
                        Sou Técnico{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        Área exclusiva para parceiros.
                    </p>
                </a>

                <a
                    href="/admin"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                >
                    <h2 className="mb-3 text-xl font-semibold">
                        Admin{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        Gestão da plataforma e dados.
                    </p>
                </a>
            </div>
        </main>
    );
}
