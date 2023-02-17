<script>
	// @ts-nocheck

	import { data } from "./assets/data";

	let flag = true;
	let dataLang = data.es;
	let langDescription = "";

	function changeLanguage() {
		if (flag) {
			flag = false;
			dataLang = data.es;
			langDescription = "View site in english?";
		} else {
			flag = true;
			dataLang = data.en;
			langDescription = "¿Ver sitio en español?";
		}
	}

	changeLanguage();
</script>

<div class="marvel">
	<button
		class="project medium_shake_it"
		on:click={() => {
			changeLanguage();
		}}
	>
		<div class="project__body">
			<span class="toggle-label">{langDescription}</span>
		</div>
	</button>
	<section class="marvel__intro">
		<h1 class="">
			{dataLang.titulo}
			<span class="t__marker">{dataLang.nombreCorto}</span>
			<span class="wave">👋</span>
		</h1>
		<p class="t__rainbow">{dataLang.profesion}</p>
	</section>
	<section class="marvel__section">
		<h2>
			<span class="t__marker">{dataLang.acerca.de}</span>{dataLang.acerca
				.mi}
		</h2>
		<div
			bind:innerHTML={dataLang.acerca.contenido}
			contenteditable="false"
		/>
	</section>
	<section class="marvel__section">
		<h2>
			<span class="t__marker">{dataLang.techStack.tech}</span>{dataLang
				.techStack.stack}
		</h2>
		<div
			bind:innerHTML={dataLang.techStack.contenido}
			contenteditable="false"
		/>
		<div class="marvel__flex">
			<img
				src="/src/assets/imgs/tools/tool_01.png"
				alt="JAVASCRIPT ICON"
				class="marvel__card slow_shake_it"
			/>
			<img
				src="/src/assets/imgs/tools/tool_03.png"
				alt="JAVASCRIPT ICON"
				class="marvel__card slow_shake_it"
			/>
			<img
				src="/src/assets/imgs/tools/tool_04.png"
				alt="FIGMA ICON"
				class="marvel__card slow_shake_it"
			/>

			<img
				src="/src/assets/imgs/tools/tool_05.png"
				alt="FIGMA ICON"
				class="marvel__card slow_shake_it"
			/>
			<img
				src="/src/assets/imgs/tools/tool_06.png"
				alt="JAVASCRIPT ICON"
				class="marvel__card slow_shake_it"
			/>
		</div>
	</section>
	<section class="marvel__section">
		<h2>
			{dataLang.experiencia.mi}<span class="t__marker"
				>{dataLang.experiencia.experiencia}</span
			>
		</h2>
		<p>
			{dataLang.experiencia.descripcion}
		</p>
		<div class="marvel__column">
			<ul>
				{#each dataLang.experiencia.empresas as data}
					<li>
						<div>
							<h3 class="marvel__column__job">
								{data.titulo}
							</h3>
							<p class="mrg-20 t__uva">
								{data.empresa}
								<span style="color: gray; font-size: 0.8em"
									>{data.tiempo}</span
								>
								{#if data.tiempo.includes("Actual") || data.tiempo.includes("Now")}
									<!-- <span class="marvel__column__now">NOW</span> -->
									<span class="wave">👈</span>
								{/if}
							</p>

							{#if data.logo === ""}
								<div
									class="marvel__column__logo"
									style="background-color: {data.backgroundColor};"
								/>
							{:else}
								<img
									src={data.logo}
									alt=""
									class="marvel__column__logo"
								/>
							{/if}

							<p class="marvel__column__description">
								{data.descripcion}
							</p>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</section>

	<!-- Project Section -->

	<section class="marvel__section">
		<h2>
			<span class="t__marker"> {dataLang.contacto.contacto}</span>
			{dataLang.contacto.me}
		</h2>
		<p>
			{dataLang.contacto.contenido}
			<span class="wave">👋</span>
		</p>
		<div class="stage">
			<!-- svelte-ignore a11y-missing-content -->
			<a
				href="https://github.com/horaciozoroladev"
				target="_blank"
				rel="noreferrer"
				class="fa fa-brands fa-github box jump"
			/>
			<!-- svelte-ignore a11y-missing-content -->
			<a
				href="https://www.linkedin.com/in/horacio-zorola-91936720b/"
				target="_blank"
				rel="noreferrer"
				class="fa fa-brands fa-linkedin box jump"
			/>
		</div>
	</section>
</div>
