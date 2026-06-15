import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Poll } from '../../../../core/models/poll';
import { PollVote } from '../../../../core/models/poll-votes';

@Component({
  selector: 'app-poll-response',
  standalone: false,
  templateUrl: './poll-response.component.html',
  styleUrl: './poll-response.component.css',
})
export class PollResponseComponent implements OnInit {

  // Recebe a enquete selecionada pelo usuário na lista
  @Input() poll: Poll | null = null;

  // Recebe as opções de resposta
  @Input() answers: string[] = [];

  // Avisa o pai para voltar à lista
  @Output() responseClosed = new EventEmitter<void>();

  // Guarda a resposta selecionada pelo usuário
  selectedAnswer: string | null = null;

  // Controla a exibição da mensagem de sucesso
  voted: boolean = false;

  // Controla se o usuário já votou — bloqueia novo voto
  hasVoted: boolean = false;

  ngOnInit(): void {
    this.selectedAnswer = null;
    this.voted = false;
  }

  selectAnswer(answer: string): void {
    // Impede trocar a resposta após votar
    if (this.hasVoted) return;
    this.selectedAnswer = answer;
  }

  onVote(): void {
    if (!this.selectedAnswer) return;

    console.log('Voto registrado:', {
      pollId:  this.poll?.id,
      answer:  this.selectedAnswer,
    });

    this.hasVoted = true;
    this.voted = true;

    // Aguarda 2 segundos mostrando a mensagem e volta para a lista
    setTimeout(() => {
      this.onBack();
    }, 2000);
  }

  // Calcula a quantidade de políticos da enquete
  getTotalPoliticians(): number {
    if (!this.poll?.votes) return 0;

    const politicians = new Set<number>();
    this.poll.votes.forEach((vote: PollVote) => {
      vote.users
        ?.filter(user => user.partyId)
        .forEach(user => politicians.add(user.id));
    });

    return politicians.size;
  }

  onBack(): void {
    this.voted = false;
    this.hasVoted = false;
    this.selectedAnswer = null;
    this.responseClosed.emit();
  }

  getDaysRemaining(expiresAt: Date): number {
    const today = new Date();
    const expiry = new Date(expiresAt);
    const diff = expiry.getTime() - today.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }
}
