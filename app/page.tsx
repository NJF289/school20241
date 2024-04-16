import Image from "next/image";

export default function Home() {
  return ( 
   </head>
  <body class="bg-black text-white text-center max-w-[1340px] mx-auto">
    <div class="md:flex justify-between lg:mt-8 font-bold">
      <h3>🏫Escola Tecnológica🎒</h3>
      <nav>
        <a href="">Home &nbsp;</a>
        <a href="">Cursos &nbsp;</a>
        <a href="">Contato &nbsp;</a>
        <a href="">Login &nbsp;</a>
      </nav>
    </div>

    <div class="mt-8 md:grid grid-cols-2 items-center lg:size-4/5">
      <div>
        <h1>UTFTC</h1>
        <h3 class="text-[#00e77f]">Melhor Escola de informatica</h3>
        <button class="btn">Informações</button>
      </div>
      <div><img src="/img/banner.svg" alt="Homem sentado" /></div>
    </div>
    <div class="font-bold">
      <h3>Conheça Nossos <span class="text-[#00e77f]">Curso</span></h3>
    </div>

    <div class="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div class="bg-[#4d4d4d] rounded-lg">
        <a href="http://wwww.html">
          <img src="/img/html.svg" alt="" />
          <div class="courses-description">
            <h4>Curso html</h4>
            <p>Descrição</p>
          </div>
        </a>
      </div>
      <div class="bg-[#4d4d4d] rounded-lg">
        <a href="http://wwww.html">
          <img src="/img/css.svg" alt="" />
          <div class="courses-description">
            <h4>Curso CSS</h4>
            <p>Descrição</p>
          </div>
        </a>
      </div>

      <div class="bg-[#4d4d4d] rounded-lg">
        <a href="http://wwww.html">
          <img src="/img/js.svg" alt="" />
          <div class="courses-description">
            <h4>Curso JAVA</h4>
            <p>Descrição</p>
          </div>
        </a>
      </div>
      <div class="bg-[#4d4d4d] rounded-lg">
        <a href="http://wwww.html">
          <img src="/img/games.svg" alt="" />
          <div class="courses-description">
            <h4>Curso GAMES</h4>
            <p>Descrição</p>
          </div>
        </a>
      </div>
      <div class="bg-[#4d4d4d] rounded-lg">
        <a href="http://wwww.html">
          <img src="/img/design.svg" alt="" />
          <div class="courses-description">
            <h4>Curso DESIGNE</h4>
            <p>Descrição</p>
          </div>
        </a>
      </div>
      <div class="bg-[#4d4d4d] rounded-lg">
        <a href="http://wwww.html">
          <img src="/img/robot.svg" alt="" />
          <div class="courses-description">
            <h4>Curso ROBUT</h4>
            <p>Descrição</p>
          </div>
        </a>
      </div>
    </div>
    <div class="mt-8">
      <div class="flex justify-center">
        <a class="mr-2" href="">
          <svg
            class="fill-white w-[34px] h-[34px] text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <a class="mr-2" href=""
          ><svg
            class="fill-white w-[34px] h-[34px] text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <a class="mr-2" href=""
          ><svg
            class="fill-white w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
            />
          </svg>
        </a>
        <a class="mr-2" href=""
          ><svg
            class="fill-white w-[28px] h-[28px] text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <a href=""
          ><svg
            class="fill-white w-[28px] h-[28px] text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
              clip-rule="evenodd"
            />
            <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
          </svg>
        </a>
      </div>
      <div class="mt-4 border-t-2 border-white">
        <p>
          Copyrighit UTFPR 2024-1,<span class="text-[#00e77f]"
            >Alunos web.</span
          >
          I all righit reserve
        </p>
      </div>
    </div>
  </body>
    
  );
}
